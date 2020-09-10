
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton, TransitionPresets } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HEADER } from './src/components/constants/colorConstants';
import HomeScreen from './src/screens/Home';
import Settings from './src/screens/Settings';
import { MyTheme } from './src/components/constants/Themes';
import ThemeScreen from './src/screens/ThemeScreen';
import { ThemeContext, themes } from './src/context/Theme'
import { deviceHeight } from './src/components/helpers';


const Loading = createStackNavigator();
const Auth = createStackNavigator();
const Main = createStackNavigator();
const Root = createStackNavigator();

function LoadingStack() {
  return (
    <Loading.Navigator headerMode="none">
      <Loading.Screen name="Splash" component={Splash} />
    </Loading.Navigator>
  );
}

function AuthStack() {
  return (
    <Auth.Navigator headerMode="screen" >
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
  );
}

// ...TransitionPresets.SlideFromRightIOS,
let commonOptions = {
  headerStyle: { backgroundColor: MyTheme.headerColor ,  height: 55 },
  headerTintColor: MyTheme.headerTint,
  headerTitleStyle: { fontWeight: "bold", fontSize: MyTheme.headerfontSize },
  headerTitleAlign:"center",
  // headerLeftContainerStyle:{backgroundColor:"red"},
  // headerTitleContainerStyle:{backgroundColor:"green" },
  // headerRightContainerStyle:{backgroundColor:"blue"},
}

function AppStack() {
  return (
    // <Main.Navigator initialRouteName="Home" headerMode="screen" screenOptions={} >
    <Main.Navigator initialRouteName="Home" headerMode="screen" screenOptions={{ ...commonOptions ,...TransitionPresets.SlideFromRightIOS, }} >
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Settings" component={Settings} />
      <Main.Screen name="Theme" component={ThemeScreen} />
    </Main.Navigator>
  );
}

function App() {
  const [theme, setTheme] = useState(themes.light)
  const toggleTheme = (name) => {
    setTheme(name == "light" ? {...themes.light} : {...themes.dark});
  }
  const state = { "theme": theme, "toggleTheme": toggleTheme }

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={state}>
        <NavigationContainer>
          <Root.Navigator initialRouteName="App" headerMode="none">
            <Root.Screen name="Splash" component={LoadingStack} />
            <Root.Screen name="Auth" component={AuthStack} />
            <Root.Screen name="App" component={AppStack} />
          </Root.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </SafeAreaProvider>
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

export default App;



// function CustomHeader() {
//   return (
//     <>
//       <SafeAreaView>
//         <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: 'center' }}>
//           <Text style={{ textAlign: "center" }}>AppHeader</Text>
//         </View>
//       </SafeAreaView>
//     </>
//   )
// }
// let screenOptions = { headerStyle: { backgroundColor: HEADER }}
// screenOptions={{...screenOptions}}
// options={{ title: 'My home123' }} 
// let options = {
//   backgroundColor: "red",
//   title:"asd",
//   headerTitleStyle: {
//     backgroundColor:"red",
//   },
//   headerStyle: {
//     backgroundColor: "purple",
//     height: 100,
//   },
//   headerTintColor: "grey",
// }
// options={{...options}}
