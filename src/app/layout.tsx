import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kanaria.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "카나리아 | 비데가 기록하는 장 건강",
    template: "%s | 카나리아",
  },
  description:
    "카나리아 스마트 비데가 화장실 사용을 자동으로 기록하고 카나리아 앱이 브리스톨 척도 기반 건강 스코어로 장 건강 흐름을 보여줍니다. 가족 구성원 자동 구분과 다이어리, 원격 제어 기능을 제공합니다.",
  keywords: [
    "카나리아",
    "스마트 비데",
    "장 건강",
    "건강 스코어",
    "브리스톨 척도",
    "배변 기록",
    "헬스케어 앱",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "카나리아",
    title: "카나리아 | 비데가 기록하는 장 건강",
    description:
      "매일 쓰는 비데가 장 건강을 기록합니다. 카나리아 스마트 비데와 카나리아 앱.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // 아래 인라인 스크립트가 하이드레이션 전에 `js` 클래스를 추가하므로 html의 속성 차이만 허용한다.
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          // JS가 실행될 때만 스크롤 리빌 효과를 켠다. 실패 시 콘텐츠는 항상 보인다.
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
