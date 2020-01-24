import React from "react";
import styled, { injectGlobal } from "styled-components";

import { Link } from "gatsby";

import { auth } from "api/firebase";

import AuthUserContext from "./Session/AuthUserContext";
import * as routes from "./../constants/routes";

const Nav = styled.nav`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 145px;

  @media only screen and (max-width: 1200px) {
    display: block;
    text-align: center;
    margin-top: 20px;
  }

  .sign-up {
    background: #f3f3f3;
    color: #438cee;
    transition: all 300ms ease;
    cursor: pointer;
    span {
      background: linear-gradient(to right, #00c6ff, #0072ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 300ms ease;
    }
    small {
      display: none;
    }
  }
`;

const Item = styled.div`
  padding: 10px;
  font-size: 20px;
  color: #333;
  border-radius: 5px;
  display: inline;
  margin-right: 20px;
  font-weight: bold;
  position: relative;
  background-color: transparent;
  z-index: 1;

  small {
    position: absolute;
    top: -8px;
    right: -4px;
    font-size: 12px;
    padding: 4px;
    border-radius: 4px;
    color: #ffffff;
    background: #c54245;
    text-transform: uppercase;
    letter-spacing:0px;

    @media only screen and (max-width: 1024px) {
      top: -4px;
      right: -18px;
      font-size:8px;
    }
  }

  &:hover {
    background: #f3f3f3;
    color: #438cee;
    transition: all 300ms ease;
    cursor: pointer;
    span {
      background: linear-gradient(to right, #00c6ff, #0072ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 300ms ease;
    }
    small {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: inline-block;
    padding: 3px;
    font-size: 15px;
  }
`;

const Right = styled.span`
  position: absolute;
  right: 0;
  @media only screen and (max-width: 1024px) {
    position: relative;
  }
`;

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

// add this back when chat is stable
// <Link to={routes.CHAT}>
//   <Item>Chat &#8250; </Item>
// </Link>

const NavigationAuth = () => (
  <div>
    <Nav>
      <Link to={routes.LANDING}>
        <Item>
          <span>Home</span>
        </Item>
      </Link>
    
      <Right>
        <Link to={routes.ACCOUNT}>
          <Item>
            <span>Account</span>{" "}
          </Item>
        </Link>
      </Right>
    </Nav>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Nav>
    <Link to={routes.LANDING}>
        <Item>
          <span>Home</span>
        </Item>
      </Link>
      <Link to={routes.ABOUT}>
        <Item>
          <span>About</span>
        </Item>
      </Link>
      <Right>
        <Link to={routes.SIGN_IN}>
          <Item>
            <span>Log In</span>
          </Item>
        </Link>
        <Link to={routes.SIGN_UP}>
          <Item className="sign-up">
            <span>Sign Up For Free &#8250;</span>
          </Item>
        </Link>
      </Right>
    </Nav>
  </div>
);

const NavigationComponent = () => <Navigation />;

export default NavigationComponent;
