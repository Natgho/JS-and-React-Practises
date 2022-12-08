import React from 'react';
import {useTheme} from "../context/ThemeContext";

function Button() {
    const {theme, setTheme} = useTheme();
    return (
        <div>Button theme: {theme}
            <br/>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>change theme</button>
        </div>
    );
}

export default Button;