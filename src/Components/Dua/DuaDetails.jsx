import { CiBookmark, CiShare1 } from "react-icons/ci";
import { FaCopy } from "react-icons/fa";
import { MdOutlinePanoramaHorizontalSelect } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const DuaDetails = () => {

    const data= useLoaderData()
    console.log(data);

    return (
        <div>
               <div className="min-w-full bg-white mb-2 rounded-lg">
                          <div className="p-4 flex  items-center">
                             <img src="https://i.ibb.co/MDBTxx6/Screenshot-11.png" alt="" />  
                              <h1 className="text-green-400 font-bold">{}. {data?.title}</h1>
                             
                              </div>



       <p className="p-4 font-bold">{data?.description}</p>


       <h1 className="font-bold text-green-400 p-4">Reference :</h1>

       <p className="px-4 pb-4">{data?.reference}</p>


     <div className="p-4 flex items-center justify-end gap-6 cursor-pointer">
         <span className="text-xl"><FaCopy/></span>
         <span className="text-xl"><CiBookmark/></span>
         <span className="text-xl"><MdOutlinePanoramaHorizontalSelect/></span>
         <span className="text-xl"><CiShare1/></span>
     </div>
  

                     </div>
        </div>
    );
};

export default DuaDetails;