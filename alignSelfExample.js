import React from "react";
import {View,Text,StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box,{
        width:150,
          backgroundColor:'powderblue',
          // alignSelf:'flex-end'
          // alignSelf:'strecth'
      }]}>
      </View>
      <View style={[styles.box,{
        width:50,
        backgroundColor:'skyblue',
        alignSelf:'center',
      }]}>
      </View>
      <View style={[styles.box,{
        width:50,
        backgroundColor:'steelblue',
        alignSelf:'flex-start'//no affect because its default property of alignSelf okay  
      }]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1,
  },
  box:{
    // width:50,
    height:50
  }
});

export default App;
