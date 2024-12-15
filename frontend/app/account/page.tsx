"use client";

import Link from "next/link";
import Head from "next/head";

export default function SearchPage() {
    return (
        <>
            <Head>
                <title>Online Shop | Account</title>
                <meta name="description" content="Your Account" />
            </Head>
            <main>
                <header>
                    <nav className="nav-bar">
                        <Link href="/" className="nav-button">
                            <img src="/static/Icons/icon-home.svg" alt="Home"/>
                        </Link>
                        <Link href="/products" className="nav-button">
                            <img src="/static/Icons/icon-products.svg" alt="Products"/>
                        </Link>
                        <Link href="/search" className="nav-button">
                            <img src="/static/Icons/icon-search.svg" alt="Search"/>
                        </Link>
                        <Link href="/cart" className="nav-button">
                            <img src="/static/Icons/icon-cart.svg" alt="Cart"/>
                        </Link>
                        <Link href="/account" className="nav-button">
                            <img src="/static/Icons/icon-person.svg" alt="Account"/>
                        </Link>
                    </nav>
                </header>
                <h1 className="account-title">Log in with your Account</h1>
                <input className="login-form" placeholder="Username"/>
                <input className="login-form" placeholder="Password"/>
            </main>
        </>
    );
}
