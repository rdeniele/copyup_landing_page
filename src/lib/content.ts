export const siteUrl = "https://www.copyup.ai";

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
  hero: {
    eyebrow: "SEO · GEO · CONTENT MARKETING",
    headline: "Automated SEO & GEO Content Marketing",
    primaryCta: "Start Free",
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
  leadCta: {
    eyebrow: "READY WHEN YOU ARE",
    title: "Stop disappearing online.",
    sub: "Start your free visibility plan on CopyUp.",
    cta: "Start Free",
  },
  footer: {
    tagline: "Your business should never disappear online.",
    autopilot: "On autopilot.",
  },
};

const he: typeof en = {
  hero: {
    eyebrow: "SEO · GEO · שיווק תוכן",
    headline: "שיווק תוכן אוטומטי ל-SEO ו-GEO",
    primaryCta: "התחילו בחינם",
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
  leadCta: {
    eyebrow: "מוכנים כשאתם מוכנים",
    title: "תפסיקו להיעלם ברשת.",
    sub: "התחילו את תוכנית הנראות החינמית שלכם ב-CopyUp.",
    cta: "התחילו בחינם",
  },
  footer: {
    tagline: "העסק שלכם לא צריך להיעלם מהרשת אף פעם.",
    autopilot: "על טייס אוטומטי.",
  },
};

export const content = { en, he };
export type Language = keyof typeof content;
