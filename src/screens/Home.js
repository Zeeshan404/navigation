
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { HeaderBackButton, HeaderTitle } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
const HomeScreen = ({ navigation }, props) => {

  function LogoTitle(props) {
    return (
      // <View style={{ flexDirection: "row", alignContent: "space-around" ,  }}>
      // <HeaderBackButton style={{  }} />
      <Text style={{ flex: 1, textAlign: "center", fontSize: 22, fontWeight: "600", color: "white", backgroundColor:"pink" }}>Home Header</Text>
      // <Icon name="add-outline" size={30} onPress={()=>{}}/>
      // </View>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
       headerTitle: props => <LogoTitle {...props} />,
      headerLeft: () => <Icon style={{ backgroundColor:"green"}} name="add-circle-outline" size={30} onPress={() => {  }} />,
      // headerRight: () => <Icon style={{ backgroundColor:"green"}} name="add-circle-outline" size={30} onPress={() => {  }} />
      }
    );
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.screen}>HomeScreen</Text>
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
  }
});
export default HomeScreen;



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