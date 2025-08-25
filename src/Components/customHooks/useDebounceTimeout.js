import { useEffect, useState } from "react";

const useDebounceTimeout = (search, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(search);
  // console.log("Search here", debouncedValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => clearTimeout(timeout);
  }, [search, delay]);
  return debouncedValue
};

export default useDebounceTimeout;
