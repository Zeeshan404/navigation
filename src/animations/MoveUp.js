import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const MoveUp = (props) => {
    const moveUp = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    useEffect(() => {
        Animated.timing(moveUp, { toValue: 150, duration: 1000, }).start();
    }, [moveUp])

    return (
        <Animated.View style={{ ...props.style, marginBottom: moveUp, }} >
            {props.children}
        </Animated.View>
    );
}
export default MoveUp;