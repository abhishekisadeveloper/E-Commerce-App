import { useEffect, useState } from "react";

const useDebounceTimeout = (search, delay = 500) => {
  const [debounceTimeout, setDebounceTimeout] = useState(search);
  console.log("Search here", debounceTimeout);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceTimeout(search);
    }, delay);

    return () => clearTimeout(timeout);
  }, [search, delay]);
  return debounceTimeout
};

export default useDebounceTimeout;
