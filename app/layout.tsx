import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Analytics from "@/components/Analytics";

const bebasNeue = localFont({
  src: [
    {
      path: "../public/fonts/bebas-neue/bebas-neue-v14-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas",
  display: "swap",
});

const oswald = localFont({
  src: [
    {
      path: "../public/fonts/oswald/oswald-v57-latin-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/oswald/oswald-v57-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/oswald/oswald-v57-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bonavista On The Lake | 50+ Luxury Apartments | European-Inspired Living",
  description: "European-inspired luxury living for 50+. 9' ceilings, soundproofing, private balconies. Now renting from $1600/month. Visit us today!",
  keywords: [
    "50+ luxury apartments",
    "senior living",
    "luxury retirement living",
    "European design apartments",
    "Bonavista apartments",
    "luxury living facility",
    "soundproof apartments",
    "private balcony apartments"
  ],
  authors: [{ name: "Rockport Investment Group Inc." }],
  creator: "Rockport Investment Group Inc.",
  publisher: "Rockport Investment Group Inc.",
  metadataBase: new URL('https://bonavistaonthelake.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Bonavista On The Lake | 50+ Luxury Apartments",
    description: "European-inspired luxury living for 50+. 9' ceilings, soundproofing, private balconies. Now renting from $1600/month.",
    url: 'https://bonavistaonthelake.ca',
    siteName: 'Bonavista On The Lake',
    images: [
      {
        url: '/1590-ext.png',
        width: 1200,
        height: 630,
        alt: 'Bonavista On The Lake Luxury Apartment Building',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bonavista On The Lake | 50+ Luxury Apartments",
    description: "European-inspired luxury living for 50+. 9' ceilings, soundproofing, private balconies. Now renting from $1600/month.",
    images: ['/1590-ext.png'],
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
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "name": "Bonavista On The Lake",
        "description": "50+ Luxury Living Facility with European-inspired design, featuring 9-foot ceilings, extensive soundproofing, and private balconies.",
        "url": "https://bonavistaonthelake.ca",
        "image": "https://bonavistaonthelake.ca/1590-ext.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CA"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "9-Foot Ceilings",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Extensive Soundproofing",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Private Balconies",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Bicycle Room",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Indoor/Outdoor Parking",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "FOB Security Entrances",
            "value": true
          }
        ],
        "numberOfBedrooms": "1-3",
        "floorSize": {
          "@type": "QuantitativeValue",
          "minValue": 752,
          "maxValue": 1150,
          "unitCode": "FTK"
        },
        "petsAllowed": "Contact for details"
      },
      {
        "@type": "Organization",
        "name": "Rockport Investment Group Inc.",
        "url": "https://rockportgroup.ca",
        "logo": "https://rockportgroup.ca/logo.png",
        "sameAs": [
          "https://rockportgroup.ca/residential/bonavista-on-the-lake"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bonavistaonthelake.ca"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${oswald.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
