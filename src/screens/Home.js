
import React, { useLayoutEffect, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { ThemeContext } from '../context/Theme';
import Header from '../components/common/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }, props) => {
  const themeContext = useContext(ThemeContext)
  const { theme, toggleTheme } = themeContext;
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <Header  {...props} heading="Home Screen"
          left={{ name: "menu", type: "Entypo" }}
          right={{ name: "ios-home-outline", type: "Ionicons" }}
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
        <Text style={styles.screen}>HomeScreen</Text>
        <Button title="Go to Theme" color={theme.colors.notification} onPress={() => navigation.navigate('Theme')} />
        <TouchableOpacity style={{ paddingHorizontal:50, backgroundColor: theme.colors.btnColor }} onPress={() => { toggleTheme("dark") }}>
          <Text style={{ color: "white", fontSize: 22 }}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 50,backgroundColor: theme.colors.btnColor }} onPress={() => { toggleTheme("light") }}>
          <Text style={{  color: "white", fontSize: 22 }}>Light</Text>
        </TouchableOpacity>
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



    // headerTitle: "Navigation App",
      // headerLeft: () => (<CustomHeaderButton name="menu" type="Feather" size={25} onPress={() => { alert('left') }} />),
      // headerRight: () => (<CustomHeaderButton name="add" type="Ionicons" size={35} onPress={() => { alert('right') }} />),
