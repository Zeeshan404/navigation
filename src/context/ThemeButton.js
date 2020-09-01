import React from 'react';
import { Button } from 'react-native';
import { ThemeContext } from './Theme';

class ThemedButton extends React.Component {
    // static contextType = ThemeContext
    constructor(props) {
        super(props)
    }
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <Button
                title="Theme Button"
                color={theme.background}
            />
        );
    }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;