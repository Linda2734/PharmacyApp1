import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {Header} from 'react-native-elements'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.header}>
       <Header
          style={styles.header}
         backgroundColor={'#89CFF0'}
          centerComponent={{
            text: 'Pharmacy App',
            style: { color: '#fff', fontSize: 20 },
          }}
          />

           <Text style={styles.text}>Under Construction</Text>
          
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "blue",
    fontSize: 30
  },

    imageIcon: {
    width: 150,
    height: 150,
    marginLeft:95,
  },

  header:{
    marginBottom:100,

  }
  
});
