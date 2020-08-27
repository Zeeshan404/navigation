
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { SPLASH_IMAGE } from '../components/constants/imageConstants';

function Splash({ navigation }) {
  let [counter, setCounter] = useState(1);

  console.log("Navigation", navigation)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter > 0 ? counter - 1 :
        navigation.dispatch(
          StackActions.replace('Auth')
        ))
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={styles.container}>
        <Image style={styles.splashimage} source={SPLASH_IMAGE} />
        <Text style={styles.screen}>Skype</Text>
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    fontSize: 30,
    color: "black",
    fontWeight: "normal",
    fontStyle: "italic"
  },
  splashimage: {
    width: 150,
    height: 150,
  }

});

export default Splash;
