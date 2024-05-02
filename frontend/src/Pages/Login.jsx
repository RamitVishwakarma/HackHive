import React from "react";
import LoginCard from "../LoginCard/LoginCard";
import HeadingSection from "../HeadingSection/HeadingSection";

const Login = () => {
  return (
    <div className="min-h-screen overflow-hidden h-screen bg-custom-background bg-no-repeat bg-bottom bg-right">
      <HeadingSection title={"Join the Amazing Hackathon Community"} />
      <LoginCard />
    </div>
  );
};

export default Login;
