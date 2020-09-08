import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { MyTheme } from '../components/constants/Themes';
import { themes, ThemeContext } from '../context/Theme';

const Settings = ({ navigation }, props) => {
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext;
  console.log("SettingContext", themeContext)
  useLayoutEffect(() => {
    navigation.setOptions({
    }
    );
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={MyTheme.headerColor} />
      <View style={{ ...styles.container, backgroundColor: themes.background }}>
        <Button title="Go to Theme" onPress={() => navigation.navigate('Theme')} />
        <Button title="Toggle Theme" color={theme.foreground} onPress={() => { toggleTheme() }} />
        <Text style={styles.screen}>SettingsScreen</Text>
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

export default Settings;