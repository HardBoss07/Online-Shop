"use client";

import NavBar from "@/app/navbar";

export default function SearchPage() {
    return (
        <main>
            <header>
                <NavBar activeIcon={5}/>
            </header>
            <section className="page-content">
                <h1 className="account-title">Log in with your Account</h1>
                <input className="login-form" placeholder="Username"/>
                <input className="login-form" placeholder="Password"/>
            </section>
        </main>
    );
}
