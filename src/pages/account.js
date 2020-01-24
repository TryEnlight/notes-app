import React, { Component } from "react";

import styled from "styled-components";

import { auth } from "api/firebase";
import { fetchUserDataByUid } from "api/db";
import { doSignOut } from "api/auth";

import AuthUserContext from "../components/Session/AuthUserContext";
import withAuthorization from "../components/Session/withAuthorization";

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  padding: 24px;
  display: flex;
  flex-direction: column;

  button {
    margin: 16px 0px;
  }
`;

const Account = styled.div`
  align-self: center;
`;

class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let uid = auth.currentUser.uid;
  }

  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <Container>
              <Account>
                <h1>Hello  </h1>
                {/* use fetchUserDataByUid() to get user data and display their name!  */}
                <button onClick={() => doSignOut()}>Sign Out</button>
              </Account>
            </Container>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
