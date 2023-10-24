import React from "react";
import WelcomeButtons from "./WelcomeButtons";
import WelcomeText from "./WelcomeText";
import "../styles/WelcomeScreen.css";
import Logo from "./Logo";



function WelcomeScreen() {
    return (
        <div className="welcome-screen">
            <div className="left-box">
                <WelcomeButtons />
                <Logo />
            </div>
            <div className="right-box">
                <WelcomeText />
            </div>
        </div>

    );

}

export default WelcomeScreen;