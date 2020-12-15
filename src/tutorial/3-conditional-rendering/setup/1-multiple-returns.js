import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const users = await response.json();
  //   console.log(users);
  //   setUser(users);
  // };
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) return res.json();
        else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isloading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;
  return <h1>{user}</h1>;
};

export default MultipleReturns;
