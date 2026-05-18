import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ascentcircles.com'),
  title: "The Ascent Circle - A Global Family in Motion",
  description: "Join a global movement rooted in nature, built on presence, rising together. We don't just climb mountains, we rise together in life.",
  keywords: ["community", "nature", "hiking", "mindfulness", "global movement", "wellness", "outdoor", "connection", "Nigeria", "Abuja"],
  authors: [{ name: "The Ascent Circle" }],
  creator: "The Ascent Circle",
  publisher: "The Ascent Circle",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "The Ascent Circle - We Rise Together",
    description: "A global, inclusive movement built around nature, presence, and shared growth.",
    url: "https://ascentcircles.com",
    siteName: "The Ascent Circle",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Ascent Circle - Mountain landscape with community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ascent Circle - We Rise Together",
    description: "A global, inclusive movement built around nature, presence, and shared growth.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${crimsonText.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}