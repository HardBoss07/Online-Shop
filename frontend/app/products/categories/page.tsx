"use client";

import Head from "next/head";
import Link from "next/link";
import NavBar from "@/app/navbar";

export default function ProductsPage() {
    return (
        <>
            <Head>
                <title>Online Shop | Products</title>
                <meta name="description" content="Explore our wide range of products!" />
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={2} />
                </header>
                <h1 className="text-3xl font-bold mb-6">Our Categories:</h1>

            </main>
        </>
    );
}
