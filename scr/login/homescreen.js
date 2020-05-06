import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated, Dimensions
} from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class Homescreen extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
                <View style={styles.contentContainer}>

         <View style={styles.mainConatiner}>
<View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Popsmoke')}
>
<Text style={styles.textinSearch}>
Pop Smoke
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Cameronboyce')}
>
<Text style={styles.textinSearch}>
Cameron Boyce
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Juicewrld')}
>
<Text style={styles.textinSearch}>
Juice Wrld
</Text>
</TouchableHighlight>

  </View>
 <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Kobebryant')}
>
<Text style={styles.textinSearch}>
Kobe Bryant
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Nipseyhussle')}
>
<Text style={styles.textinSearch}>
Nipsey Hussle
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Tupacshakur')}
>
<Text style={styles.textinSearch}>
Tupac Shakur
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Lilpeep')}
>
<Text style={styles.textinSearch}>
Lil Peep
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Xxxtentacion')}
>
<Text style={styles.textinSearch}>
Xxx Tentacion
</Text>
</TouchableHighlight>

  </View>
  <View style={styles.searchButton}>
   <TouchableHighlight
onPress={() => this.props.navigation.navigate('Eazye')}
>
<Text style={styles.textinSearch}>
Eazy E
</Text>
</TouchableHighlight>

  </View>
      </View>
      </View>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 8,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: 'purple',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    },
    contentContainer: {
height: 5*(deviceHeight/5),
width: deviceWidth,
backgroundColor: 'teal',
},
navContainer: {
height: deviceHeight/7,
width: deviceWidth,
backgroundColor: 'teal',
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


export default Homescreen;
