import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { BiCartAdd } from "react-icons/bi";
import "../css/navbar.css";

const Navbar: React.FC = () => {
    return (
        <header className="main-nav">
            <div className="container flex">
                <div className="logo flex">
                    <h1>
                        <NavLink to="/">
                            <img src="src/image/flora.png" alt="FloraHub" />
                        </NavLink>
                    </h1>
                </div>

                <div className="searchbar flex">
                    <input type="text" placeholder="Search Here..." />
                    <button>
                        <IoSearchOutline />
                    </button>
                </div>

                <div className="nav-links flex">
                    <NavLink to="/account" className="nav-link">
                        <LuUser />
                    </NavLink>

                    <NavLink to="/cart" className="nav-link">
                        <BiCartAdd />
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
