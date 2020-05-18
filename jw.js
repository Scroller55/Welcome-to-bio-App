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



class Juicewrld extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.mainConatiner}>
<Text style ={styles.text3}>
Juice Wrld
</Text>
<Text style ={styles.text2}>
Born: December 2, 1998, Chicago, IL
</Text>
<Text style ={styles.text2}>
Died: December 8, 2019, Advocate Christ Medical Center, Oak Lawn, IL
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


export default Juicewrld;
