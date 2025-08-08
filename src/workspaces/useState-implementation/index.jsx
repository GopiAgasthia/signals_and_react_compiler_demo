import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./styles.css";

/**
 * Main App component using useState for state management
 */
export default function App() {
    // State for selected products
    const [selectedProductList, setSelectedProductList] = useState([]);

    return (
        <div className="app-container">
            <div className="container">
                <h1>Product Selection App - useState Implementation</h1>
                <p className="description">
                    This implementation uses React's useState hook with prop drilling for state management.
                </p>

                <Header selectedProductList={selectedProductList} />

                <Content
                    selectedProductList={selectedProductList}
                    setSelectedProductList={setSelectedProductList}
                />
            </div>
        </div>
    );
}

// Made with Bob
