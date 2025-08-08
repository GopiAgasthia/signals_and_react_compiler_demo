import React from "react";

/**
 * Header component that displays the number of selected products
 * @param {Object} props - Component props
 * @param {Array} props.selectedProductList - List of selected products
 */
const Header = ({ selectedProductList }) => {
    // Count of selected products
    console.log("Header component rendered");
    const selectedCount = selectedProductList.length;

    return (
        <div className="header">
            <div className="header-title">Product Selection</div>
            <div className="badge">
                Selected Products: {selectedCount}
            </div>
        </div>
    );
};

export default Header;

// Made with Bob
