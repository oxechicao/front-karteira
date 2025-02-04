import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { H1, Header } from "@/components/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="bg-neutral-900 p-16 flex min-h-screen  align-middle justify-center">
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
