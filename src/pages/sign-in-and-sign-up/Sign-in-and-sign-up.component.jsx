import React from "react";

import SignIn from "../../components/sign-in/Sign-in.component";
import SignUp from "../../components/sign-up/Sign-up.component";

import './Sign-in-and-sign-up.styles.scss'

const SignInAndSıgnUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn/>
      <SignUp/>
    </div>
  );
};

export default SignInAndSıgnUpPage;
