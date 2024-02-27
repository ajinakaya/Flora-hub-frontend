import './css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './dashboard/Home';
import Login from './components/Login';
import Register from './components/Register';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar.tsx";
import InOutplant from "./components/InOutplant.tsx";




const queryClient = new QueryClient();

function App() {
    return (

        <QueryClientProvider client={queryClient}>

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category/:category" element={<InOutplant />} />
                </Routes>
            </Router>
            <ToastContainer position='top-left' autoClose={700} />

        </QueryClientProvider>
    );
}

export default App;
