import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "Disconnect — Terminally Offline";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "Not a programme. Just an invitation.",
    subtitle: "Try putting your phone down. See what happens.",
    label: "Disconnect",
  });
}
