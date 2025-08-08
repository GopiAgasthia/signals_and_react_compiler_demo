import React from "react";
import { useSignal } from "@preact/signals-react";
import { productSignals } from "../store";
import ProductCard from "./ProductCard";

/**
 * Component for selecting products from a list
 */
const ProductListSelector = () => {
    console.log("ProductListSelector component rendered");

    // Use signals for the component
    const products = useSignal(productSignals);

    return (
        <div className="product-section">
            <h2>Available Products</h2>
            <p>Select products from the list below:</p>

            <div className="product-grid">
                {products.value.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductListSelector;

// Made with Bob
