"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/app/navbar";
import ProductCardGenerator from "@/app/ProductCardGenerator";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage() {
    const { category } = useParams(); // Extract dynamic `category` from the URL
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!category) return;

        const fetchProductsByCategory = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/products/category/${category}`
                );
                setProducts(response.data);
                setError(null);
            } catch (err) {
                console.error(`Error fetching products for category "${category}":`, err);
                setError("Failed to fetch products for this category");
            }
        };

        fetchProductsByCategory();
    }, [category]);

    return (
        <>
            <head>
                <title>NovaTech | {category}</title>
                <meta name="description" content={`All products in the ${category} category`} />
            </head>
            <main>
                <header>
                    <NavBar activeIcon={2} />
                </header>
                <section className="page-content">
                    <h1 className="text-3xl font-bold mb-6">All products for {category}:</h1>
                    <Link href="/products/categories">Shop by category</Link>
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="product-list">
                            {products.map((product: any) => (
                                <ProductCardGenerator key={product.id} data={product} detail="Medium" />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
