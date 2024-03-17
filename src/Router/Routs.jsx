import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import DuaDAshboard from "../Components/Dua/DuaDAshboard";
import AddDua from "../Components/Dua/AddDua";

const Routs = createBrowserRouter([


    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:'/addDua',
                element:<AddDua/>
            },
            {
                path:'/',
                element:<DuaDAshboard/>,
                children:[
                    {
                        
                    }
                ]
            }
        ]
    }
])
export default Routs;