import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google';
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster"


const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: "--font-ubuntu",
});

export const metadata: Metadata = {
    title: "Conference Website",
    description: "Sathyabama Institute of Science and Technology",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${ubuntu.variable} font-ubuntu antialiased bg-bg_black flex flex-col min-h-screen`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
        >
            {children}
            <Toaster />
        </ThemeProvider>
        </body>
        </html>
    );
}
