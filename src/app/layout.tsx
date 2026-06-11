import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { PageLoader } from "@/components/PageLoader";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinayak Chaturvedi | Software Developer",
  description:
    "Portfolio of Vinayak Chaturvedi — Computer Science Engineering student and software developer building web applications with ASP.NET MVC, SQL, and modern front-end interfaces.",
  keywords: [
    "Vinayak Chaturvedi",
    "Software Developer",
    "Portfolio",
    "ASP.NET MVC",
    "Web Developer",
  ],
  authors: [{ name: "Vinayak Chaturvedi" }],
  openGraph: {
    title: "Vinayak Chaturvedi | Software Developer",
    description:
      "Building practical web applications with clean UI and dependable backend logic.",
    type: "website",
  },
  icons: {
    icon: [{ url: '/Favicon-new.png', type: 'image/png' }],
    shortcut: '/Favicon-new.png',
    apple: '/Favicon-new.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <ThemeProvider>
          <PageLoader />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
