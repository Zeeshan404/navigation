
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { HEADER } from '../components/constants/colorConstants';

const Login = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={HEADER} />
      <View style={styles.container}>
        <Text style={styles.screen}>LoginScreen</Text>
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

export default Login;