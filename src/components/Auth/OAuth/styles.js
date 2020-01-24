import styled from "styled-components";

export const AuthContainer = styled.div`
  padding: 16px;
  width: 250px;
  margin: 0 auto;
  text-align: center;

 
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  padding: 10px;
  font-size: 24px;
  border: 3px solid #e4e4e4;
  color: #333;
  border-radius: 5px;
  font-weight: bold;
  background-color: #fff;
  height: 50px;
  width: 100%;

  &:hover {
    background: #ffffff;
    border: 3px solid #438cee;
    color: #333;
    transition: all 300ms ease;
    cursor: pointer;
  }

  img {
    height: 20px;
    margin-right: 8px;
  }
`;
