import ProductListSelector from "./ProductListSelector";
import NewsBar from "./NewsBar";

/**
 * Content component that contains the product selector and news bar
 */
const Content = () => {
    console.log("Content component rendered");


    return (
        <div className="content">
            <ProductListSelector />
            <NewsBar />
        </div>
    );
};

export default Content;

// Made with Bob
