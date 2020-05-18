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



class Lilpeep extends React.Component {

 
  render() {
    return (


                      <View style={styles.container}>

                  <View style={styles.mainConatiner}>
                  
<Text style ={styles.text3}>
Lil Peep
</Text>
<Text style ={styles.text2}>
Born: November 1, 1996, Allentown, PA
</Text>
<Text style ={styles.text2}>
Died: November 15, 2017, Tucson, AZ
</Text>
<Text style ={styles.text2}>
Occupation:  American rapper, singer, songwriter and model
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


export default Lilpeep;
