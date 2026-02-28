export const SITE_NAME = "Terminally Offline";
export const SITE_URL = "https://terminallyoffline.club";
export const SITE_DESCRIPTION =
  "Encouragement to disconnect. From Aotearoa, New Zealand.";

export const NAV_LINKS = [
  { label: "Disconnect", href: "/disconnect" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
] as const;

export const SOCIAL_LINKS = {
  x: "https://x.com/termoffline",
  instagram: "https://instagram.com/terminallyoffline",
  tiktok: "https://tiktok.com/@terminallyoffline",
  newsletter: "/journal",
} as const;
