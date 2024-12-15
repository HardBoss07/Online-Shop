import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Import Roboto font
import "./globals.css";

// Roboto Regular font
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Online Shop",
    description: "Welcome to My Online Shop",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
