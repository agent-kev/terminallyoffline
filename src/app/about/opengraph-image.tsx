import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "About Terminally Offline";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "The Story",
    subtitle: "A New Zealand-rooted movement proving that disconnection is the ultimate luxury.",
    label: "About",
  });
}
