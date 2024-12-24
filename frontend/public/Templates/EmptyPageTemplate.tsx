"use client";

import NavBar from "@/app/navbar";

export default function TEMPLATE_PAGE() {
    return (
        <>
            <head>
                <title>NovaTech | TEMPLATE</title>
                <meta name="description" content="TEMPLATE DESCRIPTION" />
            </head>
            <main>
                <header>
                    <NavBar activeIcon={0} />
                </header>
                <section className="page-content">

                </section>
            </main>
        </>
    );
}
