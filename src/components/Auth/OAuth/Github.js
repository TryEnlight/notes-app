import React, { Component } from "react";

import { createUser } from "api/db";
import { doSignInWithGithub } from "api/auth";

import { HOME } from "constants/routes";
import { navigate } from "gatsby";

import Button from "./OAuthButton";

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  created_at: "",
  error: null
};

class SignInWithGithub extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.state.created_at = new Date().toString();
  }

  githubLogin = event => {
    const { username, email, created_at } = this.state;

    const { history } = this.props;

    doSignInWithGithub()
      .then(result => {
        const user = result.user;
        let photoURL = user.photoURL;
        if (photoURL === undefined) {
          photoURL = "/img/avatar.png";
        }
        createUser(user.uid, user.displayName, user.email, created_at, photoURL)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            navigate(HOME);
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
    return (
      <Button onClick={this.githubLogin}>
        <img src="/img/auth/github.png" /> Github
      </Button>
    );
  }
}

export default SignInWithGithub;
