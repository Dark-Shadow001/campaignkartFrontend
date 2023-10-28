import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Provider from "../common/Provider";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campaignkart",
  description: "Consulting company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"3xl:px-[20%] 2xl:px-0"}>
        <Provider>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-08497J1RLM"
          ></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-08497J1RLM');`}
          </Script>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
