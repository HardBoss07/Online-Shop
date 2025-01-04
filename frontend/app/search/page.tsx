"use client";

import NavBar from "@/app/navbar";

export default function SearchPage() {
    return (

        <main>
            <header>
                <NavBar activeIcon={3}/>
            </header>
            <section className="page-content">
                <h1 className="product-title">Log in with your Account</h1>
                <input className="search-bar" placeholder="Search for products"/>
            </section>
        </main>

    );
}
