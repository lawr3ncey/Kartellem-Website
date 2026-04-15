import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  title: "KARTELLEM — Manila Underground Collective",
  description:
    "Born from the underground. Built for the streets. KARTELLEM is Manila's finest hip-hop collective and streetwear brand.",
  openGraph: {
    title: "KARTELLEM — Manila Underground Collective",
    description:
      "Born from the underground. Built for the streets. KARTELLEM is Manila's finest hip-hop collective and streetwear brand.",
    url: "https://kartellem.devrence.com",
    siteName: "KARTELLEM",
    images: [
      {
        url: "https://kartellem.devrence.com/images/tellem-logo-blackbg.png",
        width: 1200,
        height: 1200,
        alt: "KARTELLEM — Manila Underground Collective",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KARTELLEM — Manila Underground Collective",
    description:
      "Born from the underground. Built for the streets. KARTELLEM is Manila's finest hip-hop collective and streetwear brand.",
    images: ["https://kartellem.devrence.com/images/tellem-logo-blackbg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <GrainOverlay />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
