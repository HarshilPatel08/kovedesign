import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Kove Design | Interior Designer & Architect in Ahmedabad | Budget to Luxury",
  description:
    "Top interior designer and architect in Ahmedabad offering budget-friendly to luxury home interiors. Specializing in modern bedrooms, modular kitchens, and residential architecture across Gujarat and India.",
  keywords: [
    // Primary Keywords
    "Interior designer in Ahmedabad",
    "Best interior designer in Ahmedabad",
    "Architectural interior design studio in Ahmedabad",
    "Residential interior designer in Ahmedabad",
    "Luxury interior designer in Ahmedabad",
    "Modern interior design in Ahmedabad",
    "Minimal interior design Ahmedabad",
    "Contemporary interior designer Ahmedabad",
    "Interior design company in Ahmedabad",
    "Ahmedabad interior design studio",

    // Budget & Affordable
    "Budget interior designer in Ahmedabad",
    "Affordable interior designer in Ahmedabad",
    "Low budget interior design Ahmedabad",
    "Cost effective interior design services Ahmedabad",
    "Budget friendly home interior design Ahmedabad",
    "Interior design under budget in Ahmedabad",
    "Affordable luxury interiors Ahmedabad",
    "Best interior design at low cost Ahmedabad",

    // Room Specific
    "Modern bedroom interior design Ahmedabad",
    "Minimal bedroom design Ahmedabad",
    "Luxury bedroom interiors Ahmedabad",
    "Budget bedroom interior design Ahmedabad",
    "Wooden panelled bedroom design Ahmedabad",
    "Custom wardrobe design Ahmedabad",
    "Cozy bedroom interior design India",
    "Modular kitchen designer in Ahmedabad",
    "Budget modular kitchen Ahmedabad",
    "Modern kitchen interior design Ahmedabad",
    "Low budget kitchen design India",
    "Contemporary kitchen design Ahmedabad",
    "Living room interior design Ahmedabad",
    "Modern living room interiors India",
    "Luxury living room design Ahmedabad",
    "Minimal living room interior design",
    "Budget living room interiors Ahmedabad",

    // India Level & Combo
    "Interior designers in India",
    "Modern Indian home interior design",
    "Indian residential interior design",
    "Contemporary Indian interiors",
    "Minimal interior design India",
    "Luxury interiors India",
    "Budget home interior design India",
    "Architectural interior design Ahmedabad",
    "Architect and interior designer in Ahmedabad",
    "Residential architect in Ahmedabad",
    "Modern home architecture and interiors",
    "Interior architecture studio Ahmedabad",

    // Material & Style
    "Warm minimal interior design",
    "Wooden interior design Ahmedabad",
    "Marble interior design India",
    "Soft tone interior design",
    "Neutral color home interiors",
    "Cove lighting interior design",
    "Textured wall panel design Ahmedabad",

    // Local & Long Tail
    "Interior designer near me Ahmedabad",
    "Home interior designer near me",
    "Interior design studio near me Ahmedabad",
    "Best interior designer in Gujarat",
    "Residential interior designer Gujarat",
    "Best budget interior designer in Ahmedabad for 2 BHK",
    "Affordable interior design for apartments in Ahmedabad",
    "Low budget modern bedroom design India",
    "Budget friendly luxury home interiors Ahmedabad",
    "Interior design cost for 3 BHK in Ahmedabad",
    "Minimal interior design for Indian homes",
    "Affordable modular kitchen design Ahmedabad",

    // Brand Variations
    "The Kove Design",
    "Kove Design",
    "Cove Design",
  ],
  openGraph: {
    title: "The Kove Design | Interior Designer & Architect in Ahmedabad",
    description: "Top interior designer and architect offering budget-friendly to luxury home interiors. Specializing in modern bedrooms, modular kitchens, and residential architecture.",
    url: "https://kovedesign.in",
    siteName: "The Kove Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Kove Design Interior & Architecture Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        <Navbar />
        <main className="min-h-screen overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
