
import './css/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./dashboard/Home.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/register",
            element: <Register/>
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
