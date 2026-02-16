import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

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
        className={`${workSans.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
