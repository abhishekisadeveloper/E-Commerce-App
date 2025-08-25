import { CiSearch } from "react-icons/ci";

const SearchBtn = ({inputValue, setInputValue}) => {

  return (
    <>
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

        <button className="px-3 py-4 hover:bg-[#cecece] cursor-pointer" 
        
        >
          <CiSearch size={25} />
        </button>
      </div>
    </>
  );
};

export default SearchBtn;
