import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;

`

export const StyledLink = styled(Link)`
  font-weight: 500;
  transition: all 250ms linear;

  &:hover {
    color: #bc8f8f;
  }
`;