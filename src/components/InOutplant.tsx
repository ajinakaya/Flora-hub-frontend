import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/indoor.css";
import Navbar from "./navbar.tsx";
import { useCart } from './CartContext.tsx';

const InOutplant = () => {
    const [plant, setPlant] = useState<any[]>([]);
    const { category } = useParams<{ category: string }>();
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/plant/category/${category}`);
                console.log('API Response:', response.data);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setPlant(response.data);
                } else {
                    console.error('Invalid response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };

        fetchData();
    }, [category]);

    const handleAddToCart = (plantItem: any) => {
        const cartItem = {
            id: plantItem.id,
            imageurl: plantItem.imageurl,
            plantname: plantItem.plantname,
            price: plantItem.price,
            quantity: 1,
        };

        addToCart(cartItem);
    };

    return (
        <>
            <Navbar />
            <div className="plantcontents"></div>
            <div className="plantView-content">
                <h2 className="plant-name">
                    {category}
                </h2>

                <div className="plantrow">
                    {plant && plant.length > 0 ? (
                        plant.map((plantItem) => (
                            <div key={plantItem.id} className="plant-rows">
                                <Link to={`/planting/${plantItem.id}`} className="plant-item-content">
                                    <div className="plantcategory">
                                        <div className="plant-img">
                                            <img src={plantItem.imageurl} alt={`Cover of ${plantItem.plantname}`} />
                                            <div>
                                                <div className="plant-text">
                                                    <h4 className="plantname">{plantItem.plantname}</h4>
                                                    <p className="plantprice">{'Rs. ' + plantItem.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="plant-actions">
                                    <button
                                        onClick={() => handleAddToCart(plantItem)}
                                        className="addtocart"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No plants available.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default InOutplant;
