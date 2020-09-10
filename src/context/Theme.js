import React from 'react';

export const themes = {
    light: {
        foreground: 'black',
        background: 'white',
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'rgb(242, 242, 242)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
            btnColor: "rgba(200,160,221,1)"

          },
          headerColor: 'rgba(200,160,221,1)',
          headerTint: 'rgb(255,255,255)',
          white: 'rgb(255,255,255)',
          blackground: 'rgb(0,0,0)',
          headerfontSize: 23
    },
    dark: {
        foreground: 'white',
        background: 'grey',
        colors: {
            primary: 'rgba(230, 184, 0,0.5)',
            background: 'rgb(242, 242, 242)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(26, 255, 26)',
            btnColor: "rgb(77, 0, 0,0.5)"
          },
          headerColor: 'rgba(200,160,221,1)',
          headerTint: 'rgb(255,255,255)',
          white: 'rgb(255,255,255)',
          blackground: 'rgb(0,0,0)',
          headerfontSize: 23
    },
};


export const ThemeContext = React.createContext(
    
);