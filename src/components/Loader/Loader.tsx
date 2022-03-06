import React from "react";
import { LoaderStyle, LoaderImage } from "./Loader.styles";
// @ts-ignore
import logoSVG from "../../assets/Main_logo3D.svg";
// @ts-ignore
import logoPNG from "../../assets/logomark_red_X1.png";

type Props = {
  svg?: boolean;
  width?: string;
};

const Loader: React.FC<Props> = (props) => {
  const { svg, width } = props;

  return (
    <div>
      <LoaderStyle>
        <LoaderImage src={svg ? logoSVG : logoPNG} width={width} />
      </LoaderStyle>
    </div>
  );
};

Loader.defaultProps = {
  svg: false,
  width: "100px",
};

export default Loader;
