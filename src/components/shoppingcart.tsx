import  { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../css/ShoppingCart.css";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const ShoppingCart = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="Shoppingcontainer">
                <h2>Your Shopping Cart</h2>


                <div className="header-row">
                    <p className="productname">Product</p>
                    <p className="shoppingQuantity">Quantity</p>
                    <p className="Shoppingtotal">Total</p>
                </div>


                <div className="shopping-wrapper">
                    {cart.map((book) => (
                        <div key={book._id} className="cart-item">
                            <div className="shopping book-image">
                                <img src={book.imageURL} alt=" " className="shoppingbookimage__img" />
                            </div>

                            <div className="shoppingbook-info">
                                <h2 className="shoppingbook-title">{book.bookTitle}</h2>
                                <p className="shoppingbook-price"> Rs {book.price}</p>


                                <div className="QuantityPrice">
                                    <div className="Quantity">
                <span className="Addsub" onClick={() => handleDecrement(book._id)}>
                  <FaMinus />
                </span>

                                        <h6 className="QuantityText"> {book.quantity}</h6>
                                        <span className="Addsub" onClick={() => handleIncrement(book._id)}>
                  <FaPlus />
                </span>

                                    </div>
                                </div>

                                <p className="shoppingtotal"> Rs {book.price * book.quantity}</p>
                                <MdDeleteOutline onClick={() => handleRemoveFromCart(book._id)} className="delete-icon" />

                            </div>
                        </div>

                    ))}
                </div>
                <div className="total-section">
                    <p className="estimatedtotal">Estimated total : Rs {totalPrice}</p>

                        Checkout
                  
                </div>


        </>

    );
};

export default ShoppingCart;


