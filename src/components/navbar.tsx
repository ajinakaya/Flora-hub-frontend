
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { BiCartAdd } from "react-icons/bi";

import "../css/navbar.css";

const Navbar  = () => {
    return (
        <header className="main-nav">
            <div className="container flex">
                <div className="logo flex">
                    <h1>
                        <NavLink to="/">
                            FloraHub
                        </NavLink>
                    </h1>
                </div>

                <div className="navlist">
                    <a href="/">Indoorplant </a>
                    <a href="/"> Outdoorplant </a>
                    <a href="/">About Us </a>
                    <a href="/">Contact Us </a>

                </div>

                <div className="searchbar ">
                    <input type="text" placeholder="Search Here..." />
                    <span className="searchicon">
                    <IoSearchOutline />
                     </span>
                </div>

                <div className="nav-links ">
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
