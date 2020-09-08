
import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { MyTheme } from '../components/constants/Themes';
import { ThemeContext } from '../context/Theme';
import { CustomHeaderButton } from '../components/common/HeaderConstants';

const HomeScreen = ({ navigation }, props) => {
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext;
  console.log("HomeContext", themeContext)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Navigation App",
      headerLeft: () => (<CustomHeaderButton name="menu" type="Feather" size={25} onPress={() => { alert('left') }} />),
      headerRight: () => (<CustomHeaderButton name="add" type="Ionicons" size={35} onPress={() => { alert('right') }} />),
    }
    );
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={MyTheme.headerColor} />
      <View style={{ ...styles.container, backgroundColor: theme.background }}>
        <Text style={styles.screen}>HomeScreen</Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Toggle Theme" color={theme.foreground} onPress={() => { toggleTheme() }} />
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
  }
});
export default HomeScreen;
