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
  ImageBackground,Platform,Animated
} from 'react-native';



class Cameronboyce extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
<View style={styles.mainConatiner}>
<Text style ={styles.text3}>
Cameron Boyce
</Text>
<Text style ={styles.text2}>
Born: May 28, 1999
</Text>
<Text style ={styles.text2}>
Died: July 6, 2019
</Text>
<Text style ={styles.text2}>
Occupation:   Actor
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
    flex: 1,
    justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'teal',

  },

mainConatiner:{
backgroundColor:'blue ',
textAlign:'center',
justifyContent:'center',
alignItems:'center',
fontSize:70,
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
text3: {
fontFamily: 'Didot',
color: 'red',
fontSize: 25,
textAlign: 'center',
},


  
   
    buttonText: {
        fontSize: 14,
        fontWeight:'bold',
    },
  

loginFormTextInput: {
  height: 200,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
});


export default Cameronboyce;
