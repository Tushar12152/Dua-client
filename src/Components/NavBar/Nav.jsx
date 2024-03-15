import { NavLink } from "react-router-dom";
import NavRight from "./NavRifgt";
import { CiHome } from "react-icons/ci";
import { PiCirclesFour } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";




const Nav = () => {
    return (
        <div className="flex gap-2 w-[98%] mx-auto">
            <div className="w-[10%]">
                <div className="bg-white min-h-screen rounded-l-3xl">
                     <div className="pt-8">
                     <img className="mx-auto  rounded-xl" src="https://i.ibb.co/jrBr24P/Screenshot-9.png" alt="" />
                     </div>


                     <div className=" mt-20 flex flex-col gap-6 overflow-y-scroll overflow-hidden">

                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <CiHome />
                     </div> 
                     </NavLink>


                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <PiCirclesFour />
                     </div> 
                     </NavLink>


                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <FaRegLightbulb />
                     </div> 
                     </NavLink>



                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <CiBookmark />
                     </div> 
                     </NavLink>


                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <CiHome />
                     </div> 
                     </NavLink>


                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <FiMessageCircle />
                     </div> 
                     </NavLink>



                     <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "active" :""}>
                         <div className="flex justify-center items-center text-xl bg-gray-100 p-4 w-[40%] mx-auto rounded-full hover:scale-90 
                transition">
                     <IoBookOutline />
                     </div> 
                     </NavLink>

                     </div>


                </div>
            </div>
            <div className="w-[90%]">
                 <NavRight/>
            </div>
        </div>
    );
};

export default Nav;