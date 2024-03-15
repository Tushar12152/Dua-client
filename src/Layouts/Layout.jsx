import { Outlet } from "react-router-dom";
import Nav from "../Components/NavBar/Nav";

const Layout = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Layout;