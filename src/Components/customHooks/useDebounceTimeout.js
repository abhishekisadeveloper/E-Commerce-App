import { useEffect, useState } from "react";

const useDebounceTimeout = (search, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(search);
  // console.log("Search here", debouncedValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Clean the search term by removing special characters and trimming whitespace
      const trimmedSearch = search.replace(/[{}=+-_.,><?/':;!@#$%^&*()~`]/g, '');
      const finalSearchTerm = trimmedSearch.trim()
      
      if (finalSearchTerm) {
        setDebouncedValue(finalSearchTerm);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [search, delay]);
  return debouncedValue
};

export default useDebounceTimeout;
