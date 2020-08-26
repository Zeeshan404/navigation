
import React ,{useEffect, useState} from 'react';
import { View, Text , StyleSheet } from 'react-native';

function Splash({navigation}) {
    let [counter, setCounter] = useState(5);
    useEffect(() => {
        const interval = setInterval(() => {
          setCounter(counter > 0 ? counter - 1 : navigation.navigate('Auth'));
        }, 1000);
        return () => clearInterval(interval);
      }, [counter]);
  return (
    <View style={styles.container}>
      <Text style={styles.screen}>Spalsh</Text>
  <Text style={styles.screen}>Redirecting in {counter}</Text>
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

export default Splash;
