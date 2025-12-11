import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './src/components/Bird';
import { useEffect, useState } from 'react';

export default function App() {
  const sreenWidth = Dimensions.get("screen").width;
  const sreenHeight = Dimensions.get("screen").height;
  const birdLeft = sreenWidth / 2;
  const [birdBottom,setBirdBottom] = useState(sreenHeight / 2); 
  const gravity = 3;
  let gameTimerId;
  const birdColor = "#f00";

  useEffect(() => {
    if (birdBottom > 0){
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
    },30)
    }

    return () => {
      clearInterval(gameTimerId);
    };

  },[birdBottom]);
  return (
    

    <View style={styles.container}>
      <Bird birdBottom={birdBottom} birdLeft={birdLeft} color={birdColor}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
