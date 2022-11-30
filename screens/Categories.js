import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Header} from 'react-native-elements'

export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
   
  }
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
          
          <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("AddCategoryScreen")
          }>
          <View style={styles.button2}>
              <Text>Add Category +</Text>
          </View>
          </TouchableOpacity>
          
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
    color: "orange",
    fontSize: 30
    
  },

    imageIcon: {
    width: 150,
    height: 150,
    marginLeft:95,
  },

  header:{
    marginBottom:100,

  },
  button: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white"
  },

  button2: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white",
    marginTop:20
  },
  
});
