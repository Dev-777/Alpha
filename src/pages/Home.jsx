import React from "react";
import AlphaButton from "../components/ui/AlphaButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to={"signIn"}>
        <AlphaButton label={"Sign In"} color={"primary"} />
      </Link>
    </>
  );
};

export default Home;
