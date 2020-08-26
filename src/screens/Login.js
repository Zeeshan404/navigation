
import * as React from 'react';
import { View, Text , StyleSheet } from 'react-native';

    
const  Login =({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.screen}>LoginScreen</Text>
    </View>
  );
}


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
