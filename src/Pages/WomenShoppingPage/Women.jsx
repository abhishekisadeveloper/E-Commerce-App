import ShoppingCard from "../../Components/ShoppingCard";
import useGetApiData from "../../Components/customHooks/useGetApiData";
import Footer from "../footer/Footer";
import { useState } from "react";
import SearchBtn from "../../Components/SearchBtn";

const Women = () => {
  const [inputValue, setInputValue] = useState("");
  const { products, loading, error } = useGetApiData({
    category: "womens-bags",
    searchTerm: inputValue,
  });

  return (
    <>
      <div className="max-w-[120rem] m-auto">
        <div className="mx-10">
          <div className="my-12 flex w-[45%]">
            <SearchBtn inputValue={inputValue} setInputValue={setInputValue} />
          </div>
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
              {Array.isArray(products) &&
                products.map((product) => (
                  <ShoppingCard key={product.id} productData={product} />
                ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Women;
