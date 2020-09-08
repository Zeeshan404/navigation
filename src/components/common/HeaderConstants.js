import React from 'react';
import Icon from './Icon';
import { TouchableHighlight } from 'react-native-gesture-handler';
export const CustomHeaderButton = ({ name, type, size = 25, onPress }) => {
    return (
        <TouchableHighlight
            activeOpacity={0.2} underlayColor='rgba(0,0,0,0.05)' onPress={onPress}
            style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}>
            <Icon name={name} type={type} size={size} />
        </TouchableHighlight>
    )
}