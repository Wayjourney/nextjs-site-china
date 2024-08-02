import type { Metadata } from "next";
import type { Viewport } from 'next'
import { Inter } from "next/font/google";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "郑州瑞斯特耐有限公司官网",
  description: "热工设备隔热保温首选产品 | 郑州瑞斯特耐有限公司",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="baidu-site-verification" content="codeva-zVYXn1UOnJ" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
