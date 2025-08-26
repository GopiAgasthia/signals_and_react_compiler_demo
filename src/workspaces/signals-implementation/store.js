import { signal, computed } from "@preact/signals-react";

/**
 * List of product signals with individual selected signals
 */
export const productSignals = [
    { id: 1, name: "Laptop", selected: signal(false) },
    { id: 2, name: "Smartphone", selected: signal(false) },
    { id: 3, name: "Headphones", selected: signal(false) },
    { id: 4, name: "Monitor", selected: signal(false) },
    { id: 5, name: "Keyboard", selected: signal(false) },
    { id: 6, name: "Mouse", selected: signal(false) },
    { id: 7, name: "Tablet", selected: signal(false) },
    { id: 8, name: "Speakers", selected: signal(false) }
];

/**
 * List of available products (non-signal version)
 */
export const productList = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Monitor" },
    { id: 5, name: "Keyboard" },
    { id: 6, name: "Mouse" },
    { id: 7, name: "Tablet" },
    { id: 8, name: "Speakers" }
];

/**
 * Signal for selected products
 */
export const selectedProductList = signal([]);

/**
 * Computed signal for the count of selected products
 * This now counts products where the selected signal is true
 */
export const selectedCount = computed(() => {
    return productSignals.filter(product => product.selected.value).length;
});

/**
 * Check if a product is already selected
 * @param {number} productId - The product ID to check
 * @returns {boolean} True if the product is selected
 */
export const isProductSelected = (productId) => {
    return selectedProductList.value.some((product) => product.id === productId);
};

/**
 * Add a product to the selected list
 * @param {Object} product - The product to add
 */
export const addProduct = (product) => {
    selectedProductList.value = [...selectedProductList.value, product];
};

/**
 * Remove a product from the selected list
 * @param {number} productId - The ID of the product to remove
 */
export const removeProduct = (productId) => {
    selectedProductList.value = selectedProductList.value.filter(
        (item) => item.id !== productId
    );
};

/**
 * Toggle product selection
 * @param {Object} product - The product to toggle
 */
export const toggleProduct = (product) => {
    if (isProductSelected(product.id)) {
        removeProduct(product.id);
    } else {
        addProduct(product);
    }
};

