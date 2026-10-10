
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jyothi Aiswarya — CS Student & Builder",
  description:
    "Computer Science Engineering student, builder of First Move (11~18), and VP Education at Sanskrithi Toastmasters Club. Curious. Ambitious. Building.",
  keywords: [
    "Jyothi Aiswarya",
    "portfolio",
    "Computer Science",
    "First Move",
    "software development",
    "AI",
    "Sanskrithi School of Engineering",
  ],
  openGraph: {
    title: "Jyothi Aiswarya — CS Student & Builder",
    description:
      "Computer Science Engineering student, builder of First Move (11~18), and VP Education at Sanskrithi Toastmasters Club.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyothi Aiswarya — CS Student & Builder",
    description:
      "Computer Science Engineering student, builder of First Move (11~18).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

