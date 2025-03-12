import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shilajit Warrior - Embrace Your Inner Strength",
  description: "Discover the power of Shilajit with Shilajit Warrior. Premium quality, natural supplements to enhance your vitality and wellness.",
  openGraph: {
    title: "Shilajit Warrior - Embrace Your Inner Strength",
    description: "Discover the power of Shilajit with Shilajit Warrior. Premium quality, natural supplements to enhance your vitality and wellness.",
    images: [
      {
        url: "/images/shilajit-warrior-logo.png",
        width: 1200,
        height: 630,
        alt: "Shilajit Warrior Logo",
      }
    ],
    type: "website",
    siteName: "Shilajit Warrior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilajit Warrior - Embrace Your Inner Strength",
    description: "Discover the power of Shilajit with Shilajit Warrior. Premium quality, natural supplements to enhance your vitality and wellness.",
    images: ["/images/shilajit-warrior-logo.png"],
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
      </head>
      <body>{children}</body>
    </html>
  );
}
