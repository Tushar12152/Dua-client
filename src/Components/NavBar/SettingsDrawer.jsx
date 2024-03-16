import { IoSettingsOutline } from "react-icons/io5";



const SettingsDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end rounded-l-2xl">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button text-green-400 text-3xl cursor-pointer"><IoSettingsOutline/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default SettingsDrawer;