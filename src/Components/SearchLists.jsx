import { NavLink } from "react-router";
import useGetApiData from "./customHooks/useGetApiData";
const SearchLists = ({ inputValue, setInputValue }) => {
  const { products, error, loading } = useGetApiData({
    searchTerm: inputValue,
  });
  // If no input value and (inputValue === ""), do not render the search list
  if (!inputValue && inputValue === "") return null;

  return (
    <div>
      <div className="flex flex-col rounded-[0.5rem] bg-gray-200 w-[100%] h-[70vh] absolute overflow-auto scroll-auto gap-4 rounded-b-[0.2rem] px-4 py-2 mt-1">
        <h4 className="text-2xl font-bold ">PRODUCTS</h4>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => {
            return (
              <NavLink>
                <div className="flex gap-4 hover:bg-[#D9D9D9] rounded-[0.5rem] items-center mt-2">
                  <img
                    className="w-20"
                    src={product?.thumbnail}
                    alt="search imgs"
                  />
                  <span className="text-[1.5rem]">the lists</span>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchLists;
