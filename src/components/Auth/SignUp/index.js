import React, { Component } from "react";
import { Link } from "gatsby";

import { auth, db } from "api/firebase";
import * as routes from "constants/routes";

import styled from "styled-components";

import { navigate } from "gatsby";

import SignUpWithGoogle from "../OAuth/Google";
import SignUpWithGithub from "../OAuth/Github";

import { Button, AuthContainer } from "../OAuth/styles";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  created_at: "",
  error: null,
  showForm: false
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.state.created_at = new Date().toString();
  }

  onSubmit = event => {
    const { username, email, passwordOne, created_at } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        let photoURL = "/img/avatar.png";
        db.createUser(authUser.user.uid, username, email, created_at, photoURL)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            navigate(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      showForm
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";

    return (
      <AuthContainer>
        <h1 className="playfair">Sign Up</h1>
        <SignUpWithGoogle />
        <SignUpWithGithub />
        {/* <Button onClick={() => this.setState({ showForm: true })}>Email</Button>
        {showForm && (
          <form onSubmit={this.onSubmit}>
            <input
              value={username}
              onChange={event =>
                this.setState(
                  updateByPropertyName("username", event.target.value)
                )
              }
              type="text"
              placeholder="Full Name"
              className="input"
            />
            <input
              value={email}
              onChange={event =>
                this.setState(updateByPropertyName("email", event.target.value))
              }
              type="text"
              placeholder="Email Address"
              className="input"
            />
            <input
              value={passwordOne}
              onChange={event =>
                this.setState(
                  updateByPropertyName("passwordOne", event.target.value)
                )
              }
              type="password"
              placeholder="Password"
              className="input"
            />
            <input
              value={passwordTwo}
              onChange={event =>
                this.setState(
                  updateByPropertyName("passwordTwo", event.target.value)
                )
              }
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
            <br />
            <Button disabled={isInvalid} type="submit">
              Sign Up
            </Button>

            {error && <p>{error.message}</p>}
          </form>
        )} */}
        <small>
          By signing up to Enlight, you agree to our{" "}
          <Link to="/terms">Terms of Service.</Link>
        </small>{" "}
      </AuthContainer>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpForm;

export { SignUpLink };
