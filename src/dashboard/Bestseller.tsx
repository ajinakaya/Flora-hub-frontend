import  { useState, useEffect } from 'react';
import axios from 'axios';
import Plantcard from "../components/Plantcard.tsx";

const Bestsellers = () => {
    const [plant, setBestsellers] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/plant/section/bestseller");
                setBestsellers(response.data || null);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Plantcard plant={plant} headline="Best Seller" />
        </div>
    );
};

export default Bestsellers;
