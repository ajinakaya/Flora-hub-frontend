import  { useState, useEffect } from 'react';
import axios from 'axios';
import Plantcard from "../components/plantcard.tsx";

const NewArrivals = () => {
    const [plant, setNewArrivals] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/plant/section/NewArrivals");
                setNewArrivals(response.data || null);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Plantcard plant={plant} headline="NewArrivals" />
        </div>
    );
};

export default  NewArrivals
    ;
