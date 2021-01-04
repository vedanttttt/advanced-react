import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  console.log(products);

  return { loading, products };
};

//if we will simply add getProducts to dependancy array without using useCallback ,we will get an infinite loop bcoz then getProducts will get created each and everytime , now we only create the new function only once the url changes and as a result we are not getting the infinite loop
