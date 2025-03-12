import type { Metadata } from "next";
import "./globals.css";
import DeviceDetector from "./components/DeviceDetector";

export const metadata: Metadata = {
  metadataBase: new URL('https://shilajit-travel-fl47zxeom-joachims-projects-a8a8bf54.vercel.app'),
  title: "Shilajit Warrior - Embrace Your Inner Strength",
  description: "Discover the power of Shilajit with Shilajit Warrior. Premium quality, natural supplements to enhance your vitality and wellness.",
  openGraph: {
    title: "Shilajit Warrior - Embrace Your Inner Strength",
    description: "Discover the power of Shilajit with Shilajit Warrior. Premium quality, natural supplements to enhance your vitality and wellness.",
    images: [
      {
        url: "/images/I choose-3.jpg",
        width: 1200,
        height: 630,
        alt: "Shilajit Warrior",
      }
    ],
    type: "website",
    siteName: "Shilajit Warrior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilajit Warrior - Embrace Your Inner Strength",
    description: "Discover the power of Shilajit with Shilajit Warrior. Premium quality, natural supplements to enhance your vitality and wellness.",
    images: ["/images/I choose-3.jpg"],
  },
  icons: {
    icon: "/images/shilajit-icon.png",
    apple: "/images/shilajit-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&family=SF+Pro:wght@400;500&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        <DeviceDetector />
        {children}
      </body>
    </html>
  );
}
