import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { useCart } from './CartContext.tsx';
import '../css/shoppingcart.css';
import Navbar from "./navbar.tsx";
import {useNavigate} from "react-router-dom";
const ShoppingCart = () => {
    const { cartItems, removeFromCart, incrementItem, decrementItem, calculateTotal } = useCart();
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotalPrice(calculateTotal());
    }, [cartItems, calculateTotal]);

    const handleRemoveFromCart = (itemId: number) => {
        removeFromCart(itemId);
    };

    const handleIncrement = (itemId: number) => {
        incrementItem(itemId);
    };

    const handleDecrement = (itemId: number) => {
        decrementItem(itemId);
    };
    const handleCheckout = () => {

        navigate('/checkout');
    };

    return (
        <>
            <Navbar />
            <div className="Shoppingcontainer">
                <h2 className= "title">Shopping Cart</h2>

                <div className="header-row">
                    <p className="productname">Product</p>
                    <p className="Quantity">Quantity</p>
                    <p className="total">Total</p>
                </div>

                <div className="shopping-wrapper">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="shopping plant-image">
                                <img src={item.imageurl} alt="" className="shoppingplantimage__img" />
                            </div>

                            <div className="shoppingbook-info">
                                <h2 className="shoppingbook-title">{item.plantname}</h2>
                                <p className="shoppingbook-price">Rs {item.price}</p>

                                <div className="QuantityPrice">
                                    <div className="Quantity">
                                        <span className="Addsub" onClick={() => handleDecrement(item.id)}>
                                            <FaMinus />
                                        </span>
                                        <h6 className="QuantityText">{item.quantity}</h6>
                                        <span className="Addsub" onClick={() => handleIncrement(item.id)}>
                                            <FaPlus />
                                        </span>
                                    </div>
                                </div>

                                <p className="shoppingtotal">Rs {item.price * item.quantity}</p>
                                <div className="deleteiconcart">
                                    <MdDeleteOutline
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="delete-icon"
                                />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total-section">
                    <p className="estimatedtotal">Estimated total: Rs {totalPrice}</p>
                    <button className="checkout-button" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
