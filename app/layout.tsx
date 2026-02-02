import type { Metadata } from "next";
// import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { Figtree } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Nav } from "@/components/shared/nav";
import FooterApp from "@/components/shared/footer-app";
import { ViewTransition } from "react";

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const fontSans = Figtree({subsets:['latin'],variable:'--font-sans'});


export const metadata: Metadata = {
  title: "Frameshift - Tech challenges for every framework",
  description: "Tech challenges for every framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} suppressHydrationWarning>
      <body
        className={`
        antialiased
        min-h-screen
        flex
        flex-col
        w-full
      `}
      >
        <ViewTransition>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />

            <main className="grow pt-16">{children}</main>

            <FooterApp />
          </ThemeProvider>
        </ViewTransition>
      </body>
    </html>
  );
}
