import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Headerzz from '@/components/ui/Hearder'
import Footer from '@/components/layout/Footer'

import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AfyaMed",
  description: "Welcome to AfyaMed",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        {/* <Headerzz /> */}

        
        {children}
        {/* <Providers session={session}>
          <Toaster />
          
        </Providers> */}

        <Footer />
      </body>
    </html>
  );
}
