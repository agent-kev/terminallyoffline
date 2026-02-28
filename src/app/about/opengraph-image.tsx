import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "About Terminally Offline";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "The Story",
    subtitle: "The story behind Terminally Offline.",
    label: "About",
  });
}
