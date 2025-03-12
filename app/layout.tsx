import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRAVELAND - Your Journey Begins Here",
  description: "Discover extraordinary destinations and unforgettable experiences with TRAVELAND. Start your journey with us today.",
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
