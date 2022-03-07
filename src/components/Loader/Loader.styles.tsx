import styled from "styled-components";

export const LoaderStyle = styled.div`
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
`;

export const LoaderImage = styled.img`
  width: ${(props) => props.width || "100px"};
  margin: 0 auto;
`;
