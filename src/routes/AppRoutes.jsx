import { Route, Routes } from "react-router";
import { routesConfig } from "./routesConfig";

// Responsible for Generate Routes for our app Dynamically.
const AppRoutes = () => {
  return (
    <Routes>
      {routesConfig.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
