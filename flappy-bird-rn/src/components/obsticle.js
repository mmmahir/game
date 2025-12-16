import React from 'react';
import { Text, View } from 'react-native';

const componentName = ({
    color,
    obstacleWidth,
    obstacleHeight,
    randomBottom,
    gap,
    obstacleLeft,
}) => (
    <>
        <View style={{
            position:"absolute",
            backgroundColor: color,
            width: obstacleWidth,
            height:500,
            left:obstacleLeft,
            bottom: randomBottom + obstacleHeight + gap,
        }}>

        </View>
                <View style={{
            position:"absolute",
            backgroundColor: color,
            width: obstacleWidth,
            height:obs,
            left:obstacleLeft,
            bottom: randomBottom,
        }}>

        </View>
    </>
);

export default componentName;
