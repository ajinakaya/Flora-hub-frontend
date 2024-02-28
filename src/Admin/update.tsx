import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import AdminSideBar from './AdminSideBar.tsx';

const UpdatePlant: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [openAdminSideBarToggle, setOpenAdminSideBarToggle] = useState<boolean>(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        plantname: '',
        description: '',
        price: '',
        imageurl: '',
        category: '',
        pot: '',
        height: '',
        tempertaure: '',
        section: 'section1',
    });

    const fetchPlantData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/plant/planting/${id}`);
            const plantData = response.data;

            setFormData({
                plantname: plantData.plantname,
                description: plantData.description,
                price: plantData.price,
                imageurl: plantData.imageurl,
                category: plantData.category,
                pot: plantData.pot,
                height: plantData.height,
                tempertaure: plantData.tempertaure,
                section: plantData.section,
            });
        } catch (error) {
            console.error('Error fetching plant data:', error);
        }
    };

    useEffect(() => {
        fetchPlantData();
    }, [id]);

    const updatePlantData = useMutation({
        mutationKey: 'UPDATE_PLANT',
        mutationFn: async (requestData: any) => {
            await axios.put(`http://localhost:8080/plant/update/${id}`, requestData);
        },
        onSuccess: () => {
            toast.success('Plant details updated successfully!');
            navigate('/planting');
        },
        onError: () => {
            toast.error('Failed to update plant details. Please try again.');
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updatePlantData.mutate(formData);
    };

    const openAdminSideBar = () => {
        setOpenAdminSideBarToggle(!openAdminSideBarToggle);
    };

    return (
        <>
            <div className='slibebar_upload'>
                <AdminSideBar openSidebarToggle={openAdminSideBarToggle} OpenSidebar={openAdminSideBar} />
            </div>
            <div className="main_uploadContainer">
                <div className="wrapperUpload">
                    <div className="form-box_upload">
                        <h2>Upload plantdetails</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox_upload">
                                <label>PlantName</label>
                                <input
                                    type="text"
                                    name="plantname"
                                    value={formData.plantname}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>ImageURL</label>
                                <input
                                    type="text"
                                    name="imageurl"
                                    value={formData.imageurl}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>pot</label>
                                <input
                                    type="text"
                                    name="pot"
                                    value={formData.pot}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>height</label>
                                <input
                                    type="text"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>tempertaure</label>
                                <input
                                    type="text"
                                    name="temperature"
                                    value={formData.tempertaure}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputbox_upload">
                                <select name="section" value={formData.section} onChange={handleChange} required>
                                    <option value="NewArrivals">NewArrivals</option>
                                    <option value="bestseller">bestseller</option>
                                </select>
                            </div>
                            <button type="submit" className="upload-btn">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdatePlant;