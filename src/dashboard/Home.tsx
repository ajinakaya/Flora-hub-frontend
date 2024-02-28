import React from "react";


import Slider from "../dashboard/slider";
import Bestseller from "./Bestseller.tsx";
import NewArrival from "./NewArrival.tsx";
import Navbar from "../components/navbar.tsx";


const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Bestseller/>
            <NewArrival/>

        </>
    );
};

export default Home;
