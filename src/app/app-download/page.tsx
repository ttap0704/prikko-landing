import type { Metadata } from "next";
import Image from "next/image";
import { formatCommonCdnImages } from "@/shared/utils/format";

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

const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

function AppleIcon() {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.52 12.62C16.5 10.14 18.04 8.82 18.12 8.76C16.74 6.78 14.62 6.52 13.88 6.5C12.08 6.32 10.34 7.58 9.42 7.58C8.5 7.58 7.08 6.52 5.54 6.54C3.58 6.56 1.76 7.72 0.76 9.5C-1.28 13.1 0.22 18.44 2.18 21.36C3.16 22.78 4.32 24.38 5.86 24.32C7.36 24.26 7.92 23.36 9.72 23.36C11.52 23.36 12.04 24.32 13.6 24.3C15.22 24.26 16.22 22.84 17.18 21.4C18.32 19.76 18.78 18.16 18.8 18.08C18.76 18.06 16.54 17.18 16.52 12.62Z"
        fill="white"
      />
      <path
        d="M13.54 4.56C14.34 3.58 14.88 2.24 14.74 0.9C13.58 0.96 12.14 1.7 11.32 2.66C10.58 3.52 9.92 4.9 10.08 6.2C11.38 6.3 12.72 5.54 13.54 4.56Z"
        fill="white"
      />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.65 0.65C0.25 1.05 0 1.7 0 2.55V21.45C0 22.3 0.25 22.95 0.65 23.35L0.75 23.45L11.85 12.35V12.05V11.75L0.75 0.55L0.65 0.65Z"
        fill="url(#paint0)"
      />
      <path
        d="M15.55 16.15L11.85 12.45V12.05V11.65L15.55 7.95L15.65 8.05L20.05 10.55C21.3 11.25 21.3 12.35 20.05 13.05L15.65 16.05L15.55 16.15Z"
        fill="url(#paint1)"
      />
      <path
        d="M15.65 16.05L11.85 12.05L0.65 23.35C1.05 23.75 1.75 23.8 2.55 23.35L15.65 16.05Z"
        fill="url(#paint2)"
      />
      <path
        d="M15.65 8.05L2.55 0.75C1.75 0.3 1.05 0.35 0.65 0.75L11.85 12.05L15.65 8.05Z"
        fill="url(#paint3)"
      />
      <defs>
        <linearGradient
          id="paint0"
          x1="10.55"
          y1="1.85"
          x2="-2.85"
          y2="15.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A0FF" />
          <stop offset="1" stopColor="#00E886" />
        </linearGradient>
        <linearGradient
          id="paint1"
          x1="22.15"
          y1="12.05"
          x2="-0.25"
          y2="12.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE000" />
          <stop offset="1" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient
          id="paint2"
          x1="13.55"
          y1="14.15"
          x2="-4.05"
          y2="31.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF3A44" />
          <stop offset="1" stopColor="#C31162" />
        </linearGradient>
        <linearGradient
          id="paint3"
          x1="-1.65"
          y1="-5.05"
          x2="7.05"
          y2="3.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32A071" />
          <stop offset="1" stopColor="#2DA771" />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
          <div className="mt-6 flex gap-4 md:mt-10">
            {/* App Store 버튼 */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[54px] items-center gap-3 rounded-lg bg-black px-5 transition-opacity hover:opacity-80 md:h-[60px] md:px-6"
            >
              <AppleIcon />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight text-white/90">
                  Download on the
                </span>
                <span className="text-[16px] font-semibold leading-tight text-white md:text-[18px]">
                  App Store
                </span>
              </div>
            </a>

            {/* Google Play 버튼 */}
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[54px] items-center gap-3 rounded-lg bg-black px-5 transition-opacity hover:opacity-80 md:h-[60px] md:px-6"
            >
              <GooglePlayIcon />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-tight text-white/90 uppercase">
                  Get it on
                </span>
                <span className="text-[16px] font-semibold leading-tight text-white md:text-[18px]">
                  Google Play
                </span>
              </div>
            </a>
          </div>
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
