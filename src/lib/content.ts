import { en } from "./translations/en";
import { he } from "./translations/he";

export const siteUrl = "https://www.copyup.ai";

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/copyup-ai-050242422/", icon: "/icons/linkedin.svg" },
  { name: "Instagram", url: "https://www.instagram.com/copyup.aii/", icon: "/icons/instagram.svg" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61591677486394", icon: "/icons/facebook.svg" },
  { name: "TikTok", url: "https://www.tiktok.com/@copyup.ai", icon: "/icons/tiktok.svg" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCk4QH5CAVjzPol6F5-B5SvQ", icon: "/icons/youtube.svg" },
  { name: "Threads", url: "https://threads.net/@copyupai", icon: "/icons/threads.svg" },
];

// Matches the order of `platforms` in every locale.
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
  "/icons/shopify.svg",
  "/icons/wix.svg",
  "/icons/wordpress.svg",
];

export const content = { en, he };
export type Language = keyof typeof content;

export const rtlLanguages = new Set<Language>(["he"]);

export const languageOptions: { code: Language; flag: string; name: string }[] = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "he", flag: "🇮🇱", name: "עברית" },
];
