import type { Metadata } from "next";
import "./globals.css";
import "./portfolio-polish.css";

export const metadata: Metadata = {
  title: "Brice Bagoro — E-commerce, Copywriting & Conversion",
  description: "Portfolio e-commerce, Shopify, copywriting et stratégie de conversion de Brice Bagoro.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
