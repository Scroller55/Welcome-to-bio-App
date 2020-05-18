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



class Tupacshakur extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
           <View style={styles.mainConatiner}>
                  
<Text style ={styles.text3}>
Tupac Shakur
</Text>
<Text style ={styles.text2}>
Born: June 16, 1971, East Harlem, New York, NY
</Text>
<Text style ={styles.text2}>
Died: September 13, 1996, University Medical Center, Las Vegas, NV
</Text>
<Text style ={styles.text2}>
Occupation: He was an American rapper and actor.</Text>
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


export default Tupacshakur;
