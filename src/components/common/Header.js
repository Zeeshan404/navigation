import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon';
import { deviceHeight } from '../helpers';
import { ThemeContext } from '../../context/Theme';


const Header = ({ scene, previous, navigation, heading, left, leftPress, right, rightPress }) => {
    // const { themeContext } = useContext(ThemeContext)
    // const {theme} = themeContext
    // console.log("HEADER THEME", ThemeContext)
    // const {theme} = themeContext
    const { options } = scene.descriptor;
    const title = heading !== undefined ? heading :
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
                ? options.title
                : scene.route.name;
    return (
        <ThemeContext.Consumer>
            {({theme}) => (

                <View style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
                    <View style={styles.headerIconContainer}>
                        {
                            previous
                                ? <Icon name="left" type="AntDesign" onPress={() => { navigation.goBack() }} color="white" />
                                : left
                                    ? <Icon name={left.name} type={left.type} size={25} onPress={leftPress} color="white" />
                                    :
                                    null
                        }
                    </View>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>{title}</Text>
                    </View>
                    <View style={styles.headerIconContainer}>
                        {
                            right
                                ? <Icon name={right.name} type={right.type} size={25} onPress={rightPress} color="white" />
                                :
                                null
                        }
                    </View>
                </View>
            )}

        </ThemeContext.Consumer>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: deviceHeight * 0.07,
        alignItems: "center",
        justifyContent: "center",
    },
    headerIconContainer: {
        flex: 0.2,
        alignItems: "center",
        // backgroundColor:"red"
    },
    headingContainer: {
        flex: 0.8,
        alignItems: "center",
        // backgroundColor:"grey"
    },
    heading: {
        fontSize: 23,
        color: "white",
        fontWeight: "bold",
    },
});
export default Header;



// {
//     previous
//         ? <HeaderBackButton tintColor={MyTheme.headerTint} onPress={() => { navigation.goBack() }} />
//         : left
//             ? <Icon name={left.name} type={left.type} size={35} onPress={leftPress} color="white" />
//             :
//             null
// }