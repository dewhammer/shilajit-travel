import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#181413" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&family=SF+Pro:wght@400;500&display=swap" rel="stylesheet" />
        
        {/* Additional meta tags for social media and messaging platforms */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="og:image" content="https://shilajit-travel-fl47zxeom-joachims-projects-a8a8bf54.vercel.app/images/I%20choose-3.jpg" />
        <meta property="og:image:secure_url" content="https://shilajit-travel-fl47zxeom-joachims-projects-a8a8bf54.vercel.app/images/I%20choose-3.jpg" />
        
        {/* Telegram specific meta tags */}
        <meta name="telegram:image" content="https://shilajit-travel-fl47zxeom-joachims-projects-a8a8bf54.vercel.app/images/I%20choose-3.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 