import type { Metadata } from "next";
import "./globals.css";
import "./portfolio-polish.css";
import "./premium-v2.css";
import "./resources-v1.css";

export const metadata: Metadata = {
  title: "NeuroConvert — Creative Strategy & Copywriting e-commerce",
  description: "Angles, concepts publicitaires, hooks, scripts et textes pour aider les marques e-commerce à renouveler leurs créatives et préparer de nouveaux tests sur Meta.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
