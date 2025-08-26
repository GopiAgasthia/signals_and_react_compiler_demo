import Content from "./components/Content";
import Header from "./components/Header";
import "./styles.css";

/**
 * Main App component using signals for state management
 */
export default function App() {
    console.log("App component rendered");

    return (
        <div className="app-container">
            <div className="container">
                <h1>Product Selection App - Signals Implementation</h1>
                <p className="description">
                    This implementation uses @preact/signals-react for state management.
                </p>

                <Header />
                <Content />
            </div>
        </div>
    );
}

