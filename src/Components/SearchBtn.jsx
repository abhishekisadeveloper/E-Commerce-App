import { CiSearch } from "react-icons/ci";
import SearchLists from "./SearchLists";
import { useState } from "react";

const SearchBtn = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="flex flex-col relative w-[100%]">
        <div className="bg-[#D9D9D9] w-[100%] rounded-[0.2rem] flex items-start justify-between">
          <input
            className="p-4 w-[90%] outline-none"
            type="text"
            name="search"
            id="search"
            value={inputValue}
            placeholder="Search..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="px-3 py-4 hover:bg-[#cecece] cursor-pointer">
            <CiSearch size={25} />
          </button>
        </div>
        <SearchLists inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    </>
  );
};

export default SearchBtn;
