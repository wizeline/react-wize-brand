import { Screen, LoaderStyle, LoaderImage } from "./Loader.styles";
import React from "react";
const Loader: React.FC = () => {
    return (
        <div>
            <Screen>
                <LoaderStyle>
                    <LoaderImage />
                </LoaderStyle>
            </Screen>
        </div>
    );
};

export default Loader;
