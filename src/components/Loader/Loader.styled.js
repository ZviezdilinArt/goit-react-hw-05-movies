import styled from "@emotion/styled";

export const Backdrop = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color: rgba(36,36,36, 0.5);
`

export const WrapperForLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
transform: translate(-50%,-50%)
`;