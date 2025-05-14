import "@/globals.css";

import Navbar from "@components/Navbar/Navbar";
import { environment } from "@constants/environment";
import { styled } from "@styled-system/jsx";
import type { Metadata } from "next";

import { PRODUCTION_URL } from "../constants/routePath";

export const metadata: Metadata = {
  title: { default: "와우 디자인 시스템", template: "%s | 와우 디자인 시스템" },
  description: "GDSC Hongik 디자인 시스템",
  keywords: ["GDSC", "Hongik", "디자인 시스템", "와우 디자인 시스템"],
  verification: {
    google: environment.GOOGLE_CONSOLE_KEY,
    other: {
      "naver-site-verification": environment.NAVER_CONSOLE_KEY ?? "",
    },
  },
  metadataBase: new URL(PRODUCTION_URL),
  openGraph: {
    title: "와우 디자인 시스템",
    description: "GDSC Hongik 디자인 시스템",
    url: PRODUCTION_URL,
    images: { url: "/images/og-image.png" },
    locale: "ko_KR",
    siteName: "와우 디자인 시스템",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "와우 디자인 시스템",
    description: "GDSC Hongik 디자인 시스템",
    images: { url: "/images/og-image.png" },
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/images/logo.svg",
      },
    ],
  },
  alternates: {
    canonical: PRODUCTION_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <styled.main
          height="100vh"
          marginLeft="250px"
          padding="70px 102px 0 101px"
          position="relative"
          width="100vw"
        >
          {children}
        </styled.main>
      </body>
    </html>
  );
};

export default RootLayout;
