import React from "react";
import Helmet from "react-helmet";

import withAuthentication from "../components/Session/withAuthentication";
import { auth } from "api/firebase";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/index.css";

const Enlight = ({ children }) => {

  return (
    <div>
      <Helmet
        title="Notes App Demo"
        meta={[
          {
            name: "description",
            content:
              "desc"
          },

        ]}
      />
      <div className="app container">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default withAuthentication(Enlight);
