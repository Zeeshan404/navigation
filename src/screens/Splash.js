
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { SPLASH_IMAGE } from '../components/constants/imageConstants';
import { Loader } from '../components/commonComponents';
import MoveUp from '../animations/MoveUp';

function Splash({ navigation }) {
  let [counter, setCounter] = useState(2);
  let [loading, setLoading] = useState(false)
  let mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      setLoading(true)
    }
    const interval = setInterval(() => {
      setCounter(counter > 0 ? counter - 1 : fetchInfo())
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  const fetchInfo = () => {
    setLoading(false)
    navigation.dispatch(StackActions.replace('App'))
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <MoveUp style={styles.logoContainer}>
          <Image style={styles.splashimage} source={SPLASH_IMAGE} />
          <Text style={styles.screen}>Skype</Text>
        </MoveUp>
        <View style={styles.loaderContainer}>
          <Loader loading={loading} size="large" color="green" />
        </View>
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loaderContainer: {
    flex: 0.3,
    justifyContent: "center"
  },
  splashimage: {
    width: 100,
    height: 100,
  },
  screen: {
    fontSize: 20,
    color: "black",
    textAlign: "center"
  }
});

export default Splash;




// let mounted = useRef(false)
// if (mounted.current) {
// }
// else {
//   mounted.current = true
// }