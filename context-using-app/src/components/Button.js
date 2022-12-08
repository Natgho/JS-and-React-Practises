import React, {useContext} from 'react';
import ThemeContext from "../context/ThemeContext";

function Button(props) {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div>Button theme: {theme}
            <br/>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>change theme</button>
        </div>
    );
}

export default Button;