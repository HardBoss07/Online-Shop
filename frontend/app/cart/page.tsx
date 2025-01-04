"use client";

import NavBar from "@/app/navbar";

export default function SearchPage() {
    return (
        <main>
            <header>
                <NavBar activeIcon={4}/>
            </header>
            <section className="page-content">
                <h1 className="cart-titel">Your Shopping Cart:</h1>
                <p>PLACEHOLDER_ITEM1</p>
                <p>PLACEHOLDER_ITEM2</p>
                <p>PLACEHOLDER_ITEM3</p>
            </section>
        </main>
    );
}
