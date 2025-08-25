import { useEffect, useState } from "react";
import useDebounceTimeout from "./useDebounceTimeout";

const useGetApiData = ({ searchTerm = '', category = '' }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const debounceTimeout = useDebounceTimeout(searchTerm, 500);

  useEffect(() => {
    const shoppingData = async () => {
      try {
        setLoading(true);

        let url;

        if (debounceTimeout) {
          url = `${BASE_URL}/products/search?q=${debounceTimeout}&limit=12`;
        } else if (category) {
          url = `${BASE_URL}/products/category/${category}`;
        } else {
          url = `${BASE_URL}/products/search?q=${debounceTimeout || searchTerm}&limit=12`;
        }


        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products || []);
        setLoading(false);
      } catch (error) {
        setError(`API fetching Error: ${error.message}`);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    shoppingData();
  }, [debounceTimeout, category]);

  return { products, loading, error };
};
export default useGetApiData;
