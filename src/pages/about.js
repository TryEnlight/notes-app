import React from "react";
import styled from "styled-components";


const Container = styled.div`
  padding: 3%;
  color: #333;
  a {
    color: #2f80ed;
    border-bottom: 1px solid #d3d3d3;
    transition: all 300ms ease;
  }
  .phrase a:hover {
    opacity: 0.5;
  }
`;

const Landing = () => (
  <div>
    <Container>
      About
    </Container>
  </div>
);

export default Landing;
