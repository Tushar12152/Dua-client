import { Outlet } from "react-router-dom";
import Nav from "../Components/NavBar/Nav";

const Layout = () => {
    return (
        <div className="bg-gray-100 min-h-screen relative">
            <Nav/>
            <div className="absolute top-32 left-72"><Outlet/></div>
        </div>
    );
};

export default Layout;