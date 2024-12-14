"use client";

import Link from "next/link";
import Head from "next/head";

export default function Page() {
    return (
        <>
            <Head>
                <title>Online Shop | Home</title>
                <meta name="description" content="Welcome to My Online Shop!"/>
            </Head>
            <main>
                <h1>Welcome to My Online Shop!</h1>
                <Link href="/products">Click me to browse all products</Link>
            </main>
        </>
    );
}
