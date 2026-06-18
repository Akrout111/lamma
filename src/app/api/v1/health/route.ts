import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

/**
 * GET /api/v1/health
 * Lightweight liveness + DB connectivity check.
 */
export async function GET() {
  try {
    // SQLite supports `SELECT 1` via the generic queryRaw.
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      db: 'connected',
      locale: 'ar,en',
      service: 'lamma',
      phase: '0-bootstrap',
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'DB connection failed',
        detail: String(error),
        timestamp: new Date().toISOString(),
      },
      { status: 503 },
    );
  }
}
