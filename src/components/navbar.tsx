
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import "../css/navbar.css";
import { useCart } from './CartContext.tsx';

const Navbar = () => {
    const { cartItems } = useCart();
    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <header className="container">
            <div className="logo">
                <h1>
                    <NavLink to="/">
                        FloraHub
                    </NavLink>
                </h1>
            </div>

            <div className="navlist">
                <NavLink to="/category/Indoor" className="active-link">
                    Indoorplant
                </NavLink>
                <NavLink to="/category/Outdoor" className="active-link">
                    Outdoorplant
                </NavLink>
                <NavLink to="/AboutUs" className="active-link">
                    About Us
                </NavLink>
                <NavLink to="/contact" className="active-link">
                    Contact Us
                </NavLink>
            </div>

            <div className="searchbar ">
                <input type="text" placeholder="Search Here..." />
                <span className="searchicon">
                    <IoSearchOutline />
                </span>
            </div>

            <div className="nav-links ">
                <NavLink to="/login" className="nav-link">
                    <LuUser />
                </NavLink>

                <NavLink to="/cart" className="nav-link">
                    <IoCartOutline />
                    {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
