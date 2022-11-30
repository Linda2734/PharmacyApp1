import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../components/config';
<head>
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  </head>
import firebase from 'firebase/app';


// import * as firebase from 'firebase/app';
// import firebase from "firebase/compat/app"
// import 'firebase/compat/firestore';
// import {collection} from "firebase/firestore";
// import firebase from 'firebase'





export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: 'normal',
      hasCameraPermissions: null,
      scanned: false,
    };
  }

  getCameraPermissions = async (domState) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === 'granted',
      domState: domState,
      scanned: false,
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    const { domState } = this.state;

    if (domState === 'bookId') {
      this.setState({
        bookId: data,
        domState: 'normal',
        scanned: true,
      });
    }
  };

  addProduct = async () => {
    await firebase
    .collection('products')
    .doc('panadol')
    .add({
        expiry: '12/23/22',
        activeIngredient:'paracetemol',
    })
    .then(() => {
        console.log('Medication added!');
    });


//     const cityRef = db.collection('products').doc('panadol');
// const doc = await cityRef.get();

//   console.log(doc);


  }




  render() {
    const { domState, scanned, bookId } = this.state;
    if (domState !== 'normal') {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }
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

        <TextInput
          style={styles.textInput}
          placeholder={'Type Barcode'}
          placeholderTextColor={'gray'}
          value={bookId}
          // onChangeText={()=> this.addProduct()}
        />

        <TouchableOpacity
          style={styles.button}
         onPress={() => this.addProduct()}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleBarCodeScanned()}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5653D4',
  },
  text: {
    color: 'pink',
    fontSize: 30,
  },

  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },

  header: {
    marginBottom: 100,
  },
  textInput: {
    borderRadius: 10,
    alignContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
    width: '57%',
    height: 50,
    marginLeft: 80,
    marginTop: 80,
  },
  button: {
    backgroundColor: '#89CFF0',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    marginLeft: 45,
    marginTop: 40,
    height: 50,
  },

  buttonText: {
    color: 'white',
    
  },

  orText: {
    marginLeft: 155,
    marginTop: 50,
    
  },
});

