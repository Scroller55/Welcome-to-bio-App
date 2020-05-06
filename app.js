import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Popsmoke from './src/login/ps.js';
import Cameronboyce from './src/login/cb.js';
import Juicewrld from './src/login/jw.js';
import Kobebryant from './src/login/kb.js';
import Nipseyhussle from './src/login/nh.js';
import Tupacshakur from './src/login/ts.js';
import Lilpeep from './src/login/lp.js';
import Xxxtentacion from './src/login/xt.js';
import Eazye from './src/login/ee.js';












const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Popsmoke: { screen: Popsmoke },
   Cameronboyce: { screen: Cameronboyce },
   Juicewrld: { screen: Juicewrld },
   Kobebryant: { screen: Kobebryant },
   Nipseyhussle: { screen: Nipseyhussle },
   Tupacshakur: { screen: Tupacshakur },
   Lilpeep: { screen: Lilpeep },
   Xxxtentacion: { screen: Xxxtentacion },
   Eazye: { screen: Eazye },
   
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

