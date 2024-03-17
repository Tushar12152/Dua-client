import { FaSearch } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const DuaDAshboard = () => {
    return (
        <div className="grid grid-cols-12 h-full">
             <div className="col-span-5 w-full md:col-span-3  min-h-screen bg-white rounded-t-xl">

                <h1 className=" py-2 px-32 rounded-t-xl text-lg bg-green-400 text-white ">Categories</h1>

                <div className="form-control relative mt-6 p-5">
                     <button className="absolute top-9 left-10"><FaSearch/></button>

                     <input type="text" placeholder="Search By Dua Name" className="input input-bordered w-24 px-12 md:w-auto" />

               </div>

             </div>
             <div className="col-span-7 md:col-span-9  p-4 md:p-8 "> <Outlet/> </div>
        </div>
    );
};

export default DuaDAshboard;