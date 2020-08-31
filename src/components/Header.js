import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MyTheme } from '../components/constants/Themes';
import Icon from 'react-native-vector-icons/Ionicons';
import { deviceHeight } from '../components/helpers';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderBackButton } from '@react-navigation/stack';


const Header = ({ scene, previous, navigation }, props) => {
    const { options } = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
                ? options.title
                : scene.route.name;
    console.log("PROPS LEFT", props.leftIcon)
    return (
        <View style={{ flexDirection: "row", backgroundColor: MyTheme.headerColor, height: deviceHeight * 0.07 }}>
            <View style={styles.headerIconContainer}>
                {
                    previous ?
                        <HeaderBackButton tintColor={'white'} onPress={() => { navigation.goBack() }} />
                        // : null
                        :
                        // props.leftIcon ?
                            <Icon name={props.leftIcon} size={35} onPress={() => { previous ? navigation.goBack() : null }} color="white" />
                            // : null
                }
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}> Header Title</Text>
            </View>
            <View style={styles.headerIconContainer}>
                <Icon style={{}} name="add" size={30} onPress={() => { alert('left press') }} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerIconContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    headingContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 23,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
    },
});
export default Header;