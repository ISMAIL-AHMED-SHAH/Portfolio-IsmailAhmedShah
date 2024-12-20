import type { Metadata } from "next";
import {Sora} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Helper/Home/Navbar/ResponsiveNav";
import ScrolltoTop from "@/components/Helper/ScrolltoTop";
import AnimatedCursor from "react-animated-cursor";

const font = Sora({
  weight: ["100", "200","300","400","500","600","700","800"],
  subsets:['latin']
});


export const metadata: Metadata = {
  title: "Portfolio Ismail",
  description: "Ismail portfolio with  Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body
        className={`${font.className} ${font.className} antialiased`}
      >
        <div className="hidden md:block">
          <AnimatedCursor innerSize={8} outerSize={35} innerScale={2} outerScale={2} outerAlpha={0} innerStyle={{backgroundColor:'white'}}
          outerStyle={{
            border:'3px solid white',
          }}
          />
        </div>
        <ResponsiveNav/>
        {children}
        <ScrolltoTop/>

      </body>
    </html>
  );
}
