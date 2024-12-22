"use client";

import Head from "next/head";
import NavBar from "@/app/navbar";

export default function TEMPLATE_PAGE() {
    return (
        <>
            <Head>
                <title>NovaTech | TEMPLATE</title>
                <meta name="description" content="TEMPLATE DESCRIPTION" />
            </Head>
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
