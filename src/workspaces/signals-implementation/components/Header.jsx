import { selectedCount } from "../store";
import { useSignal } from "@preact/signals-react";

/**
 * Header component that displays the number of selected products
 */
const Header = () => {
    console.log("Header component rendered");

    const selectedCountSignal = useSignal(selectedCount);

    return (
        <div className="header">
            <div className="header-title">Product Selection</div>
            <div className="badge">
                Selected Products: {selectedCountSignal.value}
            </div>
        </div>
    );
};

export default Header;

// Made with Bob
