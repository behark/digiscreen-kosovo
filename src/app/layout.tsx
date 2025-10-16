import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiScreen Kosovo - Ekrane Dixhitale për Biznesin Tuaj | Mitrovicë",
  description: "Rritni shitjet me ekrane reklamuese moderne Full HD/4K. Instalim falas, trajnim falas, garanci 2 vjet. Mbështetje lokale në Mitrovicë, Kosovë. Çmime nga €1,999.",
  keywords: "ekrane dixhitale, digital signage kosovo, ekrane reklamuese, advertising screens mitrovice, digital display kosovo, ekrane per biznes",
  authors: [{ name: "DigiScreen Kosovo" }],
  openGraph: {
    type: "website",
    locale: "sq_AL",
    url: "https://digiscreen-kosovo.onrender.com",
    title: "DigiScreen Kosovo - Ekrane Dixhitale për Biznesin Tuaj",
    description: "Rritni shitjet me ekrane reklamuese moderne. Instalim falas, trajnim falas, mbështetje lokale në Mitrovicë.",
    siteName: "DigiScreen Kosovo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigiScreen Kosovo - Ekrane Dixhitale"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiScreen Kosovo - Ekrane Dixhitale",
    description: "Rritni shitjet me ekrane reklamuese moderne. Instalim falas në Mitrovicë.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <head>
        <link rel="canonical" href="https://digiscreen-kosovo.onrender.com" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
