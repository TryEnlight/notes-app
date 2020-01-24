import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Footer = styled.footer`
  padding: 64px;
  margin: 64px 0px;
`;

class FooterComponent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Footer>
        <br />
        <div>
          <br /> <br />© Notes by Enlight 2020 by Enlight Contributor {" "}
          <a href="https://ozzie.makersite.co/">Osman Ahmed</a> <br />
          <small>
            <Link to="/">Terms of Service</Link> |{" "}
            <Link to="/">Privacy Policy</Link>
          </small>
        </div>
      </Footer>
    );
  }
}

export default FooterComponent;
