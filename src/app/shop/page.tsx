import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { ProductCard, type Product } from "@/components/shop/ProductCard";
import { SignupCTA } from "@/components/sections/SignupCTA";
import { HERO_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Curated tools for the intentionally offline. Dumbphones, books, journals, and accessories — everything you need to disconnect with style.",
};

const products: Product[] = [
  // Dumbphones
  {
    name: "Light Phone III",
    price: "$399 USD",
    description:
      "The gold standard of minimal phones. E-ink display, calls, texts, maps, and nothing else. Beautiful, intentional design.",
    category: "Dumbphones",
    recommended: true,
    affiliateUrl: "https://www.thelightphone.com/",
  },
  {
    name: "Nokia 3210 (2024)",
    price: "$89 NZD",
    description:
      "The icon returns. Snake included. A perfect weekend phone or daily driver for the committed.",
    category: "Dumbphones",
    affiliateUrl: "https://www.nokia.com/phones/en_int/nokia-3210",
  },
  {
    name: "Punkt MP02",
    price: "$349 USD",
    description:
      "Swiss-designed minimal phone with 4G, Signal messaging, and a physical keyboard. For the security-conscious minimalist.",
    category: "Dumbphones",
    affiliateUrl: "https://www.punkt.ch/en/products/mp02-4g-mobile-phone/",
  },
  // Books
  {
    name: "Digital Minimalism",
    price: "$28 NZD",
    description:
      "Cal Newport's blueprint for a focused life in a noisy world. The foundational text for intentional technology use.",
    category: "Books",
    recommended: true,
    affiliateUrl: "https://www.bookdepository.com/Digital-Minimalism-Cal-Newport/9780525536512",
  },
  {
    name: "How to Do Nothing",
    price: "$32 NZD",
    description:
      "Jenny Odell's meditation on attention, place, and the art of refusal. Essential reading for the terminally offline.",
    category: "Books",
    affiliateUrl: "https://www.bookdepository.com/How-Do-Nothing-Jenny-Odell/9781612198552",
  },
  {
    name: "Stolen Focus",
    price: "$30 NZD",
    description:
      "Johann Hari investigates why we can't pay attention anymore — and what we can do about it. Urgent and compelling.",
    category: "Books",
    affiliateUrl: "https://www.bookdepository.com/Stolen-Focus-Johann-Hari/9781526620224",
  },
  // Journals
  {
    name: "Offline Challenge Journal",
    price: "$45 NZD",
    description:
      "30 daily prompts designed for the challenge. Reflection exercises, habit trackers, and space for unstructured thought.",
    category: "Journals",
    recommended: true,
  },
  {
    name: "Field Notes Original",
    price: "$15 NZD",
    description:
      "The classic pocket notebook. Perfect for capturing thoughts that used to become forgotten Notes app entries.",
    category: "Journals",
    affiliateUrl: "https://fieldnotesbrand.com/products/original-kraft",
  },
  // Accessories
  {
    name: "Phone Lockbox",
    price: "$55 NZD",
    description:
      "A timed lockbox for your phone. Set the timer, lock it in, and reclaim your evening. The physical version of willpower.",
    category: "Accessories",
    recommended: true,
  },
  {
    name: "Analog Alarm Clock",
    price: "$35 NZD",
    description:
      "No more phone-as-alarm-clock excuse. Simple, elegant, and it doesn't have a news feed.",
    category: "Accessories",
  },
];

const categories = [...new Set(products.map((p) => p.category))];

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The Offline Shop",
  description: "Curated tools for intentional living.",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      offers: {
        "@type": "Offer",
        price: product.price.replace(/[^0-9.]/g, ""),
        priceCurrency: product.price.includes("USD") ? "USD" : "NZD",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function ShopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <Hero
        title="The Offline Shop"
        subtitle="Curated tools for intentional living. Everything you need to disconnect with purpose."
        ctaText="Browse Below"
        ctaHref="#products"
        height="half"
        imageSrc={HERO_IMAGES.shop}
        imageAlt="Snow-capped mountain peaks"
      />

      <div id="products">
        {categories.map((category) => (
          <Section key={category} variant={category === "Books" || category === "Accessories" ? "muted" : "default"}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-10">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
            </div>
          </Section>
        ))}
      </div>

      {/* Affiliate Disclosure */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-foreground/40 leading-relaxed">
            <strong className="text-foreground/50">Affiliate Disclosure:</strong>{" "}
            Some links on this page are affiliate links. If you purchase through
            these links, we may earn a small commission at no extra cost to you.
            We only recommend products we genuinely believe support an
            intentional, offline-first lifestyle. Our recommendations are never
            influenced by affiliate arrangements.
          </p>
        </div>
      </Section>

      <SignupCTA
        heading="The best purchase is free"
        subheading="Join the 30-Day Offline Challenge. No products required — just intention."
      />
    </>
  );
}
