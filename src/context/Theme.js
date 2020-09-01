import React from 'react';

export const themes = {
    light: {
        foreground: 'red',
        background: 'white',
    },
    dark: {
        foreground: 'orange',
        background: 'grey',
    },
};


// export const setTheme(theme)=>{

// }



export const ThemeContext = React.createContext({ "theme": {}, "toggleTheme": ()=>{} });