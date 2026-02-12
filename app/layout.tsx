import localFont from 'next/font/local'
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const apple = localFont({
  src: [
    {
      path: '../public/fonts/AppleGaramond-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/AppleGaramond-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/AppleGaramond.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AppleGaramond-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/AppleGaramond-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/AppleGaramond-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    }
  ],
  variable: '--font-apple',
  display: "swap",
})

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
})

export const metadata = {
  title: 'Vipin Garg | Financial Advisor - Coaching, Investing & Mortgages',
  description: 'Build your financial future with clarity, confidence, and guidance. Expert financial coaching, investment strategy, and mortgage solutions by Vipin Garg.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${apple.variable} ${outfit.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
