"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
    // State to store the list of products
    const [products, setProducts] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<string[]>("/api/products"); // Specify the type of response data
                setProducts(response.data); // Store the data in state
                setError(null); // Clear any previous errors
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products");
            }
        };

        fetchProducts();
    }, []);

    // Render the products or an error message
    return (
        <div style={{ padding: "20px" }}>
            <h1>Product List</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>{product}</li> // Render each product as a list item
                    ))}
                </ul>
            )}
        </div>
    );
}
