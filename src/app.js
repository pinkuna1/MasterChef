import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter,  RouterProvider,Outlet} from "react-router-dom";

const Grocery= lazy(()=>import("./components/Grocery.js"));
const AppLayout = () => {
    return (
        <div className="apps">
            <Header />
            <Outlet/>
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:(
                    <Suspense fallback={<h1>Loadding..</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }

        ],
        
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

