import { FaSearch } from "react-icons/fa";
import SettingsDrawer from "./SettingsDrawer";

const NavRight = () => {
    return (
        <div>
            <div className="navbar bg-gray-100">
  <div className="flex-1">
    <a className=" text-xl ml-[52px]">Duas Page</a>
  </div>
  <div className="flex-none gap-24">

    <div className="form-control relative">
      <input type="text" placeholder="Search By Dua Name" className="input input-bordered w-24 md:w-auto" />

      <button className="btn btn-ghost absolute top-0 right-0"><FaSearch/></button>
    </div>


    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/x7YdVCz/download.png" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>


  </div>

    <div className="ml-12"><SettingsDrawer/></div>

</div>
        </div>
    );
};

export default NavRight;