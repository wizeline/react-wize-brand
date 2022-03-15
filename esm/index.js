import React from 'react';
import styled from 'styled-components';

const LoaderStyle = styled.div `
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
`;
const LoaderImage = styled.img `
  width: ${(props) => props.width || "100px"};
  margin: 0 auto;
`;

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 175.69 118.58'%3e%3cdefs%3e%3cstyle%3e.cls-1%7bfill:url(%23linear-gradient)%3b%7d.cls-2%7bfill:%23e93d44%3b%7d%3c/style%3e%3clinearGradient id='linear-gradient' x1='192.61' y1='215.13' x2='116.69' y2='6.55' gradientUnits='userSpaceOnUse'%3e%3cstop offset='0.55' stop-color='%23e93d44'/%3e%3cstop offset='1' stop-color='%23701d21'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg id='Layer_2' data-name='Layer 2'%3e%3cg id='Layer_1-2' data-name='Layer 1'%3e%3cpath class='cls-1' d='M166.11%2c0H137a13.12%2c13.12%2c0%2c0%2c0-11.73%2c7.25l-3%2c5.93A4.07%2c4.07%2c0%2c0%2c1%2c126%2c19.07L89.37%2c92.23%2c98%2c109.49a16.27%2c16.27%2c0%2c0%2c0%2c12.69%2c9%2c16%2c16%2c0%2c0%2c0%2c16-8.74l47.94-95.89A9.58%2c9.58%2c0%2c0%2c0%2c166.11%2c0Z'/%3e%3cpath class='cls-2' d='M115.72%2c0H99.47A16.36%2c16.36%2c0%2c0%2c0%2c84.85%2c9L66.3%2c46.13a3.67%2c3.67%2c0%2c0%2c1-6.57%2c0l-15-29.92a5.46%2c5.46%2c0%2c0%2c0-4.9-3H4.65A4.64%2c4.64%2c0%2c0%2c0%2c.5%2c19.9l44.92%2c89.85a16%2c16%2c0%2c0%2c0%2c28.6%2c0l48.29-96.57%2c3-5.93A13.12%2c13.12%2c0%2c0%2c1%2c137%2c0Z'/%3e%3cpath class='cls-2' d='M136.48%2c114.7h-1v-.37H138v.37h-1v3h-.44Z'/%3e%3cpath class='cls-2' d='M141.14%2c116.21c0-.47%2c0-1%2c0-1.45h0c-.12.39-.26.81-.42%2c1.27l-.6%2c1.63h-.32l-.55-1.6c-.15-.47-.29-.9-.38-1.3h0c0%2c.42%2c0%2c1-.07%2c1.48l-.09%2c1.44h-.41l.23-3.35H139l.57%2c1.62a11.31%2c11.31%2c0%2c0%2c1%2c.33%2c1.13h0a10.77%2c10.77%2c0%2c0%2c1%2c.35-1.13l.6-1.62h.55l.21%2c3.35h-.42Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABGCAYAAADRsYpqAAAACXBIWXMAAAsSAAALEgHS3X78AAAEDUlEQVR4nOXd0U3bUBTG8T9eoAxQqWSCwnMjQTeADWCC0gnabgATQCYoTFAq+b0g9d2wAQzQUF16DCl2II7vObnn+pPyYgeb+PMvtpXEd+3+/p4cMx2NN4BdYAdYj/wSr4HfQFjH20jLPwuPoiqv6wnZlTMdjTeBI2C7MbN/boB9Kf2TwvLvgMOiKk/JrZzpaLwvxbxpzOyfCfAFOAfeK7+Uj0VVXhSNyU4jxZwoFXNVVGVY/meDYkLykSPHl0ulYkK25LjyozFHL1u5yDlVLGZSVGUo/mtjjm7W3cuZjsY7ynv0SM7KLNXwcNxpTPIXzT16Iqe21mpCbtf+bHzYkHNsrQPdjZwenjXm9IyRmnCs+dWYo5ufRVXuFPJ+rXkG8g74LtcfsWOh5rYxRz8Pr6tQulhry1HLtKUjajT/938baOaK3ShBzQVSzp3RSrdlg8aKhZo6N41n6OXxdRWx9+hXEmWDWqnh6eL2XeMZOnlUw0w53vRYqrE8U/tvXUVRlbee9AxFDSIHZ3oGoYa6HC96hqSGGTk40TMYNcyWk7qeoanhmRwS1zMoNTwvJ1U9Q1RDixwS1TM4NbSVk5qeoaqhrRxJSnpeLK9nklXDvHJS0TNkNcwrR5KCntbSIiVpNbxUzqr1DF0NL5UjsdYTNlLYWOGjYc0dI3k1vFbOCvScTEfjS/kusuZH58mrYQE5GOtBStH6Dhpe1LBIOSvQox0XalhQDivQoxU3ali0nIz0uFFDBzlkoMeVGrqUk4EeV2roKAfHetypoWs5jvW4U8MScnCox6UalinHoR6XalhSDo70uFXDsuU40uNWDT3k4ECPazX0KceBHtdq6CmHhPW4V0PfchLW414NEeSQoJ4s1BCjnAT1ZKGGSHJISE82aohVTkJ6slFDRDkkoCcrNcQsJwE9WakhshxWqCc7NcQuZ4V6slODghxWoCdLNWiU4+2+Bj2iqgYlORjqea4Gw7LU16NSjqGexgaS2/5q30hIXQ2KcjDQ06amTqO0yDHRqVaOgZ65G0hZj4kalOWgqOclNXXmltczZicgquUo6nn9x646eszUYCAHBT2LqKkTey83PW1XL0dBz+I/24urx1QNRnKIqKeLmjqx9nbzi12TciLq6f4DpDh6zNVgKCdspLBhrxozFs9xj9sI7zamdMthz79fKqZjGciNvy+W+EHuRIZI6bPuegiXrjmoBxtqWd5OfVPwoiqjF2g6loGMprHZUdBx32J4envb63DsC8/baytmZnnXMgKVxihUtuUgdzgvqjIUdPDKseBcRmCKtkfKeAobMorUvJLC9G/heQuMv3AqY+tsNeZEyMqHaJGBiTblcSuDFF3KSYT2usPbUlh/eAQFYccxP/C3BvgLqKxXtzM1aCgAAAAASUVORK5CYII=";

const Loader = (props) => {
    const { svg, width } = props;
    return (React.createElement("div", null,
        React.createElement(LoaderStyle, null,
            React.createElement(LoaderImage, { src: svg ? img$1 : img, width: width }))));
};
Loader.defaultProps = {
    svg: false,
    width: "100px",
};

export { Loader };
//# sourceMappingURL=index.js.map
