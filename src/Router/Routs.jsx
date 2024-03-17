import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import DuaDAshboard from "../Components/Dua/DuaDAshboard";
import AddDua from "../Components/Dua/AddDua";
import DuaDetails from "../Components/Dua/DuaDetails";
import DuaAll from "../Components/Dua/DuaAll";
import Dummy from "../Components/Dummy";

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
                path:'/messages',
                element:<Dummy/>
            },
            {
                path:'/',
                element:<DuaDAshboard/>,
                children:[
                    {
                        path:'/',
                        element:<DuaAll/>,
                        
                    }
                    ,
                    {
                        path:'/details/:id',
                        element:<DuaDetails/>,
                        loader:({params})=>fetch(`https://dua-server-side-mocha.vercel.app/dua/${params.id}`)
                    }
                ]
            }
        ]
    }
])
export default Routs;