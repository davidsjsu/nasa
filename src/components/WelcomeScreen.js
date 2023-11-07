import React, { useState } from "react";
import WelcomeButtons from "./WelcomeButtons";
import WelcomeText from "./WelcomeText";
import Logo from "./Logo";
import "../styles/WelcomeScreen.css";

function WelcomeScreen() {
    const [isXmlParsed, setIsXmlParsed] = useState(false);

    const handleWelcomeButtonsClick = () => {
        setIsXmlParsed(true);
    };

    return (
        <div className="welcome-screen">
            <div className="left-box">
                <h1>Welcome</h1>
                <WelcomeButtons handleWelcomeButtonsClick={handleWelcomeButtonsClick} />
                {!isXmlParsed && <Logo />}
            </div>
            <div className="right-box">
                {!isXmlParsed && <WelcomeText />}
            </div>
        </div>
    );
}

export default WelcomeScreen;
