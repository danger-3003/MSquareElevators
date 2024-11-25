import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Specification from "./Pages/Specifications";

const Structure =()=>{
    return(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

const router =createBrowserRouter([
    {
        path:"/",
        element:<Structure />,
        children:[
            {
                path:"/",
                element:<App />
            },
            {
                path:"/specifications",
                element:<Specification />
            }
        ]
    }
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
