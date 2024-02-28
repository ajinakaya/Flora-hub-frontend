import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaTemperatureEmpty } from "react-icons/fa6";
import { MdHeight } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import "../css/plantdetail.css";
import Navbar from "./navbar.tsx";


const Plantdetails = () => {
    const { id } = useParams<{ id: string }>();
    const [plant, setPlant] = useState<any | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    console.error('ID is undefined');
                    return;
                }

                const response = await axios.get(`http://localhost:8080/plant/planting/${id}`);
                setPlant(response.data || null);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!plant) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className='main-plant-details-container'>
                <div className="plant-detail-container">
                    <div className="book-details-wrapper">
                        <div className="plant-top-section">
                            <img src={plant.imageurl} alt={plant.plantName} className="plantdetails-img " />
                            <div className="plantdetail-info">
                                <h2 className="plantdetailsname">{plant.plantname}</h2>
                                <p className="plantdetailsprice">Price: {plant.price}</p>
                                <p className="plantdetailscategory"> {plant.category}</p>
                                <p className="plantdetailsdes"> {plant.description}</p>
                                <p className="plantdetailspot"><PiPottedPlantFill className="detailsicon" /> {plant.pot} inch </p>
                                <p className="plantdetailsheight"><MdHeight  className="detailsicon"/> {plant.height} Feet</p>
                                <p className="plantdetailstem"><FaTemperatureEmpty className="detailsicon"/> {plant.tempertaure} ℃</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plantdetails;
