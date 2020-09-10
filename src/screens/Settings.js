import React, { useLayoutEffect, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { ThemeContext } from '../context/Theme';
import  Header  from '../components/common/Header';

const Settings = ({ navigation }, props) => {
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext;
  // console.log("SettingContext", themeContext)
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <Header  {...props} 
        heading="Setting Screen" 
        left={{name:"infocirlceo", type:"AntDesign"}}
        right={{ name: "settings", type: "Ionicons" }}
        leftPress={()=>{alert('LeftPressed')}}
        rightPress={()=>{alert('rightPressed')}}
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
        <Button title="Go to Theme" color={theme.colors.notification}  onPress={() => navigation.navigate('Theme')} />
        <Button title="Set Dark Theme" color={theme.colors.btnColor} onPress={() => { toggleTheme("dark") }} />
        <Button title="Set Light Theme" color={theme.colors.btnColor} onPress={() => { toggleTheme("light") }} />
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