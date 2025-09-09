import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life Edu LMS System",
  description: "Design & Developed By Life Systems",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="en" suppressHydrationWarning>

      <body suppressHydrationWarning className={`${inter.variable} antialiased min-h-screen flex flex-col`} >        

        <div className="flex-grow">

          {children}

        </div>       

      </body>

    </html>

  );

}
