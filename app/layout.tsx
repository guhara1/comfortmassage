import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobilePhoneIcon from "@/components/MobilePhoneIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "전국 출장마사지｜서울·경기·부산·대구·광주·제주 홈타이 지역 안내 | 간다GO",
  description:
    "전국 출장마사지·홈타이 예약 전 서울, 경기, 인천, 부산, 대구, 대전, 광주, 경남, 경북, 제주 등 주요 지역과 스웨디시, 아로마, 타이마사지, 스포츠 마사지, 호텔·오피스텔·자택 이용 기준을 안내합니다.",
  metadataBase: new URL("https://gandago-massage.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "전국 출장마사지｜서울·경기·부산·대구·광주·제주 홈타이 지역 안내 | 간다GO",
    description:
      "전국 출장마사지·홈타이 예약 전 서울, 경기, 인천, 부산, 대구, 대전, 광주, 경남, 경북, 제주 등 주요 지역과 스웨디시, 아로마, 타이마사지, 스포츠 마사지, 호텔·오피스텔·자택 이용 기준을 안내합니다.",
    siteName: "간다GO",
  },
  alternates: {
    canonical: "https://gandago-massage.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "간다GO",
              url: "https://gandago-massage.com",
              telephone: "+82-508-202-4719",
              description:
                "전국 출장마사지·홈타이 예약 안내 사이트",
              sameAs: ["https://t.me/gandago"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <div className="flex-1">{children}</div>
        <Footer />
        <MobilePhoneIcon />
      </body>
    </html>
  );
}
