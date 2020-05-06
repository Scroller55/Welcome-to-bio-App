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



class Popsmoke extends React.Component {

 
  render() {
    return (


      <View style={styles.contentContainer}>
       
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
<Image source = {{uri: 'data:image/jpeg;base64,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'}}
         style={{ height: 250, width:200, }} />
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

export default Popsmoke;
