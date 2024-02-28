import { useEffect, useState } from "react";
import axios from 'axios';
import "../css/product.css";
import AdminSideBar from "./AdminSideBar.tsx";
import { Link } from "react-router-dom";


const Product = () => {
    const [plant, setPlant] = useState<any[]>([]);
    const [openAdminSideBarToggle, setOpenAdminSideBarToggle] = useState<boolean>(false);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/plant/getAll`);
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
    }, []);

    const openAdminSideBar = () => {
        setOpenAdminSideBarToggle(!openAdminSideBarToggle);
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/plant/deleteById/${id}`);
            setPlant(prevPlant => prevPlant.filter(plantItem => plantItem.id !== id));
        } catch (error) {
            console.error('Error deleting plant:', error);
        }
    };




    return (
        <>
            <AdminSideBar openSidebarToggle={openAdminSideBarToggle} OpenSidebar={openAdminSideBar} />
            <div className="Admincontents"></div>
            <div className="AdminView-content">
                <h2 className="Admin-name">
                    Plant List
                </h2>

                <div className="Adminrow">
                    {plant && plant.length > 0 ? (
                        plant.map((plantItem) => (
                           <div key={plantItem.id} className="Admin-rows">
                                <div className="Admin-item-content">
                                    <div className="Admincategory">
                                        <div className="Admin-img">
                                            <img src={plantItem.imageurl} alt={`Cover of ${plantItem.plantname}`} />
                                            <div>
                                                <div className="Admin-text">
                                                    <h4 className="Adminname">{plantItem.plantname}</h4>
                                                    <p className="Adminprice">{'Rs. ' + plantItem.price}</p>
                                                    <div className="Admin-buttons">
                                                        <button onClick={() => handleDelete(plantItem.id)}>Delete</button>
                                                        <Link to={`/update/${plantItem.id}`}>
                                                            <button>Edit</button>
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Product;
