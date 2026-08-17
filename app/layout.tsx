import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bluemoment-jeju.github.io"),
  title: "블루모먼트 | 제주 월령리 오션프론트 스테이",
  description: "제주 월령리 바다 바로 앞, 통창 너머 노을을 온전히 누리는 블루모먼트.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "블루모먼트 | 노을이 머무는 창",
    description: "제주 월령리 바다 바로 앞, 통창 너머 노을을 온전히 누리는 오션프론트 스테이.",
    images: [{ url: "/og.png", width: 1792, height: 896, alt: "블루모먼트 통창 너머 노을과 바다" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "블루모먼트 | 노을이 머무는 창", description: "제주 월령리 바다 바로 앞 오션프론트 스테이", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

