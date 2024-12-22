"use client";

import Link from "next/link";
import Head from "next/head";
import NavBar from "@/app/navbar";

export default function Page() {
    return (
        <>
            <Head>
                <title>NovaTech</title>
                <meta name="description" content="Welcome to NovaTech!"/>
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={1} />
                </header>
                <section className="page-content">
                    <h1 className="product-title">Welcome to NovaTech!</h1>
                    <Link href="/products">Click me to browse all of NovaTech's products</Link>
                </section>
            </main>
        </>
    );
}
