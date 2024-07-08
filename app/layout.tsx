import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "郑州瑞斯特耐有限公司",
  description: "热工设备隔热保温首选产品 | 郑州瑞斯特耐有限公司",
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
        <meta name="baidu-site-verification" content="codeva-zVYXn1UOnJ" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        {modal}
        <div id="modal-root" />
        <Footer />
      </body>
    </html>
  );
}
