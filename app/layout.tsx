import type {Metadata} from "next";
import {Lato as FontSans} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {LanguageContextProvider, ThemeProvider} from "@/lib/providers";
import {Toaster} from "@/components/ui/sonner";
import Header from "@/components/Header";
import {cn} from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Owenstack",
    default: "Owenstack",
  },
  description:
    "Full-stack web developer that builds beautiful and functional websites",
  metadataBase: new URL("https://owenstack.github.io"),
  openGraph: {
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LanguageContextProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Analytics />
            <Header />
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </LanguageContextProvider>
    </html>
  );
}
