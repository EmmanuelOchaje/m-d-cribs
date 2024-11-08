import React from "react";
import SignInForm from "../components/Login/SignInForm";
import SigninImage from "../components/Login/SigninImage";

const Login = (props) => {
  return (
    <div className="px-8 flex h-screen">
      <SignInForm />
      <SigninImage />
    </div>
  );
};

export default Login;
