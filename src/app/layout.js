import "./globals.scss";
import { IM_Fell_English } from "next/font/google";

const imFellEnglish = IM_Fell_English({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Yokai Hunters Society",
  description: "Generatore personaggi per Yokai Hunters Society in italiano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={imFellEnglish.className}>{children}</body>
    </html>
  );
}
