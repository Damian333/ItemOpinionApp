import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export const MainBackground = () => (
    <View style={styles.view}>
        <Image
            style={styles.image}
            source={require('../../../../assets/MainBackground.jpeg')}
        />
    </View>
)