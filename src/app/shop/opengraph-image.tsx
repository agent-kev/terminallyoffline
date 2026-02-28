import { createOGImage, ogSize, ogContentType } from "@/lib/og-image";

export const alt = "The Offline Shop";
export const size = ogSize;
export const contentType = ogContentType;

export default function OGImage() {
  return createOGImage({
    title: "The Offline Shop",
    subtitle: "Curated tools for intentional living. Dumbphones, books, journals, and accessories.",
    label: "Shop",
  });
}
