import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Velora Yoga & Dance Studio | Yoga, Dance & Bharatanatyam in JP Nagar",
  description: "Velora Yoga & Dance Studio in JP Nagar, Bengaluru, offering yoga, Western dance and Bharatanatyam classes for different age groups.",
  keywords: ["Yoga Studio JP Nagar", "Dance Studio JP Nagar", "Bharatanatyam Classes Bengaluru", "Western Dance Bengaluru", "Yoga Classes Bengaluru"],
  authors: [{ name: "Velora Yoga & Dance Studio" }],
  creator: "Velora Yoga & Dance Studio",
  publisher: "Velora Yoga & Dance Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://velora.in"), // Placeholder domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Velora Yoga & Dance Studio",
    description: "Velora Yoga & Dance Studio in JP Nagar, Bengaluru, offering yoga, Western dance and Bharatanatyam classes for different age groups.",
    url: "https://velora.in",
    siteName: "Velora Yoga & Dance Studio",
    images: [
      {
        url: "/assets/studio-view.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Yoga & Dance Studio in JP Nagar",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Yoga & Dance Studio",
    description: "Velora Yoga & Dance Studio in JP Nagar, Bengaluru, offering yoga, Western dance and Bharatanatyam classes for different age groups.",
    images: ["/assets/studio-view.jpg"],
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
  "name": "Velora Yoga & Dance Studio",
  "image": "https://velora.in/assets/studio-view.jpg",
  "url": "https://velora.in",
  "telephone": "+916366007494",
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
    "latitude": 12.9063, // Approximate for JP Nagar 7th Phase
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-velora-bg text-velora-foreground selection:bg-velora-accent/25 selection:text-velora-accent">
        {children}
      </body>
    </html>
  );
}
