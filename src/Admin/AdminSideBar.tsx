import { FC } from 'react';
import {  BsGrid1X2Fill, BsFillArchiveFill,  BsFillGearFill } from 'react-icons/bs';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { PiPlant } from "react-icons/pi";
import "../css/App.css";

import { NavLink } from 'react-router-dom';

interface AdminSideBarProps {
    openSidebarToggle: boolean;
    OpenSidebar: () => void;
}

const AdminSideBar: FC<AdminSideBarProps> = ({ openSidebarToggle, OpenSidebar }) => {


    return (
        <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <PiPlant  className='icon_header' /> Flora Hub
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>

        </span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <NavLink to="/admin" className="nav-link_admin" >
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink to="/upload-plant" className="nav-link_admin" >
                        <IoCloudUploadOutline className='icon' /> Upload
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink to="/planting" className="nav-link_admin" >
                        <BsFillArchiveFill className='icon' /> Products
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink to="/" className="nav-link_admin">
                        <BsFillGearFill className='icon' /> Logout
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default AdminSideBar;
