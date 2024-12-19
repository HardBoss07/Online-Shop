"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import Head from "next/head";
import Link from "next/link";
import NavBar from "@/app/navbar";
import ProductCardGenerator from "@/app/ProductCardGenerator";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
                setProducts(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products");
            }
        };

        fetchProducts();
    }, []);

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
                <section className="page-content">
                    <h1 className="text-3xl font-bold mb-6">All our Products:</h1>
                    <Link href="/products/categories">Shop by category</Link>
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="product-list">
                            {products.map((product: any) => (
                                <ProductCardGenerator key={product.id} data={product} detail="Medium"/>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
