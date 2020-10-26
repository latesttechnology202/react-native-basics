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
       <View style={[styles.box,{backgroundColor:'powderblue'}]}>
      </View>
      <View style={[styles.box,{backgroundColor:'skyblue'}]}>
      </View>
      <View style={[styles.box,{backgroundColor:'steelblue'}]}>
      </View>
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
    // flex:1,
    height:300,
    flexWrap:'wrap',
    // alignContent:'center',
    // alignContent:'flex-start'
    // alignContent:'flex-end'
    // alignContent:'space-between
    alignContent:'space-around'
  },
  box:{
    width:50,
    height:50
  }
});

export default App;
