import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './dashboard/Home';
import Login from './components/Login';
import Register from './components/Register';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InOutplant from "./components/InOutplant.tsx";
import Plantdetails from "./components/plantdetails.tsx";
import AboutUs from "./components/AboutUs.tsx";
import ContactSupport from "./components/ContactSupport.tsx";
import Admin from "./Admin/Admin.tsx";
import Product from "./Admin/Product.tsx";
import AdminUpload from "./Admin/Admin upload.tsx";
import UpdatePlant from "./Admin/update.tsx";


const queryClient = new QueryClient();

function App() {
    return (

        <QueryClientProvider client={queryClient}>

            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category/:category" element={<InOutplant />} />
                    <Route path="/planting/:id" element={<Plantdetails/>} />
                    <Route path="/AboutUs" element={<AboutUs/>} />
                    <Route path="/contact" element={<ContactSupport/>} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/planting" element={<Product/>} />
                    <Route path="/upload-plant" element={<AdminUpload/>} />
                    <Route path="/update/:id" element={<UpdatePlant/>} />
                </Routes>
            </Router>
            <ToastContainer position='top-left' autoClose={700} />

        </QueryClientProvider>
    );
}

export default App;
