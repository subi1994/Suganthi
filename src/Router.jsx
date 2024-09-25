import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";


import Portfolio from "./Pages/Portfolio";
import DogList from "./Pages/DogList";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
       
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/Home",
                element: <Home />,
        
              },
            {
                path: "/about",
                element: <About />,
            },
            
            {
                path: "/Prices",
                element: <Prices />,

            },
            {
                path: "/Contact",
                element: <Contact />,

            },

            {
                path: "/DogList",
                element: <DogList />,

            },

            // {
            // path:"*",
            // element:<NotFound />,
            // },
        ],
    },
]);

const Router = () => < RouterProvider router={router} />;


export default Router;




