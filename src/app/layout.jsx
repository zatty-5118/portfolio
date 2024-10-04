import { Noto_Sans_JP } from "next/font/google";
const NotoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="#6699cc" />
        <meta property="og:image" content="https://raw.githubusercontent.com/zatty-5118/portfolio/main/public/images/ogImage.jpg" />
      </head>
      <body className={NotoSansJp.className}>
        {children}
      </body>
    </html>
  );
}
