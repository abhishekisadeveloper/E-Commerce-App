// Your array of route configs. (To centralize the Code)

import Home from "../Pages/Home/Home";
import Men from "../Pages/MenShoppingPage/Men";
import Women from "../Pages/WomenShoppingPage/Women";
import Unisex from "../Pages/UnisexShoppingPage/Unisex";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
    pathName: "Home",
  },
  {
    path: "/men",
    element: <Men />,
    pathName: "Men",
  },
  {
    path: "/women",
    element: <Women />,
    pathName: "Women",
  },
  {
    path: "/unisex",
    element: <Unisex />,
    pathName: "Unisex",
  }
];
