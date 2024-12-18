import React, {JSX} from "react";
import Image from "next/image";

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
            <div key={data.id} className="product-card">
                <div className="product-image">
                    <Image
                        src={imageUrl}
                        alt={`Image of ${data.name}`}
                        width={100}
                        height={100}
                        className="rounded"
                    />
                </div>
                <p className="product-name">{data.name}</p>
            </div>
        );
    };

    // Generate medium-detailed view
    const generateMediumDetailed = (): JSX.Element => {
        const imageUrl = `${data.imageURL}1.avif`;

        return (
            <div key={data.id} className="product-card">
                <h2 className="product-title">{data.name}</h2>
                <div className="image-container">
                    {/* Display the first image for each product */}
                    <Image
                        src={imageUrl}
                        alt={`Image of ${data.name}`}
                        width={200}
                        height={200}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <p className="product-price">Price: ${data.price}</p>
                <p className="product-category">Category: {data.category}</p>
                <p className="product-stock">Stock: {data.stock}</p>
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
            default:
                return null;
        }
    };

    return <>{renderContent()}</>;
};

export default ProductCardGenerator;
