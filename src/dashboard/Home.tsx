import React from "react";


import Slider from "../dashboard/slider";
import Bestseller from "./Bestseller.tsx";
import NewArrival from "./NewArrival.tsx";


const Home: React.FC = () => {
    return (
        <>

            <Slider />
            <Bestseller/>
            <NewArrival/>

        </>
    );
};

export default Home;
