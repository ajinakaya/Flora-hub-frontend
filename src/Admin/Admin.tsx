import AdminSideBar from "./AdminSideBar.tsx";
// import AdminSales from "./AdminSales";
import { useState } from 'react';

const App: React.FC = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState<boolean>(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className="grid-container">
            <AdminSideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            {/*<AdminSales />*/}
        </div>
    );
};

export default App;
