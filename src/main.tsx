import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CartProvider } from './components/CartContext.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
    <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </CartProvider>
);
