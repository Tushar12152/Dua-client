import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import {  NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../../Hooks/axiosPublic";

const DuaDAshboard = () => {
   const axiosPublic=useAxiosPublic()
    const { data:dua=[] } = useQuery({
        queryKey: ['dua'],
        queryFn: async () =>{
            const res=await axiosPublic.get(`/dua`)
    
            return res.data
        }})

        console.log(dua);


    return (
        <div className="lg:grid grid-cols-12 gap-2 h-full fixed">
             <div className=" w-full lg:col-span-3 hidden lg:block  overflow-y-auto bg-white rounded-t-xl">

                <div>
                    <h1 className=" py-2 px-32 rounded-t-xl text-lg bg-green-400 text-white ">Categories</h1>

                <div className="form-control relative mt-6 p-5">
                     <button className="absolute top-9 left-10"><FaSearch/></button>

                     <input type="text" placeholder="Search By Categories" className="input input-bordered w-24 px-12 md:w-auto" />

               </div>
                </div>

               <div className="   ">
                 <div className="flex flex-col gap-6 overflow-y-auto p-4" >
                     {dua.map(item => (
                       <NavLink className={({ isActive, isPending }) =>   isPending ? "pending" : isActive ? " text-green-400" :""} to={`details/${item?._id}`} key={item._id}>{item?.title}</NavLink>
                   ))}
                 </div>
            </div>
                

             </div>
             <div className=" lg:col-span-9  p-4 lg:p-8 lg:overflow-auto "> <Outlet/> </div>
        </div>
    );
};

export default DuaDAshboard;