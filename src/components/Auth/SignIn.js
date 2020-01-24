import React, { Component } from "react";
import { navigate, Link } from "gatsby";

import { auth } from "api/firebase";
import * as routes from "constants/routes";

import SignInWithGoogle from "./OAuth/Google";
import SignInWithGithub from "./OAuth/Github";
import { Button, AuthContainer } from "./OAuth/styles";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  showForm: false
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        navigate(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error, showForm } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <AuthContainer>
        <h1 className="playfair">Login</h1> 
        <SignInWithGoogle />
        <SignInWithGithub />
        <small>
          By signing in to Enlight, you agree to our{" "}
          <Link to="/terms">Terms of Service.</Link>
        </small>{" "}
      </AuthContainer>
    );
  }
}

export default SignInForm;
