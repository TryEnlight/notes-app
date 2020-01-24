import React, { Component } from "react";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Landing from "../components/Landing";

import styled from "styled-components";
import { Row, Col } from "react-grid-system";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <Landing />
      </div>
    );
  }
}

export default LandingPage;
