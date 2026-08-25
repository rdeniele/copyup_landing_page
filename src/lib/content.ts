export const siteUrl = "https://www.copyup.ai";

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/copyup-ai-050242422/", icon: "/icons/linkedin.svg" },
  { name: "Instagram", url: "https://www.instagram.com/copyup.aii/", icon: "/icons/instagram.svg" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61591677486394", icon: "/icons/facebook.svg" },
  { name: "TikTok", url: "https://www.tiktok.com/@copyup.ai", icon: "/icons/tiktok.svg" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCk4QH5CAVjzPol6F5-B5SvQ", icon: "/icons/youtube.svg" },
  { name: "Threads", url: "https://threads.net/@copyupai", icon: "/icons/threads.svg" },
];

// Matches the order of `platforms` in every locale below.
export const platformIcons = [
  "/icons/google-business.svg",
  "/icons/telegram.svg",
  "/icons/facebook.svg",
  "/icons/instagram.svg",
  "/icons/linkedin.svg",
  "/icons/github.svg",
  "/icons/tiktok.svg",
  "/icons/youtube.svg",
  "/icons/threads.svg",
  null,
  null,
  null,
];

const en = {
  nav: {
    links: [
      { label: "How it works", href: "#how-it-happens" },
      { label: "Platforms", href: "#platforms" },
      { label: "Engines", href: "#engines" },
    ],
  },
  hero: {
    eyebrow: "SEO · GEO · CONTENT MARKETING",
    headline: "Automated SEO & GEO Content Marketing",
    primaryCta: "Start Free",
    reviewCta: "Get Your Free Pre-Marketing Review",
    microcopy: "7 days free · No credit card",
  },
  platforms: [
    "Google Business Profile",
    "Telegram",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "GitHub",
    "TikTok",
    "YouTube",
    "Threads",
    "Shopify",
    "Wix",
    "WordPress",
  ],
  proof: {
    eyebrow: "PUBLISHED EVERYWHERE, AUTOMATICALLY",
    stat: "92",
    statLabel: "AI Visibility Score",
    statSub: "Likelihood to be cited by ChatGPT & Gemini",
  },
  belief: {
    eyebrow: "WHAT WE BELIEVE",
    title: "You're not losing to better competitors. You're losing to more visible ones.",
    body: "Every day, people search for exactly what you offer. If they don't see you, they buy from whoever they do see.",
  },
  howItHappens: {
    eyebrow: "HOW WE MAKE IT HAPPEN",
    title: "One system. Fully automated.",
    intro:
      "CopyUp plans, creates, optimizes, and publishes content across your website and digital channels to improve your visibility on Google and AI search engines.",
    tags: ["SEO", "GEO", "Content", "Social", "Publishing", "Analytics"],
    steps: [
      { n: "1", label: "Plan", desc: "Your content plan, built for you." },
      { n: "2", label: "Create", desc: "SEO + GEO content, in your voice." },
      { n: "3", label: "Publish", desc: "Across your site and every channel." },
      { n: "4", label: "Learn", desc: "Results feed the next cycle." },
    ],
    approve: "You approve. CopyUp does the rest.",
  },
  engines: {
    eyebrow: "ONE SYSTEM. FOUR ENGINES.",
    title: "Not built on viral moments. Built on consistency.",
    items: [
      {
        id: "voice",
        tag: "VOICE ENGINE",
        title: "Sounds like you. Not like AI.",
        desc: "Trained on your past writing and brand voice, so every piece — in every language — sounds like you wrote it.",
        screenshot: "/marketing/voice-engine-screenshot.png",
      },
      {
        id: "distribution",
        tag: "DISTRIBUTION ENGINE",
        title: "One idea. 12 platforms. Zero extra work.",
        desc: "Write once, publish everywhere — natively adapted for LinkedIn, Instagram, Google Business, and every channel you run.",
        screenshot: "/marketing/distribution-engine-screenshot.png",
      },
      {
        id: "presence",
        tag: "PRESENCE ENGINE",
        title: "Never disappear again.",
        desc: "An always-on content calendar that fills every publishing gap automatically, so momentum never resets.",
        screenshot: "/marketing/presence-engine-screenshot.png",
      },
      {
        id: "intelligence",
        tag: "INTELLIGENCE ENGINE",
        title: "Knows what works before you publish.",
        desc: "Every piece is scored before it goes live, then the system learns from what actually performs.",
        screenshot: "/marketing/intelligence-engine-screenshot.png",
      },
    ],
  },
  leadCta: {
    eyebrow: "READY WHEN YOU ARE",
    title: "Stop disappearing online.",
    sub: "Start your free visibility plan on CopyUp.",
    cta: "Start Free",
  },
  footer: {
    tagline: "Your business should never disappear online.",
    autopilot: "On autopilot.",
    productHeading: "Product",
    followHeading: "Follow",
    links: [
      { label: "How it works", href: "#how-it-happens" },
      { label: "Platforms", href: "#platforms" },
      { label: "Engines", href: "#engines" },
    ],
    copyrightPrefix: "©",
    copyrightSuffix: "CopyUp.ai. All rights reserved.",
  },
};

const he: typeof en = {
  nav: {
    links: [
      { label: "איך זה עובד", href: "#how-it-happens" },
      { label: "פלטפורמות", href: "#platforms" },
      { label: "המנועים", href: "#engines" },
    ],
  },
  hero: {
    eyebrow: "SEO · GEO · שיווק תוכן",
    headline: "שיווק תוכן אוטומטי ל-SEO ו-GEO",
    primaryCta: "התחילו בחינם",
    reviewCta: "קבלו סקירת פרה-מרקטינג בחינם",
    microcopy: "7 ימים בחינם · ללא כרטיס אשראי",
  },
  platforms: [
    "פרופיל העסק בגוגל",
    "טלגרם",
    "פייסבוק",
    "אינסטגרם",
    "לינקדאין",
    "GitHub",
    "טיקטוק",
    "יוטיוב",
    "Threads",
    "שופיפיי",
    "וויקס",
    "וורדפרס",
  ],
  proof: {
    eyebrow: "מתפרסם בכל מקום, אוטומטית",
    stat: "92",
    statLabel: "ציון נראות ב-AI",
    statSub: "הסבירות שתצוטטו על ידי ChatGPT ו-Gemini",
  },
  belief: {
    eyebrow: "במה שאנחנו מאמינים",
    title: "אתם לא מפסידים למתחרים טובים יותר. אתם מפסידים למתחרים שנראים יותר.",
    body: "כל יום, אנשים מחפשים בדיוק את מה שאתם מציעים. אם הם לא רואים אתכם, הם קונים ממי שהם כן רואים.",
  },
  howItHappens: {
    eyebrow: "איך זה קורה בפועל",
    title: "מערכת אחת. אוטומטית לגמרי.",
    intro:
      "CopyUp מתכנן, יוצר, מבצע אופטימיזציה ומפרסם תוכן באתר ובערוצים הדיגיטליים שלכם, כדי לשפר את הנראות שלכם בגוגל ובמנועי חיפוש מבוססי בינה מלאכותית.",
    tags: ["SEO", "GEO", "תוכן", "סושיאל", "פרסום", "אנליטיקס"],
    steps: [
      { n: "1", label: "תכנון", desc: "תוכנית התוכן שלכם, בנויה במיוחד עבורכם." },
      { n: "2", label: "יצירה", desc: "תוכן SEO + GEO, בקול שלכם." },
      { n: "3", label: "פרסום", desc: "באתר שלכם ובכל ערוץ." },
      { n: "4", label: "למידה", desc: "התוצאות מזינות את המחזור הבא." },
    ],
    approve: "אתם מאשרים. CopyUp עושה את השאר.",
  },
  engines: {
    eyebrow: "מערכת אחת. ארבעה מנועים.",
    title: "לא בנוי על רגעים ויראליים. בנוי על עקביות.",
    items: [
      {
        id: "voice",
        tag: "מנוע הקול",
        title: "נשמע כמוכם. לא כמו AI.",
        desc: "מאומן על הכתיבה והקול המותגי שלכם, כך שכל פריט — בכל שפה — נשמע כאילו כתבתם אותו בעצמכם.",
        screenshot: "/marketing/voice-engine-screenshot.png",
      },
      {
        id: "distribution",
        tag: "מנוע ההפצה",
        title: "רעיון אחד. 12 פלטפורמות. אפס עבודה נוספת.",
        desc: "כתבו פעם אחת, פרסמו בכל מקום — מותאם באופן טבעי ללינקדאין, אינסטגרם, גוגל ביזנס וכל ערוץ שאתם מנהלים.",
        screenshot: "/marketing/distribution-engine-screenshot.png",
      },
      {
        id: "presence",
        tag: "מנוע הנוכחות",
        title: "לא נעלמים יותר.",
        desc: "לוח תוכן פעיל תמיד שממלא כל פער בפרסום אוטומטית, כך שהמומנטום אף פעם לא מתאפס.",
        screenshot: "/marketing/presence-engine-screenshot.png",
      },
      {
        id: "intelligence",
        tag: "מנוע האינטליגנציה",
        title: "יודע מה עובד עוד לפני שפרסמתם.",
        desc: "כל פריט מקבל ציון לפני שהוא עולה לאוויר, ואז המערכת לומדת ממה שבאמת עובד.",
        screenshot: "/marketing/intelligence-engine-screenshot.png",
      },
    ],
  },
  leadCta: {
    eyebrow: "מוכנים כשאתם מוכנים",
    title: "תפסיקו להיעלם ברשת.",
    sub: "התחילו את תוכנית הנראות החינמית שלכם ב-CopyUp.",
    cta: "התחילו בחינם",
  },
  footer: {
    tagline: "העסק שלכם לא צריך להיעלם מהרשת אף פעם.",
    autopilot: "על טייס אוטומטי.",
    productHeading: "המוצר",
    followHeading: "עקבו אחרינו",
    links: [
      { label: "איך זה עובד", href: "#how-it-happens" },
      { label: "פלטפורמות", href: "#platforms" },
      { label: "המנועים", href: "#engines" },
    ],
    copyrightPrefix: "©",
    copyrightSuffix: "CopyUp.ai. כל הזכויות שמורות.",
  },
};

export const content = { en, he };
export type Language = keyof typeof content;
