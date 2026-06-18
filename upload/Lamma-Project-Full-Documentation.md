# 🌙 لَمَّة (Lamma)
## الدليل الكامل لمشروع منصة التجمعات الحميمية الكويتية

> **"نحن لا نبني تطبيقات CRUD. نحن نبني منتجات ثقافية. لَمَّة هي الدليل."**

---

## 📑 فهرس المحتويات

1. [نظرة عامة على المشروع](#1-نظرة-عامة-على-المشروع)
2. [الفلسفة والتموضع](#2-الفلسفة-والتموضع)
3. [تحليل السوق والمبررات](#3-تحليل-السوق-والمبررات)
4. [الجمهور المستهدف](#4-الجمهور-المستهدف)
5. [الهوية البصرية والتصميم](#5-الهوية-البصرية-والتصميم)
6. [هندسة المعلومات (IA)](#6-هندسة-المعلومات-ia)
7. [الميزات الأساسية](#7-الميزات-الأساسية)
8. [الميزات المميزة (Differentiators)](#8-الميزات-المميزة-differentiators)
9. [نماذج البيانات (Prisma Schema)](#9-نماذج-البيانات-prisma-schema)
10. [التقنيات المستخدمة](#10-التقنيات-المستخدمة)
11. [تكاملات خارجية](#11-تكاملات-خارجية)
12. [خطة التنفيذ (8 أسابيع)](#12-خطة-التنفيذ-8-أسابيع)
13. [البيانات التجريبية (Seed Data)](#13-البيانات-التجريبية-seed-data)
14. [نشر المشروع (Railway + Supabase)](#14-نشر-المشروع-railway--supabase)
15. [خطة التسويق للوكالة](#15-خطة-التسويق-للوكالة)
16. [المخاطر والحلول](#16-المخاطر-والحلول)
17. [مقارنة لَمَّة مع موقعك الأول](#17-مقارنة-لَمَّة-مع-موقعك-الأول)
18. [Checklist ما قبل النشر](#18-checklist-ما-قبل-النشر)

---

## 1. نظرة عامة على المشروع

### التعريف المختصر

**لَمَّة (Lamma)** هي منصة كويتية لتجمعات حميمية مُنتقاة — تتعامل مع الفعاليات كحوارٍ، لا كمعاملة. تستلهم المشروع من ثقافة **الديوانية الكويتية** (التي أضافتها UNESCO لقائمة التراث الثقافي غير المادي عام 2025) لكن بصورة عصرية شبابية.

### لماذا "لَمَّة"؟

- **لمة** في اللهجة الكويتية = تجمّع صغير دافئ
- مرادف حداثي للديوانية لكن أكثر شبابية وعصرية
- سهلة النطق بالعربية والإنجليزية (Lamma)
- تحمل إحساس "اللمّ الشمل" — التجمع حول فكرة

### الفكرة في جملة واحدة

> منصة لتجمعات حميمية (15-80 شخص) مُنتقاة بعناية في الكويت، حيث يتقدّم المهتمون بطلب حضور بدل شراء تذكرة، ويتم اختيارهم بناءً على مدى ملاءمتهم لموضوع التجمع، مع تجربة تحريرية ومجتمعية قبل وبعد كل لمة.

### النوع

منصة **C2C Marketplace** للتجمّعات الحميمية — بين منصات الفعاليات التقليدية وشبكات التواصل المجتمعي.

### المكدس التقني

| الطبقة | التقنية |
|--------|---------|
| Frontend | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 4 + Radix UI |
| Database | PostgreSQL (Supabase) + pgvector |
| ORM | Prisma 6.19+ |
| Runtime | Bun |
| Containerization | Docker multi-stage |
| Hosting | Railway |
| Realtime | Supabase Realtime |
| Payments | Tap Payments (KNET) |
| AI | OpenAI embeddings + pgvector |
| Maps | Mapbox |
| External APIs | AlAdhan (مواقيت الصلاة) |
| CMS | Sanity أو محتوى مدمج في Prisma |

---

## 2. الفلسفة والتموضع

### الفلسفة الأساسية

```
الموقع الأول:  تصفّح  →  اشترِ  →  احضر
لَمَّة:         اكتشف  →  تقدّم بطلب  →  تجمّع  →  شارك
```

### المبادئ الأربعة

#### 1. الحميمية على الحجم
- لا فعاليات بـ 500+ شخص
- كل لمة بين 15-80 شخص كحد أقصى
- الحضور بناءً على **الطلب والموافقة**، وليس الشراء المباشر

#### 2. التحرير على المعاملات
- كل لمة لها **قصة** تُروى قبل وبعد
- مجلة "Letters from a gathering" — رسائل تحريرية طويلة
- تصنيف حسب **المواضيع** (Topics) وليس الفئات (Categories)

#### 3. المجتمع على الجمهور
- الحضور المتراكم يبني **سمعة**
- مطابقة ذكية بين الحضور بنفس الاهتمامات
- العضوية لها **مستويات** (Newcomer → Regular → Curator)

#### 4. الوعي الثقافي على العمومية
- جدولة تحترم **مواقيت الصلاة**
- فلترة حسب **الصيغة** (رجال/نساء/عائلات/مختلط)
- تقويم يدعم **الهجري** بجانب الميلادي
- محتوى **ثنائي اللغة** بشكل أصيل (ليس ترجمة آلية)

---

## 3. تحليل السوق والمبررات

### حجم الفرصة

| المؤشر | القيمة | المصدر |
|--------|--------|--------|
| عدد السكان في الكويت | ~4.7 مليون | إحصاءات رسمية |
| نسبة المغتربين | ~70% | تعداد 2024 |
| نسبة الشباب (< 30 سنة) | ~35% | إحصاءات |
| متابعو @listkuwait (مجمع فعاليات) | 86K | Instagram |
| نسبة Gen Z يشترون импلسفلي من السوشيال | 76% | استطلاع 2024 |

### المنافسون الحاليون ونقاط الضعف

| المنصة | القوة | الضعف |
|--------|------|------|
| **Eventat** | الرائد محلياً، دفع KNET | معاملاتي بحت، لا مجتمع |
| **Platinumlist** | دولي، فعاليات كبيرة | غير مُخصّص للكويت، UX عام |
| **Eventbrite Kuwait** | علامة عالمية | عام جداً، لا حس ثقافي |
| **@listkuwait (Instagram)** | يكتشف الفعاليات | لا حجز، تجربة مبتورة |

### الفجوة التي تملؤها لَمَّة

**لا يوجد منصة كويتية تجمع بين:**
- حميمية **Sofar Sounds** (تجمعات صغيرة مُنتقاة)
- عمق **Resident Advisor** التحريري (محتوى، مواضيع، أصوات)
- قائمة انتظار **DICE** (حصرية وذكاء)
- تكرارية **Meetup** (مجموعات تتكرر)
- **بوعي ثقافي كويتي** (مواقيت الصلاة، الديوانية، الهجري)

### لماذا الآن؟

1. **UNESCO اعترفت بالديوانية (2025)** — موجة اهتمام عالمي
2. **جيل Z الكويتي** يبحث عن تجارب أصيلة لا توجد على Instagram
3. **موجة PWA + Realtime** أصبحت متاحة وبسيطة
4. **Tap Payments** سهّل الدفع المحلي (KNET)
5. **Supabase** يوفّر Realtime + pgvector مجاناً للبداية

---

## 4. الجمهور المستهدف

### الشخصيات الأساسية (User Personas)

#### الشخصية 1: نورة (28 سنة، كويتية)
- **الوظيفة:** مصمّمة جرافيك
- **الدخل:** 1500 KWD/شهر
- **السلوك:** تبحث عن تجارب **أصيلة وحميمية**، تكره الحفلات المزدحمة
- **الألم:** الفعاليات في الكويت إما超大 مزدحمة أو مكررة
- **ما تريده من لَمَّة:** لقاء أشخاص يشاركونها اهتماماتها بشكل أعمق

#### الشخصية 2: أحمد (34 سنة، كويتي)
- **الوظيفة:** مهندس برمجيات
- **الدخل:** 2500 KWD/شهر
- **السلوك:** يحضر ورش عمل، يريد **تعلّم** وليس فقط ترفيه
- **الألم:** الورش باهظة (300+ KWD) وغير منتقاة
- **ما يريده من لَمَّة:** ماستر كلاسات بأسعار معقولة مع أناس جادين

#### الشخصية 3: سارة (24 سنة، مغتربة مصرية)
- **الوظيفة:** مديرة تسويق
- **الدخل:** 900 KWD/شهر
- **السلوك:** جديدة في الكويت، تريد **بناء شبكة علاقات**
- **الألم:** صعوبة دخول المجتمع الكويتي المغلق
- **ما تريده من لَمَّة:** تجمعات ترحيبية متنوعة ثقافياً

#### الشخصية 4: خالد (42 سنة، كويتي)
- **الوظيفة:** **صاحب تجمّع** — فنان تشكيلي
- **الألم:** يريد تنظيم ورش فنية لكن لا يوجد منصة تناسب حجمه الصغير
- **ما يريده من لَمَّة:** أدوات احترافية لإدارة ورشه بدون تعقيد Eventbrite

### المقاييس الديموغرافية المستهدفة

- **العمر:** 22-45 سنة (تركيز على 25-35)
- **الجنسية:** 60% كويتيون، 30% مغتربون عرب، 10% مغتربون غير عرب
- **الجنس:** متوازن (مع احترام الصيغ العائلية/المنفصلة)
- **الدخل:** متوسط وعالي (500+ KWD/شهر)
- **اللغة:** عربي وإنجليزي بطلاقة

---

## 5. الهوية البصرية والتصميم

### الشعار (Logo)

```
        ┌──────────┐
        │   لَمَّة    │  ← عربي
        │  LAMMA   │  ← إنجليزي
        └──────────┘
              ●    ← نقطة التجمع (مستوحاة من دائرة الديوانية)
```

**الفلسفة:** بساطة تحريرية — حرف + نقطة. النقطة = التجمع حوله.

### لوحة الألوان

```css
:root {
  /* الألوان الأساسية */
  --color-sand: #F4EDE0;        /* رملي — الخلفية الأساسية */
  --color-ink: #1A1614;         /* حبر — النصوص الأساسية */
  --color-clay: #B85C3E;        /* طين أحمر — أكسنت */
  
  /* الألوان الثانوية */
  --color-teal: #2A5F5A;        /* تركوازي — روابط */
  --color-saffron: #E8A93C;     /* زعفراني — تمييز */
  --color-stone: #8B8478;       /* حجري — نصوص ثانوية */
  
  /* الحالات */
  --color-success: #4A7C59;     /* أخضر — تأكيد */
  --color-warning: #E8A93C;     /* أصفر — تنبيه */
  --color-error: #B85C3E;       /* أحمر — خطأ */
  
  /* الخلفيات */
  --color-paper: #FBF8F2;       /* ورق — بطاقات */
  --color-shadow: rgba(26, 22, 20, 0.08);
}
```

### الإلهام البصري

- **Cereal Magazine** — البساطة التحريرية الفاخرة
- **Kinfolk** — الهدوء والمساحات البيضاء
- **Apartment Therapy** — الدفء المنزلي
- **Sofar Sounds** — الحميمية الموسيقية

### الخطوط (Typography)

```css
/* العناوين (Headings) */
--font-display-en: 'Fraunces', serif;     /* إنجليزي — سيريف عصري */
--font-display-ar: 'IBM Plex Sans Arabic', sans-serif;  /* عربي — حداثي */

/* النصوص (Body) */
--font-body-en: 'Inter', sans-serif;       /* إنجليزي — مقروء */
--font-body-ar: 'IBM Plex Sans Arabic', sans-serif;  /* عربي */

/* الأرقام والبيانات */
--font-mono: 'JetBrains Mono', monospace;
```

**قواعد التايبوغرافي:**
- أحجام كبيرة للعناوين (48-72px على الديسكتوب)
- تباعد سطور مريح (1.6 للنصوص العربية)
- استخدام الأوزان المختلفة للتمييز البصري
- أرقام بخط Mono للوضوح

### الأسلوب العام (Visual Style)

| العنصر | الأسلوب |
|--------|---------|
| الصور | أصلية، طبيعية، إضاءة ناعمة (وليس ستوك فوتو) |
| التخطيط | شبكي مرن، مساحات بيضاء واسعة |
| البطاقات | حواف ناعمة (8-12px radius)، ظلال خفيفة |
| الأيقونات | خط رفيع (Lucide icons) |
| الحركات | بطيئة، سلسة (200-400ms) |
| الصور | 4:5 للبطاقات، 16:9 للهيرو |

### مكوّنات UI الأساسية

1. **GatheringCard** — بطاقة تجمّع بصورة كبيرة + معلومات أساسية
2. **HostCard** — بطاقة صاحب تجمّع مع صورة دائرية + سمعة
3. **TopicPill** — وسم موضوعي (مثل "ذاكرة المكان")
4. **ApplicationForm** — نموذج طلب حضور متعدد الخطوات
5. **PrayerTimeBadge** — شارة مواقيت الصلاة
6. **LetterCard** — بطاقة محتوى تحريري
7. **GatheringCompanion** — واجهة Realtime أثناء اللمة

---

## 6. هندسة المعلومات (IA)

### هيكلية الـ URLs

```
الصفحة الرئيسية: /  (أو /[locale])
├── /gatherings  (التجمعات القادمة — قابلة للفلترة)
│   ├── /gatherings/[slug]  (صفحة التجمع التفصيلية)
│   ├── /gatherings/apply/[slug]  (نموذج طلب الحضور)
│   ├── /gatherings/[slug]/live  (رفيق التجمع اللحظي)
│   └── /gatherings/past  (أرشيف التجمعات السابقة)
│
├── /hosts  (أصحاب التجمعات — بورتفوليو)
│   └── /hosts/[handle]  (صفحة صاحب التجمع)
│
├── /topics  (التصنيف التحريري)
│   └── /topics/[slug]  (مثل: "ذاكرة المكان")
│
├── /letters  (الأرشيف التحريري — رسائل من لمة)
│   └── /letters/[slug]
│
├── /community  (لوحة الأعضاء)
│   ├── /community/dashboard  (تجمعاتي، طلباتي، مطابقاتي)
│   ├── /community/profile  (ملفي الشخصي)
│   └── /community/matches  (الأشخاص المتوافقون معي)
│
├── /host-with-us  (صفحة جذب أصحاب التجمعات)
│   └── /host-with-us/apply  (نموذج التقديم)
│
├── /about  (عن لَمَّة)
├── /faq
└── /contact
```

### التنقّل الرئيسي (Navigation)

```
[Logo: لَمَّة]   تجمعات   أصحاب   مواضيع   رسائل   [🔍 بحث]   [🌐 AR/EN]   [👤 حسابي]
```

### الفلترة على /gatherings

- **حسب الموضوع** (Topics): متعدد الاختيار
- **حسب التاريخ**: هذا الأسبوع / الشهر / مخصص
- **حسب الصيغة**: رجال / نساء / عائلات / مختلط
- **حسب السعر**: مجاني / مدفوع / نطاق سعري
- **حسب أصحاب التجمع**: متعدد الاختيار
- **خارج أوقات الصلاة**: toggle

### خرائط الصفحات الرئيسية

#### الصفحة الرئيسية (/)

```
┌─────────────────────────────────────────────────┐
│ [Hero: "تجمعات حميمية في الكويت" + CTA]         │
├─────────────────────────────────────────────────┤
│ [لمة قادمة مميزة — بطاقة كبيرة]                  │
├─────────────────────────────────────────────────┤
│ [3 لمات قادمة — بطاقات أصغر]                    │
├─────────────────────────────────────────────────┤
│ [اقتباس من رسالة تحريرية سابقة]                  │
├─────────────────────────────────────────────────┤
│ [أصحاب التجمعات المميزون — كاروسيل]              │
├─────────────────────────────────────────────────┤
│ [موضوعات تحريرية — وسمات]                       │
├─────────────────────────────────────────────────┤
│ [Newsletter signup]                             │
└─────────────────────────────────────────────────┘
```

#### صفحة التجمع (/gatherings/[slug])

```
┌─────────────────────────────────────────────────┐
│ [Hero image large]                              │
│ [Title + Topic pills]                           │
├─────────────────────────────────────────────────┤
│ [Date + Time + Prayer-aware badge]              │
│ [Location (with Mapbox map)]                    │
│ [Host info card]                                │
├─────────────────────────────────────────────────┤
│ [Description (long-form editorial)]             │
│ [Who should attend?]                            │
│ [What to expect]                                │
├─────────────────────────────────────────────────┤
│ [Attendee capacity: 25/80 with avatar grid]     │
├─────────────────────────────────────────────────┤
│ [Application CTA — "تقديم طلب الحضور"]          │
├─────────────────────────────────────────────────┤
│ [Past Letters from this host/topic]             │
├─────────────────────────────────────────────────┤
│ [Related gatherings]                            │
└─────────────────────────────────────────────────┘
```

#### لوحة صاحب التجمع (Host Dashboard)

```
┌─────────────────────────────────────────────────┐
│ [Sidebar: تجمعاتي | الطلبات | الرسائل | الإحصاءات]│
├─────────────────────────────────────────────────┤
│ [تجمعاتي القادمة — قائمة]                        │
│ [طلبات تنتظر المراجعة — مع AI matching scores]   │
│ [إحصاءات: عدد الحضور، التقييمات، التكرار]        │
│ [أدوات: إنشاء لمة جديدة، تعديل، إلغاء]            │
└─────────────────────────────────────────────────┘
```

---

## 7. الميزات الأساسية

### 7.1 اكتشاف التجمعات (Gathering Discovery)

- تصفّح حسب الموضوع، التاريخ، الصيغة، السعر
- بحث نصي كامل (PostgreSQL full-text search)
- اقتراحات مخصصة بناءً على الاهتمامات
- خريطة Mapbox لعرض التجمعات حسب الموقع

### 7.2 التقديم على الحضور (Application-based Attendance)

بدل شراء تذكرة مباشرة، يملأ المستخدم طلباً يحتوي على:

```typescript
interface Application {
  gatheringId: string;
  userId: string;
  
  // أسئلة مخصصة من صاحب التجمع
  motivation: string;        // "لماذا تريد الحضور؟"
  background: string;        // "ما خلفيتك؟"
  questions?: Json;          // أسئلة إضافية مخصصة
  
  // معلومات إضافية
  dietaryRestrictions?: string;
  accessibilityNeeds?: string;
  
  // AI matching
  matchScore?: number;       // 0-100, يحسب تلقائياً
  
  // الحالة
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'WAITLISTED';
  reviewedAt?: Date;
  reviewedBy?: string;
  
  createdAt: Date;
}
```

### 7.3 نظام الدفع (Payment System)

- **Tap Payments** للدفع بالـ KNET والبطاقات
- الدفع **بعد الموافقة** على الطلب (وليس قبل التقديم)
- دعم ** partial refunds** عند الإلغاء
- عملة KWD بـ 3 خانات عشرية (Decimal 10,3)

### 7.4 إدارة التجمعات (Gathering Management)

لأصحاب التجمعات:
- إنشاء تجمّع جديد بنموذج متعدد الخطوات
- مراجعة الطلبات مع AI matching scores
- التواصل مع الحاضرين عبر الرسائل
- تصدير قوائم الحضور (PDF/CSV)
- إحصاءات تفصيلية بعد كل لمة

### 7.5 التقويم والمواعيد (Calendar)

- عرض اللمات في تقويم شهري/أسبوعي
- **تقويم مزدوج**: هجري + ميلادي
- **مؤشرات مواقيت الصلاة** على التقويم
- إضافة لمة إلى Google Calendar / Apple Calendar
- إشعارات قبل اللمة بـ 24 ساعة و 1 ساعة

### 7.6 الإشعارات (Notifications)

- إشعار عند **استلام الطلب**
- إشعار عند **الموافقة/الرفض**
- إشعار **قبل اللمة** بـ 24 ساعة
- إشعار **عند فتح باب الحضور** (للملمة المستقبلية)
- إشعار **بنشر رسالة جديدة** من لمة سابقة
- قنوات: Email + In-app + Push (PWA)

---

## 8. الميزات المميزة (Differentiators)

هذه هي الميزات الـ 10 التي تميّز لَمَّة عن أي منصة كويتية أخرى:

### 8.1 ⭐ الحضور بناءً على الطلب (Application-based Attendance)

**كيف يعمل:**
1. يتصفّح المستخدم اللمات
2. يضغط "تقديم طلب الحضور"
3. يملأ نموذج: motivation, background, dietary needs
4. صاحب التجمع يراجع الطلبات مع AI match scores
5. يتم القبول/الرفض/قائمة الانتظار

**لماذا مميّز:** يخلق حصرية وجودة — مثل Sofar Sounds. كل لمة = أشخاص اختاروا أن يكونوا هناك فعلاً.

### 8.2 🕌 الجدولة الواعية لمواقيت الصلاة

**كيف يعمل:**
```typescript
// تكامل مع AlAdhan API
const prayerTimes = await fetch(
  `https://api.aladhan.com/v1/timingsByCity?city=Kuwait&method=4`
);

// عند إنشاء لمة، يظهر تحذير إذا تعارضت مع صلاة
if (gatheringStart <= maghribTime && gatheringEnd >= maghribTime) {
  showWarning("وقتك يتزامن مع صلاة المغبر — هل تريد تعديله؟");
}

// عرض شارة على صفحة اللمة
<PrayerTimeBadge 
  startTime={gathering.start}
  endTime={gathering.end}
  prayerTimes={prayerTimes}
/>
```

**لماذا مميّز:** لا توجد منصة في الكويت تفعل هذا. احترام عميق للثقافة.

### 8.3 📝 التصنيف التحريري حسب الموضوع (Topic Taxonomy)

بدل التصنيف التقليدي (موسيقى/رياضة/مؤتمرات)، استخدم تصنيفاً تحريرياً:

```
- "ذاكرة المكان"        (لمات في أماكن تاريخية)
- "صنّاع الكويت"        (حوار مع صنّاع)
- "الضوء والظل"         (تصوير فني)
- "حكايات الطعام"        (تجارب طعام)
- "أصوات جديدة"          (موسيقى ناشئة)
- "ما بعد العمل"          (networking للمحترفين)
- "روح الكتاب"            (نوادي كتاب)
- "حركات الجسد"           (يوجا، رقص، حركة)
```

كل موضوع له **صفحة** (مثل category page) لكن بأسلوب مجلة.

### 8.4 👥 سمعة أصحاب التجمعات (Host Reputation)

كل صاحب تجمع له **صفحة بورتفوليو** تعرض:
- عدد اللمات المنظمة
- متوسط الحضور
- تقييمات الحضور (1-5 نجوم + تعليقات)
- تخصصاته (Topics)
- صور من لمات سابقة
- "Verified" badge بعد 3 لمات ناجحة

### 8.5 ⚡ رفيق التجمع اللحظي (Real-time Companion)

أثناء اللمة، يتوفر:
```
/gatherings/[slug]/live
```

- **Chat مباشر** للحاضرين فقط
- **صور لحظية** يرفعها الحضور
- **لقطاتMoments** — إشارات قصيرة ("هذه اللحظة رائعة!")
- **خريطة الموقع** للمتأخرين
- **عدّاد الوقت المتبقي**
- **موسيقى خلفية** اختيارية (لللمة الموسيقية)

**التقنية:** Supabase Realtime (PostgreSQL triggers + WebSocket)

### 8.6 ✉️ "رسائل من لمة" (Letters Content)

بعد كل لمة، يُنشر مقال طويل (2000-3000 كلمة) يحكي:
- ما حدث في اللمة
- اقتباسات من الحاضرين
- صور
- تأملات
- اقتراحات لمات قادمة

هذا يبني **مجلة رقمية** — محتوى SEO قوي + سبب للعودة.

### 8.7 🧠 مطابقة الحضور بالـ AI (Attendee Matching)

**كيف يعمل:**
1. كل مستخدم يملأ **اهتماماته** عند التسجيل
2. نحسب **embeddings** لكل مستخدم باستخدام OpenAI
3. نخزّنها في pgvector
4. عند التقديم على لمة، نحسب الـ cosine similarity مع الحاضرين المعتمدين الآخرين
5. نعرض **match score** لصاحب التجمع: "هذا الشخص يتطابق 87% مع الحاضرين الآخرين"

```typescript
// مثال على الحساب
const userEmbedding = await openai.embeddings.create({
  model: 'text-embedding-3-small',
  input: user.interests.join(' '),
});

await prisma.$executeRaw`
  UPDATE "User" 
  SET embedding = ${userEmbedding.data[0].embedding}::vector 
  WHERE id = ${user.id}
`;

// عند التقديم
const matchScore = await prisma.$queryRaw`
  SELECT 1 - (embedding <=> ${userEmbedding}::vector) as similarity
  FROM "User" 
  WHERE id IN (${approvedAttendeeIds})
  LIMIT 1
`;
```

### 8.8 🎯 فلترة حسب الجنس/الصيغة (Format Filters)

كل لمة لها **صيغة**:
- `MEN_ONLY` — رجال فقط
- `WOMEN_ONLY` — نساء فقط
- `FAMILY` — عائلات (مع أطفال)
- `MIXED` — مختلط (مع التزام المعايير)

الفلترة واضحة في الـ UI، مع شرح لكل صيغة.

### 8.9 📋 قائمة انتظار مرتّبة بالاستحقاق (Merit-ranked Waitlist)

عند امتلاء اللمة:
- المستخدم يُضاف لقائمة الانتظار
- **وليس FIFO** — بل بناءً على:
  - حضور سابق للمة لصاحب التجمع
  - مستوى العضوية (Curator > Regular > Newcomer)
  - مدى ملاءمة الاهتمامات
- عند الانسحاب، يُتاح المكان لأعلى شخص في القائمة

### 8.10 🎛️ لوحة تحكم صاحب التجمع (Host Concierge Dashboard)

أدوات احترافية تشمل:
- إنشاء لمة بنموذج **متعدد الخطوات** (مع حفظ تلقائي)
- **Calendar view** لكل اللمات القادمة
- **Inbox** للرسائل من الحاضرين المحتملين
- **Analytics**: معدل القبول، تقييمات، تكرار الحضور
- **Templates** لللمات المتكررة
- **Concierge AI**: اقتراحات لتحسين وصف اللمة

---

## 9. نماذج البيانات (Prisma Schema)

### الـ Schema الكامل

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
  previewFeatures = ["postgresqlExtensions"]
}

datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  directUrl  = env("DIRECT_URL")
  extensions = [vector, pg_trgm]
}

// ============================================
// Enums
// ============================================

enum Locale {
  ar
  en
}

enum GatheringFormat {
  MEN_ONLY
  WOMEN_ONLY
  FAMILY
  MIXED
}

enum GatheringStatus {
  DRAFT
  PUBLISHED
  APPLICATIONS_OPEN
  APPLICATIONS_CLOSED
  COMPLETED
  CANCELLED
}

enum ApplicationStatus {
  PENDING
  APPROVED
  REJECTED
  WAITLISTED
  ATTENDED
  NO_SHOW
}

enum MembershipTier {
  NEWCOMER    // 0-2 لمات
  REGULAR     // 3-9 لمات
  CURATOR     // 10+ لمات
  HOST        // أصحاب تجمعات
}

enum LetterStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

// ============================================
// المستخدمون
// ============================================

model User {
  id              String        @id @default(cuid())
  email           String        @unique
  phone           String?       @unique
  passwordHash    String
  
  // معلومات أساسية
  name            Json          // { ar: "...", en: "..." }
  bio             Json?
  avatarUrl       String?
  dateOfBirth     DateTime?
  gender          String?       // "male" | "female"
  nationality     String?
  
  // الاهتمامات (للـ AI matching)
  interests       String[]      // ["music", "art", "books", ...]
  embedding       Unsupported("vector(1536)")?  // OpenAI embeddings
  
  // العضوية
  membershipTier  MembershipTier @default(NEWCOMER)
  hostedCount     Int           @default(0)
  attendedCount   Int           @default(0)
  
  // الحساب
  emailVerifiedAt DateTime?
  lastLoginAt     DateTime?
  locale          Locale        @default(ar)
  
  // العلاقات
  hostedGatherings  Gathering[]     @relation("HostGatherings")
  applications      Application[]
  memberships       Membership[]
  letters           Letter[]        @relation("LetterAuthor")
  moments           Moment[]
  reviews           Review[]        @relation("Reviewer")
  reviewsReceived   Review[]        @relation("Reviewee")
  
  createdAt        DateTime       @default(now())
  updatedAt        DateTime       @updatedAt
  
  @@index([membershipTier])
  @@index([gender])
}

// ============================================
// أصحاب التجمعات (Hosts)
// ============================================

model Host {
  id              String        @id @default(cuid())
  userId          String        @unique
  user            User          @relation(fields: [userId], references: [id])
  
  handle          String        @unique  // @noura_art
  displayName     Json          // { ar, en }
  bio             Json          // long-form bio
  avatarUrl       String?
  coverUrl        String?
  
  // التحقق
  isVerified      Boolean       @default(false)
  verifiedAt      DateTime?
  
  // التخصصات
  topicIds        String[]
  specialties     String[]      // ["photography", "pottery", ...]
  
  // الإحصاءات
  totalGatherings Int           @default(0)
  totalAttendees  Int           @default(0)
  avgRating       Float?        // 0-5
  responseTime    Int?          // متوسط ساعات الرد
  
  // وسائل التواصل
  instagram       String?
  twitter         String?
  website         String?
  
  gatherings      Gathering[]
  
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  @@index([isVerified])
}

// ============================================
// المواضيع التحريرية (Topics)
// ============================================

model Topic {
  id              String        @id @default(cuid())
  slug            String        @unique  // memory-of-place
  name            Json          // { ar: "ذاكرة المكان", en: "Memory of Place" }
  description     Json
  coverImageUrl   String?
  color           String?       // hex color for UI
  
  gatherings      Gathering[]
  letters         Letter[]
  
  createdAt       DateTime      @default(now())
  
  @@index([slug])
}

// ============================================
// التجمعات (Gatherings)
// ============================================

model Gathering {
  id              String          @id @default(cuid())
  slug            String          @unique
  hostId          String
  host            Host            @relation(fields: [hostId], references: [id])
  topicId         String
  topic           Topic           @relation(fields: [topicId], references: [id])
  
  // المحتوى
  title           Json            // { ar, en }
  description     Json            // long-form editorial
  coverImageUrl   String
  galleryUrls     String[]
  
  // التوقيت
  startDate       DateTime
  endDate         DateTime
  isPrayerAware   Boolean         @default(true)
  
  // المكان
  venueName       Json
  venueAddress    Json
  venueLat        Float?
  venueLng        Float?
  venueNotes      Json?           // parking, access, etc.
  isLocationRevealed Boolean      @default(false)  // للمكان السري
  
  // الصيغة
  format          GatheringFormat
  capacityMin     Int             @default(10)
  capacityMax     Int
  
  // التذكرة
  priceKwd        Decimal         @db.Decimal(10, 3)  // KWD
  isFree          Boolean         @default(false)
  
  // الأسئلة المخصصة للطلب
  applicationQuestions Json?      // [{ id, question, type, required }]
  
  // الحالة
  status          GatheringStatus @default(DRAFT)
  publishedAt     DateTime?
  applicationsOpenAt  DateTime?
  applicationsCloseAt DateTime?
  
  // العلاقات
  applications    Application[]
  moments         Moment[]
  letter          Letter?
  reviews         Review[]
  
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
  
  @@index([status, startDate])
  @@index([topicId])
  @@index([hostId])
  @@index([format])
}

// ============================================
// طلبات الحضور (Applications)
// ============================================

model Application {
  id              String            @id @default(cuid())
  gatheringId     String
  gathering       Gathering         @relation(fields: [gatheringId], references: [id])
  userId          String
  user            User              @relation(fields: [userId], references: [id])
  
  // الردود
  motivation      String            @db.Text
  background      String?           @db.Text
  customAnswers   Json?             // إجابات على الأسئلة المخصصة
  
  // معلومات إضافية
  dietaryRestrictions  String?
  accessibilityNeeds   String?
  
  // AI Matching
  matchScore      Float?            // 0-100
  
  // الحالة
  status          ApplicationStatus @default(PENDING)
  reviewedAt      DateTime?
  reviewedBy      String?           // host userId
  
  // الدفع
  paymentId       String?
  paymentStatus   String?           // pending, paid, refunded
  paidAt          DateTime?
  
  // الحضور
  checkedInAt     DateTime?
  
  createdAt       DateTime          @default(now())
  
  @@unique([gatheringId, userId])
  @@index([gatheringId, status])
  @@index([userId, status])
}

// ============================================
// العضويات في المجتمع (Memberships)
// ============================================

model Membership {
  id              String          @id @default(cuid())
  userId          String
  user            User            @relation(fields: [userId], references: [id])
  
  // نوع العضوية
  type            String          // "regular", "curator", "ambassador"
  level           Int             @default(1)
  
  // النقاط
  points          Int             @default(0)
  gatheringsAttended Int          @default(0)
  gatheringsHosted   Int          @default(0)
  
  // الإنجازات
  badges          String[]        // ["early_member", "first_host", ...]
  
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
  
  @@index([userId])
}

// ============================================
// الرسائل التحريرية (Letters)
// ============================================

model Letter {
  id              String          @id @default(cuid())
  slug            String          @unique
  gatheringId     String?         @unique  // optional - some letters are standalone
  gathering       Gathering?      @relation(fields: [gatheringId], references: [id])
  
  authorId        String
  author          User            @relation("LetterAuthor", fields: [authorId], references: [id])
  
  topicId         String
  topic           Topic           @relation(fields: [topicId], references: [id])
  
  // المحتوى
  title           Json
  subtitle        Json?
  content         Json            // rich text / markdown
  coverImageUrl   String
  galleryUrls     String[]?
  
  // التحرير
  excerpt         Json            // for cards
  readTimeMinutes Int             @default(5)
  
  // النشر
  status          LetterStatus    @default(DRAFT)
  publishedAt     DateTime?
  
  // SEO
  metaTitle       Json?
  metaDescription Json?
  
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt
  
  @@index([status, publishedAt])
  @@index([topicId])
}

// ============================================
// اللحظات اللحظية (Moments)
// ============================================

model Moment {
  id              String          @id @default(cuid())
  gatheringId     String
  gathering       Gathering       @relation(fields: [gatheringId], references: [id])
  userId          String
  user            User            @relation(fields: [userId], references: [id])
  
  type            String          // "photo", "quote", "highlight"
  content         Json            // { imageUrl?, text?, ... }
  
  // المشاعر
  hearts          Int             @default(0)
  
  createdAt       DateTime        @default(now())
  
  @@index([gatheringId, createdAt])
}

// ============================================
// مواقيت الصلاة (Prayer Times)
// ============================================

model PrayerTime {
  id              String          @id @default(cuid())
  date            DateTime        @db.Date
  city            String          @default("Kuwait")
  
  fajr            DateTime
  sunrise         DateTime
  dhuhr           DateTime
  asr             DateTime
  maghrib         DateTime
  isha            DateTime
  
  createdAt       DateTime        @default(now())
  
  @@unique([date, city])
  @@index([date])
}

// ============================================
// مطابقات الحضور (Attendee Matches)
// ============================================

model AttendeeMatch {
  id              String          @id @default(cuid())
  userId          String
  otherUserId     String
  gatheringId     String?
  
  similarity      Float           // 0-1
  sharedInterests String[]
  
  createdAt       DateTime        @default(now())
  
  @@index([userId, similarity])
}

// ============================================
// قائمة الانتظار (Waitlist)
// ============================================

model WaitlistEntry {
  id              String          @id @default(cuid())
  gatheringId     String
  userId          String
  
  // ترتيب الاستحقاق
  meritScore      Float           // محسوب بناءً على الحضور السابق + الاهتمامات
  priority        Int             // للترتيب اليدوي
  
  createdAt       DateTime        @default(now())
  
  @@unique([gatheringId, userId])
  @@index([gatheringId, meritScore])
}

// ============================================
// التقييمات (Reviews)
// ============================================

model Review {
  id              String          @id @default(cuid())
  gatheringId     String
  gathering       Gathering       @relation(fields: [gatheringId], references: [id])
  
  reviewerId      String
  reviewer        User            @relation("Reviewer", fields: [reviewerId], references: [id])
  
  revieweeId      String          // host or other attendee
  reviewee        User            @relation("Reviewee", fields: [revieweeId], references: [id])
  
  rating          Int             // 1-5
  comment         String?         @db.Text
  
  createdAt       DateTime        @default(now())
  
  @@unique([gatheringId, reviewerId, revieweeId])
}

// ============================================
// الإشعارات (Notifications)
// ============================================

model Notification {
  id              String          @id @default(cuid())
  userId          String
  
  type            String          // "application_approved", "gathering_reminder", ...
  title           Json
  body            Json
  data            Json?
  
  isRead          Boolean         @default(false)
  readAt          DateTime?
  
  createdAt       DateTime        @default(now())
  
  @@index([userId, isRead])
}

// ============================================
// الرسائل (Messages) — بين الحاضرين
// ============================================

model Message {
  id              String          @id @default(cuid())
  gatheringId     String
  senderId        String
  content         String          @db.Text
  
  isSystem        Boolean         @default(false)
  
  createdAt       DateTime        @default(now())
  
  @@index([gatheringId, createdAt])
}
```

---

## 10. التقنيات المستخدمة

### المكدس التقني المفصّل

#### Frontend

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| Next.js | 16+ | App Router, RSC, Server Actions |
| React | 19 | UI library |
| TypeScript | 5.x | strict mode |
| Tailwind CSS | 4 | styling |
| Radix UI | latest | accessible components |
| Lucide React | latest | icons |
| Framer Motion | 11+ | animations |
| date-fns | 3+ | date manipulation |
| @tanstack/react-query | 5+ | data fetching |
| Zustand | 4+ | client state |
| next-intl | latest | i18n |
| React Hook Form | 7+ | forms |
| Zod | 3+ | validation |

#### Backend

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| Prisma | 6.19+ | ORM |
| PostgreSQL | 15+ | database |
| pgvector | 0.5+ | AI embeddings |
| Supabase Realtime | latest | real-time features |
| Bull / BullMQ | latest | background jobs |
| jose | latest | JWT |
| bcryptjs | latest | password hashing |

#### External Services

| الخدمة | الاستخدام |
|--------|-----------|
| Supabase | PostgreSQL + Realtime + Auth (optional) |
| Railway | hosting |
| OpenAI | embeddings + concierge AI |
| Tap Payments | KNET + cards |
| AlAdhan API | prayer times |
| Mapbox | maps |
| Resend | email |
| Cloudinary | image CDN |
| Sentry | error tracking |

### البنية المعمارية

```
┌──────────────────────────────────────────────────────────┐
│                   Railway Container                       │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Next.js 16 Production Server (Bun)                │ │
│  │  ├── App Router (SSR + RSC + Server Actions)       │ │
│  │  ├── API Routes (/api/v1/*)                        │ │
│  │  ├── Middleware (auth, locale)                     │ │
│  │  └── Prisma Client (queries)                       │ │
│  └────────────────────────────────────────────────────┘ │
│                           │                              │
│                           ▼                              │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Startup Script:                                   │ │
│  │  1. prisma migrate deploy                          │ │
│  │  2. fetch prayer times (if not cached)             │ │
│  │  3. next start (port 3000)                         │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌───────────────┐  ┌────────────────┐  ┌─────────────┐
│  Supabase     │  │  OpenAI API    │  │  Tap Pay    │
│  PostgreSQL   │  │  (embeddings)  │  │  (KNET)     │
│  + pgvector   │  │                │  │             │
│  + Realtime   │  └────────────────┘  └─────────────┘
└───────────────┘
        │
        ▼
┌───────────────┐
│  Realtime     │
│  subscriptions│
│  (gathering   │
│   live)       │
└───────────────┘
```

---

## 11. تكاملات خارجية

### 11.1 AlAdhan API (مواقيت الصلاة)

```typescript
// src/lib/prayer-times.ts
const ALADHAN_BASE = 'https://api.aladhan.com/v1';

export async function getPrayerTimes(date: Date, city = 'Kuwait') {
  const formattedDate = format(date, 'dd-MM-yyyy');
  
  // تحقق من الكاش أولاً
  const cached = await prisma.prayerTime.findFirst({
    where: { date: startOfDay(date), city },
  });
  
  if (cached) return cached;
  
  // اجلب من API
  const res = await fetch(
    `${ALADHAN_BASE}/timingsByCity/${formattedDate}?city=${city}&country=Kuwait&method=4`
  );
  const data = await res.json();
  
  // خزّن في الكاش
  return await prisma.prayerTime.create({
    data: {
      date: startOfDay(date),
      city,
      fajr: new Date(data.data.timings.Fajr),
      sunrise: new Date(data.data.timings.Sunrise),
      dhuhr: new Date(data.data.timings.Dhuhr),
      asr: new Date(data.data.timings.Asr),
      maghrib: new Date(data.data.timings.Maghrib),
      isha: new Date(data.data.timings.Isha),
    },
  });
}

export function checkPrayerConflict(
  start: Date,
  end: Date,
  prayerTimes: PrayerTime
): { conflict: boolean; prayer?: string } {
  const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
  
  for (const prayer of prayers) {
    const prayerTime = prayerTimes[prayer as keyof PrayerTime] as Date;
    const prayerEnd = addMinutes(prayerTime, 30); // 30 min for prayer
    
    if (start <= prayerEnd && end >= prayerTime) {
      return { conflict: true, prayer };
    }
  }
  
  return { conflict: false };
}
```

### 11.2 OpenAI Embeddings (AI Matching)

```typescript
// src/lib/embeddings.ts
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateUserEmbedding(user: User): Promise<number[]> {
  const text = [
    user.name.ar,
    user.name.en,
    user.bio?.ar,
    user.bio?.en,
    ...user.interests,
  ].filter(Boolean).join(' ');
  
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  
  return response.data[0].embedding;
}

export async function calculateMatchScore(
  userId: string,
  gatheringId: string
): Promise<number> {
  // احصل على embeddings للمستخدم
  const userResult = await prisma.$queryRaw`
    SELECT embedding FROM "User" WHERE id = ${userId}
  ` as { embedding: number[] }[];
  
  // احصل على embeddings للحاضرين المعتمدين الآخرين
  const attendeesResult = await prisma.$queryRaw`
    SELECT u.embedding 
    FROM "User" u
    JOIN "Application" a ON a.userId = u.id
    WHERE a.gatheringId = ${gatheringId}
      AND a.status = 'APPROVED'
      AND u.id != ${userId}
      AND u.embedding IS NOT NULL
  ` as { embedding: number[] }[];
  
  if (attendeesResult.length === 0) return 50; // default
  
  // احسب متوسط الـ cosine similarity
  const similarities = attendeesResult.map(attendee => {
    return cosineSimilarity(userResult[0].embedding, attendee.embedding);
  });
  
  const avgSimilarity = similarities.reduce((a, b) => a + b, 0) / similarities.length;
  return Math.round(avgSimilarity * 100);
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}
```

### 11.3 Tap Payments (KNET)

```typescript
// src/lib/tap-payments.ts
const TAP_API = 'https://api.tap.company/v2';
const TAP_SECRET = process.env.TAP_SECRET_KEY;

export async function createCharge(
  amount: number,
  applicationId: string,
  user: { name: string; email: string; phone: string }
) {
  const response = await fetch(`${TAP_API}/charges`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TAP_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: amount.toFixed(3),
      currency: 'KWD',
      threeDSecure: true,
      save_card: false,
      description: `Lamma gathering - Application ${applicationId}`,
      statement_descriptor: 'Lamma',
      metadata: { applicationId },
      reference: { transaction: applicationId, order: applicationId },
      receipt: { email: true, sms: true },
      customer: {
        first_name: user.name,
        email: user.email,
        phone: { country_code: '965', number: user.phone },
      },
      source: { id: 'src_all' },
      redirect: { url: `${process.env.NEXTAUTH_URL}/payment/callback` },
      post: { url: `${process.env.NEXTAUTH_URL}/api/v1/webhooks/tap` },
    }),
  });
  
  return response.json();
}

export async function verifyCharge(chargeId: string) {
  const response = await fetch(`${TAP_API}/charges/${chargeId}`, {
    headers: { 'Authorization': `Bearer ${TAP_SECRET}` },
  });
  
  const data = await response.json();
  return data.status === 'CAPTURED';
}
```

### 11.4 Mapbox (Maps)

```typescript
// src/components/MapboxMap.tsx
'use client';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export function MapboxMap({ lat, lng, name }: { lat: number; lng: number; name: string }) {
  const mapRef = useRef<mapboxgl.Map>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    mapRef.current = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom: 14,
    });
    
    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3>`))
      .addTo(mapRef.current);
      
    return () => mapRef.current?.remove();
  }, [lat, lng, name]);
  
  return <div ref={containerRef} className="h-96 w-full rounded-lg" />;
}
```

### 11.5 Supabase Realtime (Live Companion)

```typescript
// src/lib/realtime.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function subscribeToGathering(
  gatheringId: string,
  callbacks: {
    onMessage?: (msg: Message) => void;
    onMoment?: (moment: Moment) => void;
    onAttendeeJoin?: (userId: string) => void;
  }
) {
  const channel = supabase.channel(`gathering:${gatheringId}`);
  
  if (callbacks.onMessage) {
    channel.on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'Message', filter: `gatheringId=eq.${gatheringId}` },
      (payload) => callbacks.onMessage!(payload.new as Message)
    );
  }
  
  if (callbacks.onMoment) {
    channel.on('postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'Moment', filter: `gatheringId=eq.${gatheringId}` },
      (payload) => callbacks.onMoment!(payload.new as Moment)
    );
  }
  
  channel.subscribe();
  return channel;
}
```

---

## 12. خطة التنفيذ (8 أسابيع)

### المرحلة 1: التأسيس (الأسبوع 1)

**الأهداف:**
- إعداد المشروع و Prisma schema
- تطبيق الهوية البصرية
- بنية المجلدات والصفحات الأساسية

**المهام:**
- [ ] `bunx create-next-app lamma` مع TypeScript + Tailwind
- [ ] تثبيت Prisma + bun add @prisma/client
- [ ] إنشاء schema.prisma الكامل (13 جدول)
- [ ] تطبيق migration الأولى
- [ ] إعداد Tailwind config مع لوحة الألوان
- [ ] تثبيت الخطوط (Fraunces, IBM Plex Sans Arabic, Inter)
- [ ] إنشاء Layout الرئيسي مع Header/Footer
- [ ] إعداد i18n (next-intl) مع ar/en
- [ ] إنشاء Dockerfile + railway.json
- [ ] Deploy أولي للتحقق من البنية

### المرحلة 2: الـ Discovery الأساسي (الأسبوع 2-3)

**الأهداف:**
- صفحة اللمات + التفاصيل
- صفحة أصحاب التجمعات
- صفحة المواضيع
- البحث والفلترة

**المهام:**
- [ ] `/` الصفحة الرئيسية (hero + gatherings + topics + letters preview)
- [ ] `/gatherings` قائمة مع فلترة (topic, date, format, price)
- [ ] `/gatherings/[slug]` صفحة تفصيلية كاملة
- [ ] `/hosts` قائمة أصحاب التجمعات
- [ ] `/hosts/[handle]` صفحة بورتفوليو
- [ ] `/topics` قائمة المواضيع
- [ ] `/topics/[slug]` صفحة موضوع
- [ ] البحث النصي الكامل (PostgreSQL)
- [ ] خريطة Mapbox على /gatherings
- [ ] مكوّن GatheringCard + HostCard + TopicPill

### المرحلة 3: المصادقة + التطبيقات (الأسبوع 4-5)

**الأهداف:**
- تسجيل/دخول المستخدمين
- التقديم على اللمات
- لوحة صاحب التجمع

**المهام:**
- [ ] نظام Auth (JWT + cookies)
- [ ] `/login`, `/register`, `/forgot-password`
- [ ] middleware للحماية
- [ ] `/gatherings/apply/[slug]` نموذج الطلب
- [ ] تطبيق Application model + status flow
- [ ] إشعارات Email (Resend) للحالات
- [ ] `/host/dashboard` لوحة صاحب التجمع
- [ ] `/host/gatherings/new` إنشاء لمة جديدة
- [ ] `/host/gatherings/[id]/applications` مراجعة الطلبات
- [ ] `/community/dashboard` لوحة المستخدم العادي

### المرحلة 4: الميزات المميزة (الأسبوع 6)

**الأهداف:**
- مواقيت الصلاة
- AI Matching
- قائمة الانتظار
- مجلة Letters

**المهام:**
- [ ] تكامل AlAdhan API
- [ ] PrayerTimeBadge على كل لمة
- [ ] تحذيرات تعارض الصلاة عند إنشاء لمة
- [ ] تكامل OpenAI embeddings
- [ ] حساب match scores تلقائياً
- [ ] عرض match score لصاحب التجمع
- [ ] نظام قائمة الانتظار مع merit score
- [ ] `/letters` صفحة المجلة
- [ ] `/letters/[slug]` صفحة رسالة كاملة
- [ ] محرر Markdown لرسائل (صاحب التجمع)

### المرحلة 5: Realtime + Live Companion (الأسبوع 7)

**الأهداف:**
- رفيق التجمع اللحظي
- Moments
- إشعارات حية

**المهام:**
- [ ] تكامل Supabase Realtime
- [ ] `/gatherings/[slug]/live` صفحة الرفيق
- [ ] Chat مباشر للحاضرين
- [ ] رفع الصور اللحظية (Cloudinary)
- [ ] Moments (إشارات قصيرة)
- [ ] عدّاد الحاضرين حي
- [ ] إشعارات push (PWA)
- [ ] PWA manifest + service worker

### المرحلة 6: الدفع + Polish (الأسبوع 8)

**الأهداف:**
- نظام الدفع KNET
- البيانات التجريبية الكاملة
- الاختبار النهائي
- Deploy

**المهام:**
- [ ] تكامل Tap Payments
- [ ] `/payment/callback` صفحة الاستجابة
- [ ] webhooks للدفع
- [ ] partial refunds عند الإلغاء
- [ ] إنشاء بيانات seed كاملة (10-15 لمة، 5-8 hosts، 4-6 topics، 3-4 letters)
- [ ] تحسين SEO (meta tags, structured data)
- [ ] اختبار الأداء (Lighthouse > 90)
- [ ] اختبار RTL/LTR
- [ ] اختبار الموبايل
- [ ] Deploy على Railway
- [ ] فحص الـ debug endpoint
- [ ] إعداد Sentry للأخطاء

---

## 13. البيانات التجريبية (Seed Data)

### لمات تجريبية مقترحة

```typescript
const seedGatherings = [
  {
    title: { ar: "ذاكرة المكان: جولة في المباركية", en: "Memory of Place: Souq Al-Mubarakiya Walk" },
    topic: "memory-of-place",
    host: "@abdullah_kuwaiti_historian",
    format: "MIXED",
    capacityMax: 25,
    priceKwd: 5.000,
    startDate: "2026-07-15T17:00:00Z",
    description: { 
      ar: "جولة حميمية في قلب المباركية، نستمع لحكايات الباعة القدماء...",
      en: "An intimate walk through Souq Al-Mubarakiya, listening to stories from old merchants..."
    }
  },
  {
    title: { ar: "حكايات الطعام: مائدة فول سوداني", en: "Food Stories: A Sudanese Table" },
    topic: "food-stories",
    host: "@amal_sudani_chef",
    format: "WOMEN_ONLY",
    capacityMax: 15,
    priceKwd: 15.000,
    startDate: "2026-07-20T19:00:00Z",
    description: { ... }
  },
  {
    title: { ar: "الضوء والظل: ورشة تصوير في الشويخ", en: "Light & Shadow: Photography Workshop" },
    topic: "light-and-shadow",
    host: "@noura_photographer",
    format: "MIXED",
    capacityMax: 12,
    priceKwd: 25.000,
    startDate: "2026-07-25T16:00:00Z",
  },
  {
    title: { ar: "أصوات جديدة: أمسية شعراء كويتيين", en: "New Voices: Kuwaiti Poets Evening" },
    topic: "new-voices",
    host: "@mohammed_poet",
    format: "MEN_ONLY",
    capacityMax: 40,
    priceKwd: 0,  // مجاني
    startDate: "2026-08-01T20:00:00Z",
  },
  {
    title: { ar: "روح الكتاب: نادي كتاب 'مدن الملح'", en: "Soul of Books: 'Cities of Salt' Book Club" },
    topic: "soul-of-books",
    host: "@fatima_literary",
    format: "MIXED",
    capacityMax: 18,
    priceKwd: 8.000,
    startDate: "2026-08-05T18:00:00Z",
  },
  // ... 5-10 لمات إضافية
];
```

### أصحاب تجمعات تجريبيون

```typescript
const seedHosts = [
  {
    handle: "@abdullah_kuwaiti_historian",
    displayName: { ar: "عبدالله الفهد", en: "Abdullah Al-Fahad" },
    bio: { ar: "مؤرخ كويتي شغوف بحكايات الكويت القديمة", en: "Kuwaiti historian passionate about old Kuwait stories" },
    isVerified: true,
    specialties: ["history", "culture", "walking-tours"]
  },
  {
    handle: "@noura_photographer",
    displayName: { ar: "نورة العنزي", en: "Noura Al-Anzi" },
    bio: { ar: "مصوّرة فنية، عرضت أعمالها في معرض الكويت للفنون", en: "Fine art photographer, exhibited at Kuwait Art Fair" },
    isVerified: true,
    specialties: ["photography", "art", "workshops"]
  },
  // ... 3-6 hosts إضافيين
];
```

### مواضيع تحريرية

```typescript
const seedTopics = [
  { slug: "memory-of-place", name: { ar: "ذاكرة المكان", en: "Memory of Place" }, color: "#B85C3E" },
  { slug: "food-stories", name: { ar: "حكايات الطعام", en: "Food Stories" }, color: "#E8A93C" },
  { slug: "light-and-shadow", name: { ar: "الضوء والظل", en: "Light & Shadow" }, color: "#2A5F5A" },
  { slug: "new-voices", name: { ar: "أصوات جديدة", en: "New Voices" }, color: "#4A7C59" },
  { slug: "soul-of-books", name: { ar: "روح الكتاب", en: "Soul of Books" }, color: "#8B5A3C" },
  { slug: "after-work", name: { ar: "ما بعد العمل", en: "After Work" }, color: "#1A1614" },
];
```

### رسائل تحريرية (3-4 مقالات كاملة)

اكتب 3-4 مقالات تحريرية طويلة (2000-3000 كلمة) تحكي قصص لمات سابقة خيالية، لخلق إحساس بوجود أرشيف.

---

## 14. نشر المشروع (Railway + Supabase)

### 14.1 إعداد Supabase

1. أنشئ مشروع Supabase جديد باسم `lamma`
2. كلمة المرور بدون `$` (مثل `Lamma2026Secure`)
3. المنطقة: EU West 1
4. فعّل pgvector extension:
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   CREATE EXTENSION IF NOT EXISTS pg_trgm;
   ```
5. انسخ Connection URLs:
   - `DATABASE_URL` = Transaction pooler (port 6543) + `?pgbouncer=true`
   - `DIRECT_URL` = Direct connection (port 5432)

### 14.2 إعداد Railway

1. أنشئ مشروع Railway جديد: `lamma`
2. اربط بـ GitHub repo
3. أضف المتغيرات:

```
DATABASE_URL=postgresql://postgres.lamma:[PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.lamma:[PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:5432/postgres
NEXTAUTH_SECRET=...(openssl rand -base64 32)
NEXTAUTH_URL=https://lamma-production.up.railway.app
NODE_ENV=production

# OpenAI
OPENAI_API_KEY=sk-...

# Tap Payments
TAP_SECRET_KEY=sk_live_...
TAP_PUBLIC_KEY=pk_live_...

# Mapbox
NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1IjoibGFtbWEiLC...

# Supabase (Realtime)
NEXT_PUBLIC_SUPABASE_URL=https://lamma.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...

# Cloudinary (images)
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Resend (email)
RESEND_API_KEY=re_...
EMAIL_FROM=hello@lamma.kw
```

### 14.3 ملف Dockerfile

استخدم نفس Dockerfile من مشروعك الأول (مع تعديل اسم المشروع). ملاحظات مهمة:

- استخدم `bun ./node_modules/prisma/build/index.js` (وليس `bunx`)
- استخدم `;` بين migrate و server
- أضف تشخيصات قبل الـ CMD
- `output: 'standalone'` في next.config.ts

### 14.4 ملف railway.json

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "startCommand": "node server.js",
    "healthcheckPath": "/api/v1/health",
    "healthcheckTimeout": 180,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 3
  }
}
```

### 14.5 تطبيق Migrations + Seed

```bash
# 1. تطبيق migrations
DATABASE_URL="..." DIRECT_URL="..." \
bun ./node_modules/prisma/build/index.js migrate deploy

# 2. تفعيل pgvector + pg_trgm في Supabase SQL Editor
# (تشغيل CREATE EXTENSION إن لم تكن فعّالة)

# 3. تشغيل الـ seed
DATABASE_URL="..." bun prisma/seed-standalone.ts
```

### 14.6 Endpoint الصحة

```typescript
// src/app/api/v1/health/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      db: 'connected'
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'DB connection failed' },
      { status: 503 }
    );
  }
}
```

---

## 15. خطة التسويق للوكالة

### 15.1 خط الدعاية الرئيسي

> **"نحن لا نبني تطبيقات CRUD. نحن نبني منتجات ثقافية. لَمَّة هي الدليل."**

### 15.2 العرض التقديمي للزبائن

عند عرض لَمَّة لزبون محتمل:

1. **افتح الموقع على الموبايل** (يُظهر الـ PWA + responsiveness)
2. **اعرض صفحة لمة تفصيلية** (يُظهر المحتوى التحريري + مواقيت الصلاة)
3. **اعرض لوحة صاحب التجمع** (يُظهر الـ UX الاحترافي + AI matching)
4. **اعرض مجلة Letters** (يُظهر قدرات التحرير + SEO)
5. **اعرض الـ Live Companion** (يُظهر Realtime capabilities)
6. **بدّل بين AR/EN** (يُظهر الـ i18n الأصيل)
7. **اعرض الكود** (Prisma schema + clean architecture)

### 15.3 رسائل لكل نوع زبون

| نوع الزبون | الرسالة |
|-----------|---------|
| **فندق/منتجع** | "نبني لك منصة تجارب ضيوف، ليس مجرد موقع حجز" |
| **مؤسسة ثقافية** | "نحوّل فعالياتك إلى مجتمع متكرر، ليس جمهوراً عابراً" |
| **شركة B2B** | "منصة networking مع AI matchmaking لأحداثك" |
| **متاجر retail** | "تجارب حميمية لبناء ولاء العملاء، ليس تخفيضات" |
| **مدرسة/جامعة** | "منصة ورش عمل ومحتوى تعليمي بمجتمع حي" |
| **علامة تجارية** | "نصنع منصة experiences تحاكي قيمتك، ليس قالباً جاهزاً" |

### 15.4 أدلة النجاح للوكالة

بعد إطلاق لَمَّة، استخدمها كـ:

1. **Case Study** على موقع الوكالة
2. **Portfolio Item** على Behance / Dribbble
3. **LinkedIn Article** عن "كيف نبني منتجات ثقافية"
4. **Talk** في لقاءات التقنية الكويتية
5. **Demo** في اجتماعات البيع

### 15.5 مؤشرات النجاح (KPIs)

| المؤشر | الهدف |
|--------|------|
| عدد الزوار الشهري | 5000+ |
- معدل الارتداد | < 40% |
- متوسط وقت الجلسة | 3+ دقائق |
- تحويلات طلبات الحضور | 8%+ |
- تقييم Lighthouse | 90+ |
- تغطية Place (ASO/SEO) | موجود في Google |

---

## 16. المخاطر والحلول

### 16.1 المخاطر التقنية

| الخطر | الاحتمال | الأثر | الحل |
|------|---------|------|------|
| فشل Realtime في الإنتاج | متوسط | عالي | اختبار شامل + fallback polling |
| تجاوز حدود OpenAI API | منخفض | متوسط | caching + rate limiting |
| بطء pgvector queries | متوسط | متوسط | indexing + تجاوز للـ approximate search |
| تجاوز حدود Supabase المجانية | عالي | منخفض | ترقية لـ Pro ($25/شهر) |
| تكلفة Mapbox | منخفض | منخفض | استخدام 50K loads مجانية |

### 16.2 المخاطر المنتجية

| الخطر | الاحتمال | الأثر | الحل |
|------|---------|------|------|
| عدم كفاية اللمات في البداية | عالي | عالي | إنشاء 10-15 لمة تجريبية بنفسي |
| صعوبة جذب أصحاب تجمعات | متوسط | عالي | دعوة شخصية لـ 5-8 hosts معروفين |
| مستخدمون يتقدمون ولا يأتون | متوسط | متوسط | deposit رمزي + reminders |
| ضعف جودة المحتوى التحريري | متوسط | عالي | كتابة 3-4 رسائل بنفسي بجودة عالية |
| منافسة من Eventat | منخفض | متوسط | التركيز على الحميمية (لا يستطيعون تقليدها) |

### 16.3 المخاطر الثقافية

| الخطر | الاحتمال | الأثر | الحل |
|------|---------|------|------|
| انتقاد لـ "حصرية" اللمة | متوسط | متوسط | توضيح أن الطلب للجودة وليس التمييز |
| حساسية تجاه الفصل بين الجنس | منخفض | عالي | احترام الاختيار + شفافية |
| صعوبة الإقناع بصيغة "الطلب" | متوسط | متوسط | شرح القيمة في FAQ + onboarding |

---

## 17. مقارنة لَمَّة مع موقعك الأول

| المعيار | الموقع الأول (Kuwait Event Railway) | لَمَّة |
|---------|----------------------------------|------|
| **الفئة** | منصة فعاليات عامة | منصة تجمعات حميمية |
| **الفلسفة** | تصفّح → اشترِ → احضر | اكتشف → تقدّم → تجمّع → شارك |
| **حجم الفعالية** | 100-5000 شخص | 15-80 شخص |
| **نوع الحجز** | شراء تذكرة مباشر | طلب + موافقة |
| **التصنيف** | فئات (موسيقى، رياضة...) | مواضيع تحريرية |
| **التركيز** | الفعالية | صاحب التجمع + المجتمع |
| **المحتوى** | وصف قصير | محتوى تحريري + مجلة Letters |
| **الزمن** | لحظة الفعالية | قبل + أثناء + بعد (محتوى) |
| **التفاعل** | حد أدنى (حجز فقط) | Realtime + AI matching |
| **الأسلوب البصري** | عام، تجاري | تحريري، مجلة فاخرة |
| **الألوان** | حيوية، تجارية | صحراوية دافئة |
| **التقنية المميزة** | Prisma + Railway | + Realtime + pgvector + Tap |
| **الجمهور** | عام الناس | المهتمون بالتجارب الأصيلة |
| **الوعي الثقافي** | أساسي (عربي/إنجليزي) | عميق (مواقيت الصلاة، الديوانية) |
| **نموذج الدخل** | عمولة على التذاكر | عمونة + subscription للأصحاب (مستقبلاً) |

### لماذا المشروعان معاً؟

| الزبون المناسب لـ | الموقع الأول | لَمَّة |
|------------------|--------------|------|
| منظمي الحفلات الكبيرة | ✅ | ❌ |
| الفنادق الكبيرة | ✅ | ❌ |
| المؤسسات الثقافية | ❌ | ✅ |
| الفنانون والمبدعون | ❌ | ✅ |
| المدارس/الجامعات | ❌ | ✅ |
| شركات B2B | ❌ | ✅ (Multaqa-style) |
| المنصات العامة | ✅ | ❌ |
| البوتيكات والورش | ❌ | ✅ |

**النتيجة:** لديك عرض يغطي طيفاً واسعاً من الزبائن.

---

## 18. Checklist ما قبل النشر

### الكود
- [ ] TypeScript strict mode بدون أخطاء
- [ ] لا `any` أو `Record<string, unknown>` في الأنواع
- [ ] كل API routes لها try/catch
- [ ] كل الأخطاء تُسجّل في Sentry
- [ ] `.env.example` محدّث بكل المتغيرات

### Prisma
- [ ] `schema.prisma` مع `directUrl`
- [ ] pgvector + pg_trgm extensions مفعّلة
- [ ] كل الـ relations لها `onDelete` صريح
- [ ] كل الـ foreign keys لها `@@index`
- [ ] `Decimal(10, 3)` للـ KWD
- [ ] migrations ملتزمة في Git
- [ ] seed-standalone.ts بدون `@/` aliases

### Next.js
- [ ] `output: 'standalone'` في next.config.ts
- [ ] `error.tsx` مع زر "Show details"
- [ ] `loading.tsx` للصفحات البطيئة
- [ ] `not-found.tsx` مخصص
- [ ] middleware للمصادقة
- [ ] i18n مع ar/en
- [ ] RTL/LTR يعمل بشكل صحيح
- [ ] PWA manifest.json + service worker

### Docker
- [ ] Dockerfile multi-stage (deps, builder, prod-deps, runner)
- [ ] `bun ./node_modules/prisma/build/index.js` (وليس bunx)
- [ ] `;` بين migrate و server
- [ ] تشخيصات قبل الـ CMD
- [ ] `.dockerignore` كامل
- [ ] USER غير root
- [ ] EXPOSE 3000 + HOSTNAME=0.0.0.0

### Railway
- [ ] `railway.json` مع `healthcheckTimeout: 180`
- [ ] `healthcheckPath: /api/v1/health`
- [ ] كل المتغيرات مضبوطة
- [ ] لا `$` في قيم المتغيرات
- [ ] `DATABASE_URL` مع `?pgbouncer=true`

### Supabase
- [ ] كلمة مرور قوية بدون `$`
- [ ] Transaction pooler URL
- [ ] Direct URL
- [ ] pgvector extension مفعّل
- [ ] pg_trgm extension مفعّل
- [ ] Migrations مطبّقة

### التكاملات الخارجية
- [ ] OpenAI API key صالح
- [ ] Tap Payments (test mode أولاً)
- [ ] Mapbox token
- [ ] Cloudinary credentials
- [ ] Resend API key
- [ ] Supabase Realtime مفعّل

### البيانات التجريبية
- [ ] 5-8 أصحاب تجمعات
- [ ] 10-15 لمات متنوعة
- [ ] 4-6 مواضيع تحريرية
- [ ] 3-4 رسائل تحريرية مكتوبة بالكامل
- [ ] مستخدمون تجريبيون (مع اهتمامات متنوعة للاختبار)

### الاختبار
- [ ] اختبار يدوي على الموبايل (iOS + Android)
- [ ] اختبار يدوي على Desktop (Chrome + Safari + Firefox)
- [ ] اختبار RTL/LTR
- [ ] Lighthouse score > 90
- [ ] WAVE accessibility test
- [ ] اختبار الـ payment في test mode
- [ ] اختبار الـ Realtime
- [ ] اختبار الـ AI matching

### ما بعد النشر
- [ ] Sentry يلتقط الأخطاء
- [ ] Google Analytics مفعّل
- [ ] Search Console مفعّل
- [ ] Domain مخصص (lamma.kw أو ما شابه)
- [ ] SSL certificate (Railway يوفّره)
- [ ] مراقبة الـ uptime

---

## 📞 الخلاصة

**لَمَّة** ليست مجرد موقع فعاليات آخر — هي **منتج ثقافي** يبرز:

1. **العمق المنتجي** — فلسفة واضحة، تجربة مصمّمة بعناية
2. **الإتقان التقني** — Realtime + AI + payments + i18n
3. **الحس الثقافي** — مواقيت الصلاة، الديوانية، الهجري
4. **الجودة التحريرية** — مجلة Letters، مواضيع بدل فئات
5. **التمييز البصري** — لوحة ألوان صحراوية، خط Fraunces

استخدم هذا الملف كـ:
- 📖 **مرجع كامل** لبناء المشروع
- ✅ **Checklist** قبل كل مرحلة
- 🎯 **خط دعاية** للوكالتك
- 📊 **مقارنة** مع الموقع الأول

**الخطوة التالية:** ابدأ بالمرحلة 1 (التأسيس) واتبع الـ 8 أسابيع بدقة.

---

**آخر تحديث:** يونيو 2026
**المشروع:** لَمَّة (Lamma)
**المكدس:** Next.js 16 + Prisma 6.19 + PostgreSQL (Supabase) + pgvector + Bun + Docker + Railway
**الفئة:** منصة تجمعات حميمية كويتية
**الهدف:** واجهة دعائية للوكالة + منتج ثقافي حقيقي
