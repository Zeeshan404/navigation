
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import { HEADER } from '../components/constants/colorConstants';
import Icon from 'react-native-vector-icons/Ionicons'

const Settings = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions(  
{

                // headerStyle: { backgroundColor: "purple" },
                headerTintColor: "gold",
                // headerRight: () => (
                //   <Icon name="add-outline" size={30} color="white"/>
                // ),

            }
            );
        }, [navigation]);



  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={HEADER} />
      <View style={styles.container}>
              <Button
                  title="Update the title"
                  onPress={() => navigation.setOptions({ title: 'Updated!' })}
              />
        <Text style={styles.screen}>SettingsScreen</Text>
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

export default Settings;