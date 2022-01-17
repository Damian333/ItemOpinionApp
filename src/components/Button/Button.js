import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles';

const buttonColors = {
    blue: 'blue',
    grey: 'grey'
}

const textColors = {
    red: 'white',
    grey: 'black'
}

export const Button = ({
    onPress,
    title,
    variant='grey'
}) => {
    const colorsButton = useMemo(() => buttonColors[variant], [variant])
    const colorsText = useMemo(() => textColors[variant], [variant])
    return (
        <TouchableOpacity style={{...styles.view, backgroundColor: colorsButton}} onPress={onPress}>
            <Text style={{...styles.text, color: colorsText}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}