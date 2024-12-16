"use client";

import Link from "next/link";
import Head from "next/head";
import NavBar from "@/app/navbar";

export default function SearchPage() {
    return (
        <>
            <Head>
                <title>Online Shop | Search</title>
                <meta name="description" content="Search for products" />
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={3} />
                </header>
                <h1 className="product-title">Welcome to My Online Shop!</h1>
                <input className="search-bar" placeholder="Search for products" />
            </main>
        </>
    );
}
