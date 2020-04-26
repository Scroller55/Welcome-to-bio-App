import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Dimensions, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
state={
  basicinfoPageDisplay:'block',
  experiencePageDisplay:'none',
}
handleBasicinfoPagePress  = () =>this.setState(state=>({
basicinfoPageDisplay:'block',
experiencePageDisplay:'none',
}));
handleExperiencePagePress  = () =>this.setState(state=>({
  basicinfoPageDisplay:'none',
experiencePageDisplay:'block',
}));
render() {
return (
<View style={styles.container}>
<Text style={styles.title}>
Welcome to Bio App
</Text>
<View style={styles.navContainer}>
<TouchableHighlight style={styles.navButton}
onPress={this.handleBasicinfoPagePress}>
<Text style={styles.navButtonText}>
Basic Info
</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.navButton}
onPress={this.handleExperiencePagePress}>
<Text style={styles.navButtonText}>
Pop Smoke
</Text>
</TouchableHighlight>
</View>
<View style={styles.contentContainer}>
<View style ={{display:this.state.basicinfoPageDisplay}}>
<View style={styles.mainConatiner}>
<View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Pop Smoke
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Cameron Boyce
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Juice Wrld
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      KObe Bryant
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Nipsey Hussle
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Tupac Shakur
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Lil Peep
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      XXXTentacion
    </Text>
  </View>
  <View style={styles.searchButton}>
    <Text style={styles.textinSearch}>
      Eazy E
    </Text>
  </View>
</View>
</View>
<View style ={{display: this.state.experiencePageDisplay}}>
<View style={styles.mainConatiner}>
<Text style ={styles.text3}>
Pop Smoke
</Text>
<Text style ={styles.text2}>
Born: July 20, 1999, Brooklyn, New York, NY
</Text>
<Text style ={styles.text2}>
Died: February 19, 2020, Cedars-Sinai Medical Center, Los Angeles, CA
</Text>
<Text style ={styles.text2}>
Occupation:   American rapper, singer and songwriter.
</Text>
</View>
</View>
</View>
</View>
);
}
}


const styles = StyleSheet.create({
container: {
height: deviceHeight,
width: deviceWidth,

},
contentContainer: {
height: 5*(deviceHeight/5),
width: deviceWidth,
backgroundColor: 'green',
},
navContainer: {
height: deviceHeight/7,
width: deviceWidth,
backgroundColor: 'green',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
borderTopWidth: 10,
borderColor: 'white',
},
navButton: {
height: deviceHeight/14,
width: deviceWidth/4,
backgroundColor: 'white',
borderColor: 'lightblue',
borderWidth: 2,
alignItems: 'center',
justifyContent: 'center',
margin: 20,
},
navButtonText: {
fontSize: deviceHeight/40,
textAlign: 'center',
color: 'blue',
},
mainConatiner:{
backgroundColor:'blue ',
textAlign:'center',
justifyContent:'center',
alignItems:'center',
fontSize:70,
},
title:{
    color: 'darkblue',
     fontSize: 30,
         fontWeight: 'bold',
},
paragraph: {
fontFamily: 'Didot',
color: 'white',
fontSize: 15,
textAlign: 'center',
},

text2: {
fontFamily: 'Didot',
color: 'black',
fontSize: 14,
textAlign: 'center',
         fontWeight: 'bold',

},
text1: {
fontFamily: 'Didot',
color: 'white',
fontSize: 15,
textAlign: 'center',
},
searchButton:{
  height: 50,
  width: 110,
  justifyContent: 'center',
  borderColor: 'black',
  borderWidth:3,
},
textinSearch:{
  fontSize: 16,
  fontWeight: 'bold',
  fontColor: 'white',
  textAlign: 'center',
},
text3: {
fontFamily: 'Didot',
color: 'red',
fontSize: 25,
textAlign: 'center',
},
});
