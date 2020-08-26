
import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screen}>HomeScreen</Text>
    </View>
  );
}

const Auth = createStackNavigator();
const Main = createStackNavigator();
const Root = createStackNavigator();

function AuthStack() {
  return (
      <Auth.Navigator>
        <Auth.Screen name="Login" component={Login}  />
      </Auth.Navigator>
  );
}
function AppStack() {
  return (
      <Main.Navigator>
        <Main.Screen name="Home" component={HomeScreen}  />
      </Main.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Splash">
        <Root.Screen name="Splash" component={Splash}  />
        <Root.Screen name="Auth" component={AuthStack}  />
        <Root.Screen name="App" component={AppStack}  />
      </Root.Navigator>
    </NavigationContainer>
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
