import React from "react";
import {View,Text,StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      </View>
      <View style={styles.box2}>
      </View>
      <View style={styles.box3}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1
  },
  box1:{
    backgroundColor:'powderblue',
    flex:1
  },
  box2:{
    backgroundColor:'grey',
    flex:2
  },
  box3:{
    backgroundColor:'orange',
    flex:3
  }
});

export default App;
