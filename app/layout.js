import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ApplicationButton from "@/components/ApplicationButton";
import SideBar from "@/components/SideBar";
import RecoilRootWrapper from "./RecoilRootWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AVATS",
  description: "AVATS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RecoilRootWrapper>
        <Header />
        <ApplicationButton />
        <main className="flex w-full" style={{ height:"600px" }}>
          <SideBar />
          {children}
          {/* {children} */}
        </main>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
