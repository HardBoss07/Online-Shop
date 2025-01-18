"use client";

import React, {JSX, useState} from "react";
import Image from "next/image";
import Link from "next/link";

type DetailLevel = "Low" | "Medium" | "High";

interface ProductData {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    imageURL: string;
}

interface ProductCardGeneratorProps {
    data: ProductData;
    detail: DetailLevel;
}

// The component now uses ProductCardGeneratorProps for the correct types
const ProductCardGenerator: React.FC<ProductCardGeneratorProps> = ({ data, detail }) => {
    // Generate low-detailed view
    const generateLowDetailed = (): JSX.Element => {
        const imageUrl = `${data.imageURL}1.avif`;

        return (
            <Link key={data.id} className="product-card" href={`/products/${data.id}`}>
                <div className="product-image">
                    <Image
                        src={imageUrl}
                        alt={`Image of ${data.name}`}
                        width={100}
                        height={100}
                        style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                </div>
                <p className="product-name">{data.name}</p>
            </Link>
        );
    };


    // Generate medium-detailed view
    const generateMediumDetailed = (): JSX.Element => {
        const imageUrl = `${data.imageURL}1.avif`;

        return (
            <Link key={data.id} className="product-card" href={`/products/${data.id}`} prefetch={false}>
                <h2 className="product-title">{data.name}</h2>
                <div className="image-container">
                    <Image
                        src={imageUrl}
                        alt={`Image of ${data.name}`}
                        width={200}
                        height={200}
                        style={{objectFit: "contain", objectPosition: "center"}}
                    />
                </div>
                <p className="product-price">Price: ${data.price}</p>
                <p className="product-category">Category: {data.category}</p>
                <p className="product-stock">Stock: {data.stock}</p>
            </Link>
        );
    };

    const generateHighDetailed = (): JSX.Element => {
        // Track the current image index
        const [currentImageIndex, setCurrentImageIndex] = useState(1);

        // Array of image suffixes
        const imageSuffixes = ["1.avif", "2.avif", "3.avif"];

        // Get the current image URL
        const imageUrl = `${data.imageURL}${imageSuffixes[currentImageIndex - 1]}`;

        // Function to handle the previous button click
        const showPreviousImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex > 1 ? prevIndex - 1 : 3)); // Loop back to 3 if at the start
        };

        // Function to handle the next button click
        const showNextImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 1)); // Loop back to 1 if at the end
        };

        return (
            <div className="product-card">
                <h1 className="product-title">{data.name}</h1>

                {/* Image Container with buttons */}
                <div className="image-viewer">
                    {/* Previous Button */}
                    <button
                        onClick={showPreviousImage}
                        className="left-button"
                    >
                        &#10094;
                    </button>

                    {/* Image */}
                    <Image
                        src={imageUrl}
                        alt={`Image of ${data.name}`}
                        width={400}
                        height={400}
                        className="image"
                    />

                    {/* Next Button */}
                    <button
                        onClick={showNextImage}
                        className="right-button"
                    >
                        &#10095;
                    </button>
                </div>

                {/* Product Details */}
                <p className="product-price">Price: ${data.price}</p>
                <p className="product-stock">Stock: {data.stock}</p>
                <p className="product-category">Category: {data.category}</p>
            </div>
        );
    };



    // Render content based on detail level
    const renderContent = (): JSX.Element | null => {
        switch (detail) {
            case "Low":
                return generateLowDetailed();
            case "Medium":
                return generateMediumDetailed();
            case "High":
                return generateHighDetailed();
            default:
                return null;
        }
    };

    return <>{renderContent()}</>;
};

export default ProductCardGenerator;
