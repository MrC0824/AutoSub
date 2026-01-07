import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// Import local CSS. 
// This ensures the Electron app (which skips the CDN) has styles.
// In Web mode, this works alongside the CDN (Vite handles the import).
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);