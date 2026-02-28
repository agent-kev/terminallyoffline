import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "The 30-Day Offline Challenge";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "The 30-Day Offline Challenge",
    subtitle: "Four rules. Four weeks. A complete reset of your relationship with technology.",
    label: "Challenge",
  });
}
