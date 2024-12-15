"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("api/products");
                setProducts(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products");
            }
        };

        fetchProducts();
    }, []);

    const createProductCard = (product: any) => {
        return (
            <div key={product.id} className="product-card">
                <h2 className="product-title">{product.name}</h2>
                <div className="image-container">
                    <Image
                        src={product.imageURL}
                        alt={`Image of ${product.name}`}
                        width={200}
                        height={200}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-stock">Stock: {product.stock}</p>
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Online Shop | Products</title>
                <meta name="description" content="Explore our wide range of products!" />
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
                        <Link href="/login" className="nav-button">
                            <img src="/static/Icons/icon-person.svg" alt="Account"/>
                        </Link>
                    </nav>
                </header>
                <h1 className="text-3xl font-bold mb-6">All our Products:</h1>
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="product-list">
                        {products.map((product: any) => createProductCard(product))}
                    </div>
                )}
            </main>
        </>
    );
}
