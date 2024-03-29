import QueryWrapper from "@/components/commons/QueryWrapper";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const nunito_Sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Doa Ibu Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito_Sans.className}>
        {/* <QueryWrapper></QueryWrapper> */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
