import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Row, Col } from "react-grid-system";

const Phrase = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  color: #191919;
  margin: 0 auto;
  max-width: 100%;
  margin-top: 20px;
  line-height: 1.5;

  a {
    color: #191919;
    border-bottom: 1px dotted #d3d3d3;
    transition: all 300ms ease;
  }
  a:hover {
    color: #438cee;
    opacity: 1;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const JoinLine = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #191919;
  margin: 0 auto;
  max-width: 100%;
`;

const Tagline = styled.h1`
  font-size: 48px;
  margin: 0 auto;
`;

const Container = styled.div`
  padding: 24px;
  background: #f8f9fa;

  @media only screen and (min-width: 1024px) {
    padding: 64px;
  }

  span {
    background-color: #d1f0fd;
    margin: 16px 0px;
    padding: 4px;
    border-radius: 8px;
    font-weight: bold;
    display: inline-block;
    transition: all 300ms ease;
  }

  small {
    background-color: #d1f0fd;
    margin: 16px 4px;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    display: inline-block;
    transition: all 300ms ease;
  }
`;

const Button = styled.button`
  font-size: 24px;
  padding: 10px;
  margin-top: 16px;
  color: #191919;
  border-radius: 4px;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 300ms ease;
  border: 5px solid #191919;
  &:hover {
    color: #438cee;
    border: 5px solid #438cee;
  }
`;

const Message = styled.p`
  line-height: 1.5;
  font-size: 25px;
`;

const Landing = () => (
    <Container>
      <Tagline>Notes</Tagline>
      <Phrase>
        Welcome to the
        minimal and fast note taking platform.
      </Phrase>
      <br />
      <JoinLine>Join [userCount] note-takers and start writing today!</JoinLine>
      <Link to="/home">
        <Button>Start Writing For Free</Button>
      </Link>
      <br />
      <br />
      <small>&#10004;&nbsp;Minimal design</small>
      <small>&#10004;&nbsp;Lots of themes </small>
      <small>&#10004;&nbsp;Unlimited notes</small>
    </Container>
  );

export default Landing;
