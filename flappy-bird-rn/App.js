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
  let obstacleTimerId;
  let obstacleTimerId2;
  const [obstaclesLeft,setObstaclesLeft] = useState(sreenWidth);
  const [obstaclesLeft2,setObstaclesLeft2] = useState(sreenWidth + sreenWidth / 2 + 30);
  const [obstacleNegHeight, setobstacleNegHeight] = useState(0);
  const [obstacleNegHeight2, setobstacleNegHeight2] = useState(0);
  const obstacleWidth = 60;
  const obstacleHeight = 300;
  let gap = 200;
  
  useEffect(() => {
    if (obstaclesLeft > -60){
      obstacleTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      },30);
      return () => {
        clearInterval(obstacleTimerId);
      };
    } else {
      setObstaclesLeft(sreenWidth);
      setobstacleNegHeight(-Math.random() * 100);
    };
  }, [obstaclesLeft])

  useEffect(() => {
      if (obstaclesLeft2 > -60){
      obstacleTimerId2 = setInterval(() => {
        setObstaclesLeft2(obstaclesLeft2 => obstaclesLeft2 - 5);
      },30);
      return () => {
        clearInterval(obstacleTimerId2);
      };
    } else {
      setObstaclesLeft2(sreenWidth);
      setobstacleNegHeight2(-Math.random() * 100);
    };
  }, [obstaclesLeft2])


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
      <Obstacle
      color={"green"}
      obstacleWidth = {obstacleWidth}
      obstacleBottom = {obstacleNegHeight}
      gap = {gap}
      obstacleLeft = {obstaclesLeft}
      >
      </Obstacle>
      <Obstacle
      color={"yellow"}
      obstacleWidth = {obstacleWidth}
      obstacleBottom = {obstacleNegHeight2}
      gap = {gap}
      obstacleLeft = {obstaclesLeft2}
      >
      </Obstacle>
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
