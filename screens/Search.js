import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, TextInput, TouchableOpacity } from "react-native";
import {Header} from 'react-native-elements'

export default class SearchScreen extends Component {
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
            <View style={styles.container}>
           <TextInput
            style={styles.textInput}
            placeholder={'Type Item'}
            placeholderTextColor={'gray'}
          />

          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.searchText}>
                Search
              </Text>
            </View>
          </TouchableOpacity>
          </View>
          
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#89CFF0",
    borderRadius:10,
    width:'100%',
    
    
  },
  text: {
    color: "purple",
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
  textInput: {
    borderRadius:10,
    alignContent:'center',
    borderColor:'white',
    borderWidth: 3,
     width: "57%",
    height: 50,
    marginLeft:20,
    marginTop:20,
    marginRight:150
    
  },

  button:{
    fontSize:50,
    // marginTop:10,
    justifyContent:'center'
    
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  searchText:{
    marginLeft:175,
    fontSize:25,
    marginBottom:100
  }
  
});
