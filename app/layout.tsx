import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casanova Villa Home Page",
  description: "Online Booking System for Hotels",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();

  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider session={session}>
          <Navbar />
            <main className="bg-gray-50 min-h-screen">
              {children}
            </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
