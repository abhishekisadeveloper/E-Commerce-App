// Your array of route configs. (To centralize the Code)

import Home from "../Pages/Home/Home";
import Men from "../Pages/MenShoppingPage/Men";
import Women from "../Pages/WomenShoppingPage/Women";
import ProductDetails from "../Components/ProductDetails";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mens",
    element: <Men />,
  },
  {
    path: "/womens",
    element: <Women />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />
  }
];
