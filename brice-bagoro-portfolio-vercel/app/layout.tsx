import type { Metadata } from "next";
import "./globals.css";
import "./portfolio-polish.css";
import "./premium-v2.css";

export const metadata: Metadata = {
  title: "Brice Bagoro — E-commerce, Shopify, Copywriting & Conversion",
  description: "Portfolio de Brice Bagoro : stratégie de conversion, Shopify, copywriting, email marketing et publicité.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
