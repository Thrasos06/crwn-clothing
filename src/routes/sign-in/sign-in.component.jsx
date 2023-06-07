import React from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>sign-in.component</div>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
