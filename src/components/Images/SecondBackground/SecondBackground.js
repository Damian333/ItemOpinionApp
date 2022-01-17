import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export const SecondBackground = () => (
    <View style={styles.view}>
        <Image
            style={styles.image}
            source={require('../../../../assets/SecondBackground.jpeg')}
        />
    </View>
)