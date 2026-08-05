import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin", "latin-ext"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;

  return {
    title: "Arda Tatlı — Software Developer",
    description: "Software Developer Arda Tatlı'nın kişisel portfolyosu ve yazılım projeleri.",
    openGraph: { title: "Arda Tatlı", description: "Software Developer", images: [{ url: image, width: 1536, height: 1024 }] },
    twitter: { card: "summary_large_image", title: "Arda Tatlı", description: "Software Developer", images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body className={`${space.variable} ${syne.variable}`}>{children}</body></html>;
}
