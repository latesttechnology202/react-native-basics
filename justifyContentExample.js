import React from "react";
import {View,Text,StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box,{backgroundColor:'powderblue'}]}>
      </View>
      <View style={[styles.box,{backgroundColor:'skyblue'}]}>
      </View>
      <View style={[styles.box,{backgroundColor:'steelblue'}]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1,
    // justifyContent:'center' // vertical alignment in center
    // justifyContent:'flex-start'//no reflect because its default
    // justifyContent:'flex-end'
    justifyContent:'space-between' ,
    // justifyContent:'space-around'//left and right side equal wdith
    // justifyContent:'space-evenly' //all side equal width
    flexDirection:'colum'
  },
  box:{
    width:50,
    height:50
  }
});

export default App;
