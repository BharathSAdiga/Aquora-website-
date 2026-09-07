import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "AQUORA Yoga & Dance Studio | Yoga, Dance & Bharatanatyam in JP Nagar",
  description: "AQUORA Yoga & Dance Studio in JP Nagar, Bengaluru. A space for mindful movement, creative expression and holistic wellness offering Yoga, Western Dance and Bharatanatyam.",
  keywords: [
    "AQUORA Yoga & Dance Studio",
    "Aquora JP Nagar",
    "Yoga Studio JP Nagar",
    "Dance Studio JP Nagar",
    "Bharatanatyam Classes Bengaluru",
    "Western Dance Bengaluru",
    "Yoga Classes Bengaluru",
    "Move Breathe Transform"
  ],
  authors: [{ name: "AQUORA Yoga & Dance Studio" }],
  creator: "AQUORA Yoga & Dance Studio",
  publisher: "AQUORA Yoga & Dance Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aquora.studio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AQUORA Yoga & Dance Studio | Move. Breathe. Transform.",
    description: "A luxury sanctuary for mindful movement, creative expression and holistic wellness in JP Nagar, Bengaluru. Offering Yoga, Western Dance and Bharatanatyam.",
    url: "https://aquora.studio",
    siteName: "AQUORA Yoga & Dance Studio",
    images: [
      {
        url: "/assets/aquora_hero_studio_clean.jpg",
        width: 1280,
        height: 720,
        alt: "AQUORA Yoga & Dance Studio in JP Nagar",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUORA Yoga & Dance Studio",
    description: "A luxury sanctuary for mindful movement, creative expression and holistic wellness in JP Nagar, Bengaluru.",
    images: ["/assets/aquora_hero_studio_clean.jpg"],
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
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AQUORA Yoga & Dance Studio",
  "image": "https://aquora.studio/assets/aquora_hero_studio_clean.jpg",
  "url": "https://aquora.studio",
  "telephone": "+919164267977",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 3/1, 1st Floor, SkyPool Fitness Studio Building, 4th B Main Road, Dr. Vivekananda Layout, 7th Phase, J.P. Nagar",
    "addressLocality": "Bengaluru",
    "postalCode": "560078",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9063,
    "longitude": 77.5857 
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "20:30"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable} dark h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('aquora-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');document.documentElement.style.colorScheme='light';}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-aquora-bg bg-ambient-dark text-aquora-foreground selection:bg-aquora-purple/40 selection:text-aquora-beige">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
