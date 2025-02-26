import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import HeaderEvangelizar from "@/components/Header";
import FooterEvangelizar from "@/components/Footer";

const bebasNeue = Oswald({
  subsets: ["latin-ext"],
  weight: ["200", "300", "400", "700", "600"],
});

export const metadata: Metadata = {
  title: "Evangelizar Sempre",
  description: "Evangelizar Sempre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" translate="no">
      <body className={`${bebasNeue.className} antialiased`}>
        <HeaderEvangelizar />
        <main className="min-h-[80vh] text-black text-md">{children}</main>
        <FooterEvangelizar />
      </body>
    </html>
  );
}
