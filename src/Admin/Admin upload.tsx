import React, { useState } from 'react';
import '../css/Upload.css';
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import AdminSideBar from "./AdminSideBar.tsx";

const Upload: React.FC = () => {
    useNavigate();
    const [openAdminSideBarToggle, setOpenAdminSideBarToggle] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        plantname: '',
        description: '',
        price: '',
        imageurl: '',
        category: '',
        pot: '',
        height: '',
        tempertaure: '',
        section: 'section1'
    });

    const saveData = useMutation({
        mutationKey: "SAVEDATA",
        mutationFn: (requestData: any) => {
            return axios.post("http://localhost:8080/plant/plant", requestData, {});
        },
        onSuccess: () => {
            toast.success("added successfully!");
        },
        onError: () => {
            toast.error("Failed to add . Please try again.");
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveData.mutate(formData);
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
                                    name="tempertaure"
                                    value={formData.tempertaure}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputbox_upload">
                                <select name="section" value={formData.section} onChange={handleChange} required>
                                    <option value="TopDestination">NewArrivals</option>
                                    <option value="MoretoExplore">bestseller</option>
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

export default Upload;