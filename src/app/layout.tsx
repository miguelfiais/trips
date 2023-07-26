import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/providers/auth";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trips",
  description: "Sistema de Reserva de Viagens!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
