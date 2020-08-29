
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Register from './src/screens/Register';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { deviceHeight } from './src/components/helpers';

// options={{
//   headerStyle: {
//     backgroundColor: 'green',
//     height: 60,
//   },
//   headerTitleStyle: {

//   },
//   headerTintColor: '#fff'
// }}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screen}>HomeScreen</Text>
    </View>
  );
}

const Loading = createStackNavigator();
const Auth = createStackNavigator();
const Main = createStackNavigator();
const Root = createStackNavigator();


function CustomHeader() {
  return (
    <>
      <SafeAreaView>
        <View style={{ flex: 1, flexDirection: "row", alignContent: "center", justifyContent: 'center' }}>
          <Text style={{ textAlign: "center" }}>AppHeader</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

function LoadingStack() {
  return (
    <Loading.Navigator headerMode="none">
      <Loading.Screen name="Splash" component={Splash} />
    </Loading.Navigator>
  );
}
function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen name="Login" component={Login} options={{ headerTitle: <CustomHeader /> }} />
      <Auth.Screen name="Register" component={Register} />
    </Auth.Navigator>
  );
}
function AppStack() {
  return (
    <Main.Navigator>
      <Main.Screen name="Home" component={HomeScreen} />
    </Main.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root.Navigator initialRouteName="Splash" headerMode="none">
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
