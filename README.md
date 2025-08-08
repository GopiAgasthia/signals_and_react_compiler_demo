# React Signals Demo

This project demonstrates two different approaches to state management in React:

1. Traditional approach using `useState` with prop drilling
2. Modern approach using `@preact/signals-react` for state management

## Project Structure

```
├── src/
│   ├── workspaces/
│   │   ├── useState-implementation/
│   │   │   ├── components/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Content.jsx
│   │   │   │   ├── ProductListSelector.jsx
│   │   │   │   └── NewsBar.jsx
│   │   │   ├── index.jsx
│   │   │   ├── styles.css
│   │   │   └── types.js
│   │   └── signals-implementation/
│   │       ├── components/
│   │       │   ├── Header.jsx
│   │       │   ├── Content.jsx
│   │       │   ├── ProductListSelector.jsx
│   │       │   └── NewsBar.jsx
│   │       ├── index.jsx
│   │       ├── styles.css
│   │       └── store.js
├── workspace-entries/
│   ├── useState-implementation/
│   │   ├── index.html
│   │   └── main.jsx
│   └── signals-implementation/
│       ├── index.html
│       └── main.jsx
├── vite.useState-implementation.config.js
├── vite.signals-implementation.config.js
└── vite.config.js
```

## Key Differences

### useState Implementation

- Uses React's built-in `useState` hook
- Passes state and state updater functions down through props
- Requires prop drilling to share state between components
- Re-renders all components in the tree when state changes

### Signals Implementation

- Uses `@preact/signals-react` for state management
- State is defined outside components and imported where needed
- No prop drilling required
- Only re-renders components that actually use the signals
- More efficient rendering

## Available Scripts

In the project directory, you can run:

### `npm run dev:useState`

Runs the useState implementation in development mode.\
Open [http://localhost:5273](http://localhost:5273) to view it in your browser.

### `npm run dev:signals`

Runs the signals implementation in development mode.\
Open [http://localhost:5274](http://localhost:5274) to view it in your browser.

### `npm run dev:all`

Runs both implementations simultaneously.

## How to Observe the Difference

1. Open both implementations in separate browser tabs
2. Open the browser console
3. Select and deselect products in both implementations
4. Notice the console logs showing which components re-render
5. In the useState implementation, all components re-render when state changes
6. In the signals implementation, only components that use the signals re-render

## How to observe the difference using react compiler.

1. Open both implementations in separate browser tabs
2. Open the browser console
3. Select and deselect products in both implementations
4. Notice the console logs showing which components re-render
5. Uncomment the babel plugin in vite.useState-implementation.config.js
6. Notice the console logs showing which components re-render
