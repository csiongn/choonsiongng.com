// File converted from svg to jsx by https://svg2jsx.com/
import React from "react";

interface IconProps {
    fill: string;
}

function Hamburger({fill}: IconProps) {
    return (
        <svg width="25" height="25" viewBox="0 0 20 15" fill={fill}>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
    );
}

export default Hamburger;
