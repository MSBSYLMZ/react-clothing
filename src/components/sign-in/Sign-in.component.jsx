import React, { Component, useState } from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/Custom-button.component";
import FormInput from "../form-input/Form-input.component";

// import { auth ,signInWithGoogle } from "../../firebase/firebase.utils";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import "./Sign-in.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: "", password: "" })
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email,password)

    // try {
    //   await auth.signInWithEmailAndPassword(email, password)
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error)
    // }
  };

 const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: ()=> dispatch(googleSignInStart()),
  emailSignInStart: (email, password)=> dispatch(emailSignInStart({ email, password }))
})

export default connect(null,mapDispatchToProps)(SignIn);
