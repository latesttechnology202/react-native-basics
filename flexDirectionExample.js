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
    // flexDirection:'column' //is it bydefault 
    // flexDirection:'row',
    // flexDirection:'column-reverse',
    flexDirection:'row-reverse'
  },
  box:{
    width:50,
    height:50
  }
});

export default App;
