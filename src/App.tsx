
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//import Navbar from './components/navbar.tsx';
import Home from "./dashboard/Home.tsx";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Home />

        },


    ]
)
function App() {


    return (
        <>
            <RouterProvider router={router}/>


        </>
    )
}

export default App
