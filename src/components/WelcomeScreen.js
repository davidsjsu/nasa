import React from "react";
import WelcomeButtons from "./WelcomeButtons";
import "../styles/WelcomeScreen.css";

function WelcomeScreen() {
    return (
        <div className="welcome-screen">
            <div className="left-box">
                <h1>Welcome</h1>
                <WelcomeButtons />
            </div>
        </div>
    );
}

export default WelcomeScreen;
