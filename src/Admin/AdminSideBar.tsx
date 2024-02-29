import { FC } from 'react';

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
                        Dashboard
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink to="/upload-plant" className="nav-link_admin" >
                       Upload
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink to="/planting" className="nav-link_admin" >
                        Products
                    </NavLink>
                </li>

                <li className='sidebar-list-item'>
                    <NavLink to="/" className="nav-link_admin">
                        Logout
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default AdminSideBar;
