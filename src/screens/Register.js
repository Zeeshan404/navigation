
import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';

function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.screen}>RegisterScreen</Text>
    </View>
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

export default Register;
