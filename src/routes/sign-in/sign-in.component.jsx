import React from "react";
import "./sign-in.styles.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form";

const SignIn = () => {
  return (
    <div className="authentication-page">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
