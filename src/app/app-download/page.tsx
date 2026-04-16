import type { Metadata } from "next";
import Image from "next/image";
import { formatCommonCdnImages } from "@/shared/utils/format";
import { DownloadButtons } from "./DownloadButtons";

export const metadata: Metadata = {
  title: "프리코 - 앱 다운로드 | 실시간 최저가 알림",
  description:
    "프리코가 실시간으로 가격을 추적하고, 역대 최저가일 때 알림을 보내드립니다. App Store와 Google Play에서 무료로 다운로드하세요.",
  keywords: [
    "프리코",
    "최저가 알림",
    "핫딜",
    "쇼핑 알림",
    "가격 추적",
    "prikko",
  ],
  openGraph: {
    title: "프리코 - 실시간 최저가 알림 앱",
    description:
      "직접 찾아다닐 필요 없어요. 프리코가 실시간으로 가격을 추적하고, 진짜 저렴할 때만 알림을 보내드립니다.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "프리코 - 실시간 최저가 알림 앱",
    description:
      "직접 찾아다닐 필요 없어요. 프리코가 실시간으로 가격을 추적하고, 진짜 저렴할 때만 알림을 보내드립니다.",
  },
};

export default function AppDownloadPage() {
  const phoneMockupImage = formatCommonCdnImages("/phone-mockup.png");

  return (
    <main className="flex min-h-dvh items-center justify-center bg-white">
      <div className="flex w-full max-w-[1440px] flex-col-reverse justify-center items-center gap-8 px-6 py-16 md:flex-row md:gap-8 md:px-[20px] md:py-0">
        {/* 텍스트 + 다운로드 버튼 */}
        <div className="flex shrink-0 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-[40px] font-bold leading-none tracking-[-2px] text-[#313131] md:text-[64px]">
            프리코,
            <br />
            최저가 알림
          </h1>
          <p className="mt-6 max-w-[420px] text-base leading-normal text-[#575757] md:mt-8">
            직접 찾아다닐 필요 없어요. 프리코가 실시간으로 가격을 추적하고, 진짜
            저렴할 때만 알림을 보내드립니다.
          </p>
          <DownloadButtons />
        </div>

        {/* 폰 목업 */}
        <div>
          <Image
            src={phoneMockupImage}
            alt="Prikko app screenshot"
            width={1736}
            height={3528}
            priority
            className="w-[240px] md:w-[300px]"
          />
        </div>
      </div>
    </main>
  );
}
