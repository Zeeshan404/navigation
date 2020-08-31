import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native';
import Header from '../components/Header';
import { MyTheme } from '../components/constants/Themes';

const Settings =  ({ navigation }, props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => <Header  {...props} />,
    }
    );
  }, [navigation]);

  return (
    <>
          <StatusBar barStyle="light-content" backgroundColor={MyTheme.headerColor} />

      <View style={styles.container}>
              {/* <Button
                  title="Update the title"
                  onPress={() => navigation.setOptions({ title: 'Updated!' })}
              /> */}
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