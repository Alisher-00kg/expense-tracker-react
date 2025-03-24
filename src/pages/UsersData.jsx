import React, { useEffect, useState } from "react";

export const UsersData = () => {
  const [data, setData] = useState(null);
  const getUsersData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <ul>
      {data && data.users ? (
        data.users.map((item) => <li key={item.id}>{item.firstName}</li>)
      ) : (
        <p>Loading...</p>
      )}
    </ul>
  );
};
