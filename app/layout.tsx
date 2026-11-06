import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jbluxenterprises.vercel.app"),
  title: {
    default:
      "JB Lux Enterprises | Premium Clothing, Shoes & Accessories in Wholesale & Retail",
    template: "%s | JB Lux Enterprises",
  },
  description:
    "Shop premium urban unisex wear, stylish clothing, luxury wristwatches, designer shoes, and complete apparel accessories at JB Lux Enterprises. Available in wholesale and retail. Located on Lagos Island, Nigeria.",
  keywords: [
    // Brand & Identity
    "JB Lux Enterprises",
    "JB Lux",
    "JB Lux Store",
    "JB Lux Lagos",

    // Core Offerings & Categories
    "Premium Clothing Brand",
    "Urban Menswear Nigeria",
    "Wholesale and Retail Fashion",
    "Designer Shoes Lagos",
    "Luxury Wristwatches",
    "Men's Fashion Accessories",
    "Wholesale Clothing Nigeria",
    "Streetwear and Apparel",

    // Location & Local SEO
    "Gbode Ventures Plaza Lagos Island",
    "Nnamdi Azikiwe Street Lagos",
    "Clothing Shop Lagos Island",
    "Nigerian Fashion Store",
  ],
  authors: [
    { name: "JB Lux Enterprises", url: "https://jbluxenterprises.vercel.app" },
  ],
  creator: "JB Lux Enterprises",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jbluxenterprises.vercel.app",
    siteName: "JB Lux Enterprises",
    title: "JB Lux Enterprises | Premium Clothing, Shoes & Accessories",
    description:
      "Your ultimate destination for stylish urban unisex wear, luxury wristwatches, shoes, and apparel in wholesale and retail. Located in Lagos Island, Nigeria.",
    images: [
      {
        url: "https://jbluxenterprises.vercel.app/og/og.jpg",
        width: 1200,
        height: 630,
        alt: "JB Lux Enterprises — Premium Clothing, Shoes & Accessories",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Lux Enterprises | Premium Clothing,  & Accessories",
    description:
      "Shop stylish urban apparel, wristwatches, and footwear in wholesale and retail. Visit us on Lagos Island or order online.",
    images: ["https://jbluxenterprises.vercel.app/og/og.jpg"],
    creator: "@jbluxenterprises",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <p>Header</p>
        {children}
        <p>Footer</p>
      </body>
    </html>
  );
}
