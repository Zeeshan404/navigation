
import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HEADER, WHITE } from './src/components/constants/colorConstants';
import HomeScreen from './src/screens/Home';
import Settings from './src/screens/Settings';
import { MyTheme } from './src/components/constants/Themes';
import Icon from 'react-native-vector-icons/Ionicons'
import { HEADERFONTSIZE } from './src/components/helpers';



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


let commonOptions = {
  headerStyle: { backgroundColor: HEADER },
  headerTintColor: MyTheme.headerTint,
  headerTitleStyle: { fontWeight: "bold", fontSize: MyTheme.headerfontSize },
}

function AppStack() {
  return (
    <Main.Navigator headerMode="screen" 
 screenOptions={{...commonOptions}}
    
    >
      <Main.Screen name="Home" component={HomeScreen} />
      <Main.Screen name="Settings" component={Settings} />
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
