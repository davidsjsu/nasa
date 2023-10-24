import React from "react";
import "../styles/Logo.css";
import logoImage from "../images/nasa-ames.png";

function Logo() {
    return (
        <div className="logo">
            <img src={logoImage} alt="logo" />
        </div>
    );
}
export default Logo;