
import React, { useContext } from 'react';
import { StyleSheet, Button, View, Text ,StatusBar } from 'react-native';
import { ThemeContext } from '../context/Theme';
import { MyTheme } from '../components/constants/Themes';

const ThemeScreen = ({ navigation }, props) => {
    const themeContext = useContext(ThemeContext)
    const {theme,toggleTheme} = themeContext;
    console.log("ThemeContext", themeContext)
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={MyTheme.headerColor} />

            <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <Text style={styles.screen}>ThemeScreen</Text>
                <Button title="I am Button" color={theme.foreground} onPress={() => { toggleTheme() }} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    screen: {
        fontSize: 30,
        color: "black"
    }
});

export default ThemeScreen;