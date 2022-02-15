import styled, { keyframes } from 'styled-components';

export const Screen = styled.div`
  position: fixed;
  background: white;
  display: flex;
  justify-content:center;
  width: 100%;
  height: 100%;
  align-items: center;
  top:0;
  left:0;
  z-index:9999;
`;

const shine = keyframes`
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }
`
export const LoaderStyle = styled.div`
  max-width: 231px;
  margin: 25px 0 25px 25px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  line-height: 50px;
  &:after {
    content:"Loading...";
    color:black;
    width:100%;
  }
  &:before {
    animation: ${shine} 2s ease-in-out infinite;
    animation-fill-mode: forwards;  
    content: "";
    position: absolute;
    top: -110%;
    left: -210%;
    width: 150%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0.0) 100%
    );
  }
`
export const LoaderImage = styled.img`
  width: 160px;
  margin: 0 auto;
  text-align: center;
`
LoaderImage.defaultProps = {
  // src: require("./assets/Main_logo3D.svg")
  src: require("./assets/logomark_red_X1.png")
}
