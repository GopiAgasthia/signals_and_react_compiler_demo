import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <h2>Workspace 1 App</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
                <p>
                    Edit <code>src/workspaces/workspace1/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    );
}

export default App;

// Made with Bob
