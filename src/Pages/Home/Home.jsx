import SearchBtn from "../../Components/SearchBtn";
import ShoppingCard from "../../Components/ShoppingCard";
import Footer from "../footer/Footer";
import useGetApiData from "../../Components/customHooks/useGetApiData";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const { products, loading, error } = useGetApiData({
      searchTerm: inputValue,
    category: "mens-shirts",
  });

  return (
    <>
      <div className="max-w-[120rem] m-auto">
        {/* Main content Container */}
        <div className="mx-10 flex flex-col items-start">
          <div className="my-12 flex w-[45%]">
            <SearchBtn inputValue={inputValue} setInputValue={setInputValue} />
          </div>

          <div className="flex justify-between gap-16 w-[100%]">
            {/* Left Section */}
            <div className="w-[] flex flex-col justify-center items-start">
              <h1 className="text-[4rem] tracking-tighter leading-14 uppercase text-[#333333] font-bold mt-10">
                <span className="block">New</span>
                <span className="block">Collection</span>
              </h1>

              <h3 className="text-[1rem] text-[#333333]">
                <span className="block">Summer</span>
                <span className="block">2025</span>
              </h3>

              <div className="mt-44">
                <button className="bg-[#d9d9d9] px-8 py-2 w-[100%] rounded-[0.2rem] mt-6 flex items-center justify-between hover:bg-[#cecece] cursor-pointer">
                  <span className="text-[1.2rem] font-semibold text-[#333333]">
                    Go To Shop
                  </span>
                  <img
                    className="ml-4"
                    src="right-arrow.png"
                    alt=" right arrow"
                  />
                </button>
              </div>
            </div>
            {/* Right Section */}
            <div className="flex gap-10 items-end ">
              <img
                className="w-[45%] border-1 border-[#d3d3d3] object-cover"
                src="/demo-img-1.jpg"
                alt="Home Banner"
              />
              <img
                className="w-[45%] border-1 border-[#d3d3d3] object-cover"
                src="/demo-img-3.png"
                alt="Home Banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] mt-20 max-w-[120rem] m-auto">
        {/* New Arrivals Section */}
        <div className="mx-10">
          <div className="flex flex-col items-center mt-20 w-[100%] text-center justify-center">
            <span className="my-10 text-[3.5rem] font-bold text-[#333333]">
              New Arrivals
            </span>
          </div>

          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : error ? (
            <div className="text-red-500 text-center py-4">{error}</div>
          ) : products.length === 0 ? (
            <div className="text-center text-2xl py-4">
              Sorry, there are no products found.
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-12 py-6">
              {products.map((product) => (
                <ShoppingCard key={product.id} productData={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
