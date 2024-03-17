import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/axiosPublic";
import { FaCopy } from "react-icons/fa";
import { CiBookmark, CiShare1 } from "react-icons/ci";
import { MdOutlinePanoramaHorizontalSelect } from "react-icons/md";

const DuaAll = () => {

    const axiosPublic=useAxiosPublic()
    const { data:dua=[] } = useQuery({
        queryKey: ['AllDua'],
        queryFn: async () =>{
            const res=await axiosPublic.get(`/dua`)
    
            return res.data
        }})

    return (
        <div className="">
            {
                dua.map((item,i)=> <div  key={item?._id}>
                     
                     <div className="min-w-full bg-white mb-2 rounded-lg">
                          <div className="p-4 flex  items-center">
                             <img src="https://i.ibb.co/MDBTxx6/Screenshot-11.png" alt="" />  
                              <h1 className="text-green-400 font-bold">{i+1}. {item?.title}</h1>
                             
                              </div>



       <p className="p-4 font-bold">{item?.description}</p>


       <h1 className="font-bold text-green-400 p-4">Reference :</h1>

       <p className="px-4 pb-4">{item?.reference}</p>


     <div className="p-4 flex items-center justify-end gap-6 cursor-pointer">
         <span className="text-xl"><FaCopy/></span>
         <span className="text-xl"><CiBookmark/></span>
         <span className="text-xl"><MdOutlinePanoramaHorizontalSelect/></span>
         <span className="text-xl"><CiShare1/></span>
     </div>
  

                     </div>

                </div>)
            }
        </div>
    );
};

export default DuaAll;