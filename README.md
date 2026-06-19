# 🌙 لَمَّة (Lamma)

> **منصة كويتية لتجمعات حميمية مُنتقاة.** نتعامل مع الفعاليات كحوارٍ، لا كمعاملة.

## نظرة عامة

لَمَّة منصة كويتية ثنائية اللغة (عربي/إنجليزي) لتجمعات حميمية مُنتقاة. تستلهم من ثقافة الديوانية الكويتية بصورة عصرية شبابية. المشروع مبني بـ Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui.

## المكدس التقني

| التقنية | الاستخدام |
|---|---|
| **Next.js 16** | إطار العمل (App Router) |
| **TypeScript 5** | لغة البرمجة |
| **Tailwind CSS 4** | التنسيق |
| **shadcn/ui** | مكتبة المكونات |
| **Prisma ORM** | قاعدة البيانات (SQLite dev, PostgreSQL prod) |
| **next-intl v4** | التدويل (عربي/إنجليزي + RTL/LTR) |
| **Zustand** | إدارة الحالة (client-side) |
| **Socket.io** | الرفيق اللحظي (Live Companion) |
| **z-ai-web-dev-sdk** | الذكاء الاصطناعي (LLM + Image Generation) |
| **recharts** | الرسوم البيانية |
| **react-markdown** | عرض الرسائل التحريرية |

## الميزات

### Discovery (الاستكشاف)
- 8 تجمعات مع وصف تحريري كامل
- 5 أصحاب تجمعات مع ملفات شخصية
- 6 مواضيع تحريرية بألوان مميزة
- 3 رسائل تحريرية طويلة (2000-3000 كلمة)
- فلترة كاملة (مواضيع، صيغة، سعر، تاريخ، صلاة)
- بحث باللغة الطبيعية (AI-powered)

### التقديم والحضور
- نموذج تقديم متعدد الخطوات (4 خطوات)
- مراجعة الطلبات من قبل صاحب التجمع
- قائمة انتظار مرتّبة بالاستحقاق (merit-ranked)
- لوحة مستخدم كاملة
- لوحة صاحب تجمع مع analytics

### الذكاء الاصطناعي
- مطابقة ذكية محلية (TF-IDF + cosine similarity)
- توصيات مخصصة مع أسباب قابلة للتفسير
- مساعد ذكي (AI Concierge) للمحادثة
- ملخصات تلقائية للرسائل (TL;DR)
- تحسين الوصف بالـ AI
- اقتراح أسئلة التقديم
- رؤى ذكية لمراجعة الطلبات

### الرفيق اللحظي (Live Companion)
- محادثة فورية (WebSocket + Socket.io)
- لحظات (Moments) — highlights واقتباسات
- حضور الحاضرين (presence)
- محاكاة بوتات للحضور الوهمي
- عداد الوقت + تذكير الصلاة

### PWA + الإشعارات
- Service Worker + offline shell
- install prompt
- Browser Notification API
- مركز إشعارات
- صندوق رسائل للـ host

## التشغيل

### المتطلبات
- Node.js 18+ أو Bun
- npm/bun

### التثبيت
```bash
bun install
cd mini-services/live-companion && bun install && cd ..
```

### التشغيل (dev)
```bash
# Terminal 1: Next.js
bun run dev

# Terminal 2: Live Companion
bun run live:start
```

### المتغيرات البيئية
انسخ `.env.example` إلى `.env` وعدّل حسب الحاجة.

## البنية

```
src/
├── app/[locale]/          # صفحات التطبيق
│   ├── gatherings/        # القائمة + التفاصيل + التقديم + Live
│   ├── hosts/             # قائمة + ملف
│   ├── topics/            # قائمة + تفاصيل
│   ├── letters/           # أرشيف + قارئ
│   ├── about/             # عن لَمَّة
│   ├── faq/               # أسئلة شائعة
│   ├── dashboard/         # لوحة المستخدم + host + concierge + matches + notifications
│   └── api/v1/            # API routes (health, AI, matching)
├── components/lamma/      # مكونات UI
├── data/                  # بيانات mock
├── lib/                   # stores, AI, matching, utils
├── i18n/                  # next-intl config
└── messages/              # ترجمات (ar.json + en.json)

mini-services/
└── live-companion/        # WebSocket service (port 3003)

public/
├── images/                # 52 صورة AI-generated
├── icons/                 # PWA icons
├── manifest.json          # PWA manifest
└── sw.js                  # Service Worker
```

## الترخيص

MIT — انظر [LICENSE](LICENSE)
