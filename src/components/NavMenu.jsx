import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col p-4 text-2xl  text-white   space-y-20">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/Department">Department</NavLink>
        <NavLink to="/Productpage">Products</NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
