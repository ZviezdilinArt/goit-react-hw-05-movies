import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const AdditionalWrapper = styled.div`
margin: 30px 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
  p {
    font-size: 20px;
    font-weight:500;
    padding-left: 10px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border: 1px solid black;
  border-radius: 5px;
  color: #fff;
  background-color: #483d8b;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    background-color: #bc8f8f;
    color: black;
  }
`;