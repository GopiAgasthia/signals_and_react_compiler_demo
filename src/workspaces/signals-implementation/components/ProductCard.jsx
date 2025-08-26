import { useSignal } from "@preact/signals-react";
import { productSignals } from "../store";
import { useState } from "react";

/**
 * Component for a single product card
 * @param {Object} props - Component props
 * @param {Object} props.product - The product object with a selected signal
 */
const ProductCard = ({ product }) => {
    const clicked = useState(true);
    const products = useSignal(productSignals);


    return (
        <div
            className={`product-card ${products.value[product.id - 1].selected.value ? "selected" : ""}`}
        >
            <div className="product-name">{product.name}</div>
            <button
                className={products.value[product.id - 1].selected.value ? "remove-btn" : "select-btn"}
                onClick={() => {
                    clicked[1](!clicked[0])
                    products.value[product.id - 1].selected.value = !products.value[product.id - 1].selected.value;

                }}
            >
                {products.value[product.id - 1].selected.value ? "Remove" : "Select"}
            </button>
        </div>
    );
};

export default ProductCard;
