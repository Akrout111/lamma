# ==========================================
# Stage 1: deps
# ==========================================
FROM oven/bun:1-slim AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# ==========================================
# Stage 2: builder
# ==========================================
FROM oven/bun:1-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN bun ./node_modules/prisma/build/index.js generate
RUN bun run build
# Build live-companion
RUN cd mini-services/live-companion && bun install

# ==========================================
# Stage 3: prod-deps
# ==========================================
FROM oven/bun:1-slim AS prod-deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --production --frozen-lockfile --ignore-scripts
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# ==========================================
# Stage 4: runner
# ==========================================
FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV LIVE_COMPANION_PORT=3003

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Next.js standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Prod deps + Prisma
COPY --from=prod-deps --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/prisma ./node_modules/prisma
COPY --chown=nextjs:nodejs prisma ./prisma
COPY --chown=nextjs:nodejs package.json ./package.json

# Live companion service
COPY --from=builder --chown=nextjs:nodejs /app/mini-services ./mini-services

USER nextjs
EXPOSE 3000 3003

# Start both Next.js and live-companion services
CMD sh -c "node server.js & cd mini-services/live-companion && bun run start & wait"
