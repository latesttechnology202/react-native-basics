import React from "react";
import {View,Text,StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box,{
        backgroundColor:'powderblue',width:50,
        top:10,
        left:20,
      }]}>
      </View>
      <View style={[styles.box,{backgroundColor:'skyblue',
      top:-10,left:40
      }]}>
      </View>
      <View style={[styles.box,{backgroundColor:'steelblue',
        top:-20,left:60
      }]}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1,
    position:'relative'
    // position:'absolute'
  },
  box:{
    width:50, //this is pixel value 
    // width:'70%', //this is percentage value
    // width:'auto',
    height:50
  }
});

export default App;
