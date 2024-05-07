import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uniquely Movie Website",
  description: "Explore the innovative and dynamic world of movies",
  keywords: " Next.js,Movie,SSR,SSG",
  authors: [{ name: "Abel Shibabaw" }],
  viewport: "width=device-width, initial-scale=1.0",
  // Remove the 'charset' property
  themeColor: "hsl(var(---background))", // You can set this to any color that represents your personal brand or leave it as a dark shade.
  // Remove the 'language' property
  robots: "index, follow", // This tells search engines that your website should be indexed and followed.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
