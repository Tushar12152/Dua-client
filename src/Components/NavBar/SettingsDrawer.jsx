import { IoLanguage, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { PiCirclesFour } from "react-icons/pi";


const SettingsDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end rounded-l-2xl z-10">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    
    <label htmlFor="my-drawer-4" className="drawer-button text-green-400 text-3xl cursor-pointer"><IoSettingsOutline/></label>
  </div> 
  <div className="drawer-side">
   
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
  
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <h1 className="text-center text-3xl py-4">Settings</h1>

      <div className="flex flex-col gap-6">

      <li className="text-center bg-gray-100"> <a> <span className=" rounded-full bg-white  p-5 "> <IoLanguage /> </span> Language Setting</a></li>

      <li className="text-center bg-gray-100"> <a> <span className=" rounded-full bg-white  p-5 "> < MdOutlineDisplaySettings/> </span> Genarel Setting</a></li>

      <li className="text-center bg-gray-100"> <a> <span className=" rounded-full bg-white  p-5 "> <PiCirclesFour /> </span> Font Setting</a></li>

      <li className="text-center bg-gray-100"> <a> <span className=" rounded-full bg-white  p-5 "> <PiCirclesFour /> </span> Apperance Setting</a></li>

      </div>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default SettingsDrawer;