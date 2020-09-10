
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Button, View, Text, StatusBar } from 'react-native';
import { ThemeContext } from '../context/Theme';
import Header from '../components/common/Header';

const ThemeScreen = ({ navigation }, props) => {
    const themeContext = useContext(ThemeContext)
    const { theme, toggleTheme } = themeContext;
    useLayoutEffect(() => {
        navigation.setOptions({
            header: (props) => (
                <Header  {...props}
                    heading="Theme Screen"
                    left={{ name: "infocirlceo", type: "AntDesign" }}
                    right={{ name: "settings", type: "Ionicons" }}
                    leftPress={() => { alert('LeftPressed') }}
                    rightPress={() => { alert('rightPressed') }}
                />
            )
        }
        );
    }, [navigation]);
    useEffect(() => { }, [themeContext])

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
            <View style={{ ...styles.container, backgroundColor: theme.background }}>
                <Text style={styles.screen}>ThemeScreen</Text>
                <Button title="Go to Settings" color={theme.colors.notification} onPress={() => navigation.navigate('Settings')} />
                <Button title="Set Dark Theme" color={theme.colors.btnColor} onPress={() => { toggleTheme("dark") }} />
                <Button title="Set Light Theme" color={theme.colors.btnColor} onPress={() => { toggleTheme("light") }} />
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