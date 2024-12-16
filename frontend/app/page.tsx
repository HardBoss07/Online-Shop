"use client";

import Link from "next/link";
import Head from "next/head";
import NavBar from "@/app/navbar";

export default function Page() {
    return (
        <>
            <Head>
                <title>Online Shop | Home</title>
                <meta name="description" content="Welcome to My Online Shop!"/>
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={1} />
                </header>
                <h1 className="product-title">Welcome to My Online Shop!</h1>
                <Link href="/products">Click me to browse all products</Link>
            </main>
        </>
    );
}
