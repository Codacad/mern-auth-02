import React from "react";
import { useGetUsersQuery } from "../state/slices/userApi";
const Home = () => {
  const response = useGetUsersQuery();
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
