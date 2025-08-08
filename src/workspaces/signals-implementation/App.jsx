import React, { useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState({
        name: 'Workspace 2',
        items: ['Item 1', 'Item 2', 'Item 3']
    });

    const addItem = () => {
        setData({
            ...data,
            items: [...data.items, `Item ${data.items.length + 1}`]
        });
    };

    return (
        <div className="app">
            <h2>{data.name} App</h2>
            <div className="card">
                <button onClick={addItem}>
                    Add Item
                </button>
                <ul className="items-list">
                    {data.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>
                    Edit <code>src/workspaces/workspace2/App.jsx</code> and save to test HMR
                </p>
            </div>
        </div>
    );
}

export default App;

// Made with Bob
