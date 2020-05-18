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



class Kobebryant extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
                   <View style={styles.mainConatiner}>
<Text style ={styles.text3}>
Kobe Bryant
</Text>
<Text style ={styles.text2}>
Born: August 23, 1978, Philadelphia, PA
</Text>
<Text style ={styles.text2}>
Died: January 26, 2020, Calabasas, CA
</Text>
<Text style ={styles.text2}>
Occupation:   American professional basketball player
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
    backgroundColor: 'teal',
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
});


export default Kobebryant;
