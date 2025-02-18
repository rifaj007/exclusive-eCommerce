import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "./font";

export const metadata: Metadata = {   
  title: "Exclusive - Best Online Shopping",
  description: "Discover top-quality products at unbeatable prices. Shop the latest trends in fashion, electronics, home essentials, and more—all in one place!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
