import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface CartItem {
    id: number;
    plantname: string;
    price: number;
    quantity: number;
    imageurl: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    incrementItem: (itemId: number) => void;
    decrementItem: (itemId: number) => void;
    calculateTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = useCallback((item: CartItem) => {
        setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }, []);

    const removeFromCart = useCallback((itemId: number) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    }, []);

    const incrementItem = useCallback((itemId: number) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }, []);

    const decrementItem = useCallback((itemId: number) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    }, []);

    const calculateTotal = useCallback(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);

    const contextValue: CartContextType = {
        cartItems,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        calculateTotal,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
