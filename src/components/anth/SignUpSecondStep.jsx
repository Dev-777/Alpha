import React from "react";
import { Link } from "react-router-dom";

const SignUpSecondStep = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: 25, color: "green" }}>
        Thank you for Sign Up. <br />
        We sent the email, when you get the approval email,
        <br /> then you can Sign In
      </span>
      <Link to={"/"}>
        <span>Go to home page</span>
      </Link>
    </div>
  );
};

export default SignUpSecondStep;
