import type {Metadata} from "next";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import "./globals.css";
import React from "react";
import Providers from "@/app/providers";
import Navbar from "@/components/Navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import AnimatedCursor from "@/components/AnimatedCursor";

export const metadata: Metadata = {
    title: "HundredLLC",
    description: "Unleash your digital potential. We help businesses and individuals drive their digital transformation and accelerate growth. Check out our services, solutions and strategies.",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className='!scroll-smooth' lang="en">
        <body className={GeistSans.className}>
        <Providers>
            <ActiveSectionContextProvider>
                <div>
                    <AnimatedCursor/>
                    <Navbar/>
                    {children}
                </div>
            </ActiveSectionContextProvider>
        </Providers>
        </body>
        </html>
    );
}
