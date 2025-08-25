import { Sling as Hamburger } from "hamburger-react";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { routesConfig } from "../../routes/routesConfig";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex w-full mx-10 py-4 justify-between items-center">
      <div className="flex items-center gap-14">
        <Link to="/">
          <img
            className="w-8 h-8 cursor-pointer"
            src="/app-logo.png"
            alt="App logo here"
          />
        </Link>
        <ul className="flex gap-6 text-[1.2rem] font-[500]">
          {routesConfig.map(({ pathName, path }, index) => (
            <li className="hover:underline" key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline text-red-950" : ""
                }
                to={path}
              >
                {pathName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6">
        <div className="p-3 bg-[#333333] cursor-pointer rounded-full">
          <GrFavorite color="white" size={18} />
        </div>
        <div className="p-3 bg-[#333333] cursor-pointer rounded-full">
          <BiSolidShoppingBagAlt color="white" size={18} />
        </div>
        <div className="p-3 bg-[#333333] cursor-pointer rounded-full">
          <BiSolidUser color="white" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
