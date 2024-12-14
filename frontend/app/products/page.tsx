"use client"; // Add this at the top

import { useState, useEffect } from "react";
import axios from "axios";

import Head from "next/head";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/products");
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
                <meta name="description" content="Explore our wide range of products!"/>
            </Head>
            <main style={{padding: "20px"}}>
                <h1>Product List</h1>
                {error ? (
                    <p style={{color: "red"}}>{error}</p>
                ) : (
                    <ul>
                        {products.map((product: any, index: number) => (
                            <li key={index}>
                                <strong>{product.name}</strong> - {product.category} -
                                ${product.price} (Stock: {product.stock})
                            </li>
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
}
