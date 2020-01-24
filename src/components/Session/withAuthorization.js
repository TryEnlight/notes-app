import React from "react";
import { navigate } from "gatsby";

import AuthUserContext from "../Session/AuthUserContext";
import { auth } from "api/firebase";
import { setPresence } from "api/db";
import * as routes from "../../constants/routes";

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      if (typeof window !== "undefined") {
        auth.onAuthStateChanged(authUser => {
          if (!condition(authUser)) {
            navigate(routes.SIGN_IN);
          } 
        });
      }
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <Component {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
