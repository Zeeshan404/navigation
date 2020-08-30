
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HEADER, WHITE } from './src/components/constants/colorConstants';
import HomeScreen from './src/screens/Home';
import { MyTheme } from './src/components/constants/Themes';
// import { Icon } from 'react-native-vector-icons/icon';



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
//   title:"Custom Header",
//   headerTitleStyle: {
//     backgroundColor:"red",
//   },
//   headerStyle: {
//     backgroundColor: MyTheme.headerColor,
//     height: 200,
//   },
//   headerTintColor: MyTheme.colors.text,
// }
// options={{...options}}


function AppStack() {
  return (
    <Main.Navigator headerMode="screen">
      <Main.Screen name="Home" component={HomeScreen} />
    </Main.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <Root.Navigator initialRouteName="App" headerMode="none">
          <Root.Screen name="Splash" component={LoadingStack} />
          <Root.Screen name="Auth" component={AuthStack} />
          <Root.Screen name="App" component={AppStack} />
        </Root.Navigator>
      </NavigationContainer>
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
