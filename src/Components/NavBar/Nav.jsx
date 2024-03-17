import { NavLink } from "react-router-dom";
import NavRight from "./NavRifgt";
import { CiHome } from "react-icons/ci";
import { PiCirclesFour } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";



const Nav = () => {
    return (
        <div className="flex w-full  top-0">
            <div className="w-1/6 hidden lg:block h-screen bg-white min-h-screen rounded-l-3xl overflow-y-auto">
                <div className="pt-8">
                    <img className="mx-auto rounded-xl" src="https://i.ibb.co/jrBr24P/Screenshot-9.png" alt="" />
                </div>
                <div className="mt-20 flex flex-col gap-6">
                    <NavLink to="/"  className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <CiHome />
                        </div>
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <PiCirclesFour />
                        </div>
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <FaRegLightbulb />
                        </div>
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <CiBookmark />
                        </div>
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <RiMedicineBottleFill />
                        </div>
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <FiMessageCircle />
                        </div>
                    </NavLink>
                    <NavLink to="/addDua" className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? "border-l-8 rounded-full border-green-400" :""}>
                        <div className="flex justify-center items-center text-xl bg-gray-100 p-4 mx-auto rounded-full hover:scale-90 transition">
                            <IoBookOutline />
                        </div>
                    </NavLink>
                </div>

                <div className="py-20">
                    <img className="mx-auto rounded-xl" src="https://i.ibb.co/bRTL0BM/Screenshot-10.png" alt="" />
                </div>
            </div>
            <div className="w-5/6">
                <NavRight />
            </div>
        </div>
    );
};

export default Nav;
