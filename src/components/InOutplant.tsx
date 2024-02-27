import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/indoor.css";

const InOutplant = () => {
    const [plant, setPlant] = useState<any[]>([]);
    const { category } = useParams<{ category: string }>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/plant/category/${category}`);
                console.log('API Response:', response.data);

                // Check if response.data is an array with at least one element
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



    return (
        <>
            <div className="plantcontents"></div>
            <div className="plantView-content">
                <h2 className="plant-name">
                    {category}
                </h2>

                <div className="plant-row">
                    {plant && plant.length > 0 ? (
                        plant.map((plantItem) => (
                            <Link to={`/booklisting/${plantItem._id}`} key={plantItem._id} className="plant-items">
                                <div className="plant-item-content">
                                    <div className="plantcategory">
                                        <div className="plant-img">
                                            <img src={plantItem.imageurl} alt={`Cover of ${plantItem.plantname}`} />
                                            <div>
                                                <div className="plant-text">
                                                    <h4>{plantItem.plantname}</h4>
                                                    <p>{'Rs. ' + plantItem.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
