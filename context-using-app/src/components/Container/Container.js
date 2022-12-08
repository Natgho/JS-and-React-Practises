import React, {useContext} from 'react';

import './style.modules.css'
import ThemeContext from "../../context/ThemeContext";
import Button from "../Button";

function Container(props) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme}`}>
            <Button/>
        </div>
    );
}

export default Container;