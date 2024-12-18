import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import {Navbar} from "@/components/shared";

const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Conference Website",
  description: "Sathyabama Institute of Science and Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} font-ubuntu antialiased bg-blue_bg`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          <Navbar />
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
