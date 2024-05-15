import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/shared/SmoothScroll";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Artisan's Bijou",
  description:
    "We are the well known Jewellery brand in Our preferences with decent enough experience in gold BUsiness. Get our Best Products on Artisans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
