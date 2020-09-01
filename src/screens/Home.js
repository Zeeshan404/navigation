
import React, { useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { MyTheme } from '../components/constants/Themes';
import Header from '../components/Header';
import Icon from '../components/common/Icon'
import { ThemeContext } from '../context/Theme';

const HomeScreen = ({ navigation }, props) => {
  const themeContext = useContext(ThemeContext)
  const {theme,toggleTheme} = themeContext;
  console.log("HomeContext", themeContext)
  useLayoutEffect(() => {
    navigation.setOptions({
      header: (props) => <Header  {...props} leftIcon="md-menu-outline" />,
    }
    );
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={MyTheme.headerColor} />
      <View style={{...styles.container,backgroundColor:theme.background}}>
        <Text style={styles.screen}>HomeScreen</Text>
        <Icon name="ios-color-palette-outline" type="Ionicons" color={MyTheme.headerColor} style={{ fontSize: 50 }} />
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Toggle Theme" color={theme.foreground} onPress={() => { toggleTheme() }} />
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
  }
});
export default HomeScreen;


// function LogoTitle(props) {
//   return (
//     // <View style={{ flexDirection: "row", alignContent: "space-around" ,  }}>
//     // <HeaderBackButton style={{  }} />
//     <Text style={{ flex: 1, textAlign: "center", fontSize: 22, fontWeight: "600", color: "white", backgroundColor:"pink" }}>Home Header</Text>
//     // <Icon name="add-outline" size={30} onPress={()=>{}}/>
//     // </View>
//   );
// }

// useLayoutEffect(() => {
//   navigation.setOptions({
//     headerTitle: props => <LogoTitle {...props} />,
//     headerLeft: () => <Icon style={{ backgroundColor: "green" }} name="arrow-back" size={30} onPress={() => { }} />,
//     headerRight: () => <Icon style={{ backgroundColor: "green" }} name="add-circle-outline" size={30} onPress={() => { }} />
//   }
//   );
// }, [navigation]);
// function CustomHeader() {
//   return (
//     <>
//       <SafeAreaView>
//         <View style={{ flex:1, height: 500, backgroundColor:"red" }}>
//       {/* <HeaderBackButton /> */}
//       {/* <HeaderTitle/> */}
//           {/* <Text style={{color:"white"}}>Header</Text> */}
// {/* <ScreenStackHeaderBackButtonImage /> */}
//         </View>
//       </SafeAreaView>
//     </>
//   )
// }

{/* <Button title="Update the title" onPress={() => { navigation.setOptions({ title: 'Updated' }) }} /> */ }


// Login['navigationOptions'] = screenProps => ({
//     title: 'Newset'
// })
// Login['navigationOptions'] = props => ({
//           headerStyle: {
//             backgroundColor: 'green',
//             height: 60,
//           },
//           headerTitleStyle: {

//           },
//           headerTintColor: '#fff'
//     // headerStyle:{backgroundColor:"green"},
// headerLeft:(<View style={{padding:6}}></View>), //add this
//         headerTitleStyle: {
//             textAlign: 'center',
//             backgroundColor: 'red',
//             flexGrow:1,
//             alignSelf:'center',
//         },
//         headerStyle: {
//             paddingHorizontal: 8,
//         },
//         headerRight: (
//             <HeaderButtons>
//                 <HeaderButtons.Item
//                     title="add"
//                     buttonWrapperStyle={{padding: 6}}
//                     IconElement={<Image source={i_add}/>}
//                     onPress={(event) => navigation.getParam('onRightBtnPress')(event)}
//                 />
//             </HeaderButtons>
//         )
// })