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
    // alignItems:'center' //its align horizontally centerd
    // alignItems:'flex-end' //its align end
    // alignItems:'flex-start' //no effect becuase its default property
    alignItems:'stretch' ,//its work when width or height not defined,
    flexDirection:'row'
  },
  box:{
    width:50,
    // height:50
  }
});

export default App;
