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



class Xxxtentacion extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
       
                  <View style={styles.mainConatiner}>
                  
<Text style ={styles.text3}>
XXX Tentacion
</Text>
<Text style ={styles.text2}>
Born: January 23, 1998, Plantation, FL
</Text>
<Text style ={styles.text2}>
Died: June 18, 2018, Deerfield Beach, FL
</Text>
<Text style ={styles.text2}>
Occupation: He was an American rapper, singer, songwriter, and musician.
</Text>
<Image source = {{uri: 'https://qph.fs.quoracdn.net/main-qimg-029e1b7760f3019184ac18d4cfb634bb'}}
         style={{ height: 250, width:200, }} />
</View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
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


export default Xxxtentacion;
