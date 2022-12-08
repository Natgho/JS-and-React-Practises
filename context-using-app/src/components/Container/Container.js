import React from 'react';

import './style.modules.css'
import {useTheme} from "../../context/ThemeContext";
import Button from "../Button";
import Profile from "../Profile";

function Container() {
    const {theme} = useTheme()
    return (
        <div className={`${theme}`}>
            <Button/>
            <hr/>
            <Profile/>
        </div>
    );
}

export default Container;