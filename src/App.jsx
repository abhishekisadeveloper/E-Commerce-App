import { BrowserRouter } from "react-router";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <BrowserRouter>

        <header className="bg-[#f3f3f3]">
          <nav className="flex max-w-[120rem] mx-auto">
            <Navbar />
          </nav>
        </header>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
