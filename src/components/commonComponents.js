import React from 'react';

import { ActivityIndicator } from "react-native"

export const Loader = ({ loading, size="large", color="blue" }) => {
    return (
        loading ?
            <ActivityIndicator size={size} color={color}   />
            : null
    )
}