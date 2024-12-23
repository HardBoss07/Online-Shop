"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import NavBar from "@/app/navbar";
import ProductCardGenerator from "@/app/ProductCardGenerator";
import { useParams } from "next/navigation";

export default function ProductPage() {
    const { product } = useParams(); // Extract `product` from the URL
    const [productData, setProductData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!product) return;

        const fetchProductById = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${product}`
                );
                setProductData(response.data);
                setError(null);
            } catch (err) {
                console.error(`Error fetching product with id "${product}":`, err);
                setError("Failed to fetch the product");
            }
        };

        fetchProductById();
    }, [product]);

    if (!productData && !error) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>NovaTech | {productData?.name || "Product Details"}</title>
                <meta name="description" content={`Details for ${productData?.name}`} />
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={2} />
                </header>
                <section className="page-content">
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <>
                            <ProductCardGenerator data={productData} detail={"High"}></ProductCardGenerator>
                        </>
                    )}
                </section>
            </main>
        </>
    );
}
