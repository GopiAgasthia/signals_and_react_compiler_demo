import React from "react";
import { productList } from "../types";

/**
 * Component for selecting products from a list
 * @param {Object} props - Component props
 * @param {Array} props.selectedProductList - List of selected products
 * @param {Function} props.setSelectedProductList - Function to update selected products
 */
const ProductListSelector = ({ selectedProductList, setSelectedProductList }) => {
    /**
     * Check if a product is already selected
     * @param {number} productId - The product ID to check
     * @returns {boolean} True if the product is selected
     */
    const isProductSelected = (productId) => {
        return selectedProductList.some((product) => product.id === productId);
    };
    console.log("Product list component rendered");

    /**
     * Toggle product selection
     * @param {Object} product - The product to toggle
     */
    const toggleProductSelection = (product) => {
        if (isProductSelected(product.id)) {
            // Remove product if already selected
            setSelectedProductList(
                selectedProductList.filter((item) => item.id !== product.id)
            );
        } else {
            // Add product if not selected
            setSelectedProductList([...selectedProductList, product]);
        }
    };

    return (
        <div className="product-section">
            <h2>Available Products</h2>
            <p>Select products from the list below:</p>

            <div className="product-grid">
                {productList.map((product) => {
                    const selected = isProductSelected(product.id);

                    return (
                        <div
                            key={product.id}
                            className={`product-card ${selected ? "selected" : ""}`}
                        >
                            <div className="product-name">{product.name}</div>
                            <button
                                className={selected ? "remove-btn" : "select-btn"}
                                onClick={() => toggleProductSelection(product)}
                            >
                                {selected ? "Remove" : "Select"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductListSelector;

// Made with Bob
