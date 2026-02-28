import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "The Offline Gallery";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "The Offline Gallery",
    subtitle: "Verified photographs from provably offline people. What the world looks like when you look up.",
    label: "Gallery",
  });
}
