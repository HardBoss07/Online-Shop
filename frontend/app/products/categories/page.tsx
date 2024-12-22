"use client";

import Head from "next/head";
import React from "react";
import NavBar from "@/app/navbar";
import ProductCardGenerator from "@/app/ProductCardGenerator";

import {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState<string | null>(null);

    const categoryNames = ["Smartphone", "Audio", "Laptop", "Peripherals"]

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/categories`);
                const rawData = response.data;

                console.log(rawData);

                const categoriesData = rawData.map((category: any, index: number) => ({
                    name: category.name || categoryNames[index] || `Category ${index + 1}`,
                    products: Array.isArray(category.products) ? category.products : [], // Pass products correctly
                }));

                console.log(categoriesData);

                setCategories(categoriesData);
                setError(null);
            } catch (err) {
                console.error("Error fetching categorized products:", err);
                setError("Failed to fetch categorized products");
            }
        };

        fetchProducts();
    }, []);

    const createCategoryDiv = (category: any) => {
        const categoryName = category.name;
        const products = category.products;

        const productsAmount = products.length;
        const displayProducts = productsAmount <= 3 ? products : products.slice(0, 3);

        return (
            <div key={categoryName} className="category-div">
                {/* Header */}
                <div className="category-header">
                    <h2 className="category-title">{categoryName}</h2>
                    <span className="products-count">Products: {productsAmount}</span>
                </div>
                <Link href={`/products/categories/${category.name}`}>{category.name}</Link>


                {/* Products Grid */}
                <div className="products-grid">
                    {displayProducts.map((product: any) => (
                        <ProductCardGenerator key={product.id} data={product} detail="Low"/>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <>
            <Head>
                <title>Online Shop | Categories</title>
                <meta name="description" content="All products sorted by their category" />
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={2}/>
                </header>
                <section className="page-content">
                    <h1 className="text-3xl font-bold mb-6">Our Categories:</h1>
                    {categories.map((category: any) => createCategoryDiv(category))}
                </section>
            </main>
        </>
    );
}
