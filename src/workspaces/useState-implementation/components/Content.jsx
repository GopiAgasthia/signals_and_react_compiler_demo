import React from "react";
import ProductListSelector from "./ProductListSelector";
import NewsBar from "./NewsBar";

/**
 * Content component that contains the product selector and news bar
 * @param {Object} props - Component props
 * @param {Array} props.selectedProductList - List of selected products
 * @param {Function} props.setSelectedProductList - Function to update selected products
 */
const Content = ({ selectedProductList, setSelectedProductList }) => {
    console.log("Content component rendered");
    return (
        <div className="content">
            <ProductListSelector
                selectedProductList={selectedProductList}
                setSelectedProductList={setSelectedProductList}
            />
            <NewsBar />
        </div>
    );
};

export default Content;

// Made with Bob
