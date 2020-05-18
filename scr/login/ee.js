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



class Eazye extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
          <View style={styles.mainConatiner}>
                  
<Text style ={styles.text3}>
Eazy-E
</Text>
<Text style ={styles.text2}>
Born: September 7, 1964, Compton, CA
</Text>
<Text style ={styles.text2}>
Died: March 26, 1995, Los Angeles, CA
</Text>
<Text style ={styles.text2}>
Occupation:   American rapper and rap mogul
</Text>
<Image source = {{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUVGBcXFxcVFxgXFxcYFxcXFxcXGBcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tNS0tLS0tLS4vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAP4AxwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAYFB//EADoQAAIBAgQDBQUGBgIDAAAAAAECAAMRBBIhMQVBUQYiYXGBEzKxwfAUUpGh0eEHI0JicvEzgpKywv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAApEQACAgEEAQMDBQEAAAAAAAAAAQIRAwQSITFBBRMiUaGxIzJxkcEz/9oADAMBAAIRAxEAPwCMQmNhnoTkiiMMEaAUUQhjExAQGG0UkmRIyIiI60BEsREYRGx4jTLUQYI0icjH8dC3FMZj1Ow8us5L8XrH+u3lYfCYsnqOKDpcl0NHkly+DXKImIG5A85inxlQ7ux8yYlc8yTKX6r9I/cuXp/1l9jbrHLMcldlN1JHkZ1MHxw7OL+I0P6GW4/U4SdTVfcryaCcVcXZo0k9MSjhMWj+6w8uf4S4jTfGcZq4uzDKLi6aLVOWqMqUzLNIyuQ0XEEkUyJDJFlTJomSKBWilbRIyN4YgIjEaAxGKKNAKKKKMQYrRLEY0RGmAxxgMtREYZxe0WMyoEB1bfy/f5To8SxQpIXPkAeZO36+kxeIrl2LMbk63mLX6nZH212zTpcO5730hjGICC80PAuApUw9bFVyy06dlQJbNUqtsguDpqL+fhOKlZ0Srw7gFWqVAKqGVWBOa3fc00vlBIuwPgBvLmI7NmniKdF6gAdM5fQWUZi2jHlkNr5b+E7XC8B9moCrj6lUKVIoYZajqzg6kkA91P166GvieDswGGGFIxTn2pZqoIpUf6VHe7o21c318RJABeyVxYVlLaAhQGOZnZdLNqugbN0zHlrycXwGtTbKBnNi3cudBYHQgHQsOXOT4rstjaOdzRqKKfvMNhpuCDqLHcX8ZFhOPV0vds+hHf1Nja4DizD3V2PKAFGzKSDcEb30IPiOU7XCuLm4Wobg6A8x0v1E5XFcd7aoamXLe1xe+oUD5ekr02luLLLHLdFkcmKOWO2R6FSMtUjOTwitmpIedrH00nSpT0SkpxUl5OA4uMnF+C8jSYSpTMmVpBoaLCGKRqYZBolZmLwxoMMrNIQYSY2IyQCvDBHQEw3igAjrSSIsbGmExrSxETO9rKv/ABpfqfkPnM9Ol2pq3rEfdCj5/OchTc7zz2rluzSZ1cEaxompqWIUC5JsB1J2nqHD+I0qFdOH3VPZUsi1CAwXFVNWcqdDuF12sRsTPPuy2JpUsTSqV7+zRsxsL6i5W46XtKmKxTVKjVG952LHzYkn4mVR6LTe9nuB16nEn+1ZqrYe9R7nNnI/4wCeRJBHKw5TqUKCtiqvtnVhSP2jGuPdLrrSw6nmiW25lfATH9qe0S4o0XRXWotIJVuR3iuxBB13becHObRgeu4CnWr0a2LYhHxV0Qu3coYfYnXmbctzlPWU8LRy1zgaVFfstK/2mo6C72XvMXPu62yga6X2mC4KPasaL1/Yqy93MT7M1B7qvr3R/dY2t6zZYzi+IweFIr4ha1eoQqLmWqqUl1YtyYtoNb6esaYFPh3CqWKr1MRVT2WHf2gpKgCZiqE5lA5KozE7ZiBre0xhmuwnbNagcYymXYqyI9EKrIjgBkAOltNOmvWZ3jD4csPswqBba+1Kk5rnbLpa1oDj2d/s638r/sfgJ2qTTgdnT/K/7H4Cdqm09FpleCP8HC1K/Wl/JbRpYVpTRpKrSxoqTLqPFKqvFIbR2cRYRAsMoNgrQkRRExiFHARojwIxBAgMMNo0IZInNpPaYvtHxFmdkB7qm3mZXn1CwxuiWLF7kqKHGnzVnP8AcwHpoJTWAGBSJwJS3NtnVSpUSlvoRDrtGqb7CTJh2bbcwTodAHhHDXnLlLhxMnThhPKG9Evbkc8eclUSzV4cRKr02WNSQtrQ4oekbAuJIkqVFbS3yP7x2hGm7Pn+V/2PwE66tOJwfEoEC5rG50nXQz0ukcXhik/Bw9SmsrbXktoZMrSopkymWtGcnDRSK8UVDs5whghmQ3CEJgEdeMQAI8GRgx4jEOEMaI4xoTERMJ2ip2e4G+tpuiZmO0JDMoA1B+Mx65Xjs0aV/OjKGS4fDl9hG1xYzu8Dody/UmcVujpwhulRFhuH6eM6mGwVrEgyRcM1jZgL+EZ9urUtwrr4fGVuTfRpUFDtF+lh5YWgIOH8Rp1eWU9DOmKYmaTafJsgoyVo5OJww6TjYzDzVYgoouxAHjynFxOOoE2U5j4DSW45y+hTmjGuWZrEULSqDNFVogna15w8ZSyuVE0J2c+Ua5Dhy1xa9+Vt5q+DYlmGRgbgXB5EfIzj8GwZLXJM01MW0G07Xp2Cf77pfk52uyRS2Vb/AATiSAyuDJM07DRyiYGKRgwyIFcQwCKYTeKOjBHxgC0cBBHRoiFYTAI6SExjjSZ/iWDYsCBsfyB2mjlbGV1pqXc2A+rDxlebHGcfk6RPFkcJXFGZx/DkOu1xl8vOX+D0bIFjsLiVqoXUe9e4+7qZJw1gdJ5eT4a+h6aEY7lJLtEFfAkOCWITnYAkeV4OGcMU1W9vVtTA94MxZrBrWU31uVvcaZZpBRVlsbStU4eu4EjHNQ5aZSZykwuVu6xK8idP9Tu0lJW/hKbJY2vr8JcUWXSU5JWacWPbwcbiFA1GylgB1a9h46Slwzh1U1GRQBlvmZh3LAHUODzNrdbztGmCSORiThw5HTxl0MqiqaM2XA5StM52GdmJzDb8/I8xOdicCWctyJA/C00uIpBBYSlUQmwmjSxeWaUUZ9TWOFyZFwyll5efnOmBIcOp5ycT1mCGyCR5jNPfOwgR4gilpUOhgEUQEAhjFjphNwY4Rt4YxBEcZHec7iPHKVIaEO3RTp6nlIzyRgrkwjFydJHWBiMw+K7Q1nOhyD+3T895TXiNTf2jg/5GZJeoRT4RoWkk+2ei3mH7TcS9q+VdUXbxPM/XzlSrxiuRlNRrHfx6i+8oMbzPqNX7kdsVSLMWn2O2d1MA1GhTZmKmsQyoOaWe5Y8tkPk4l/AVbGPxeuHovVbIcopqm5f3iCb+5bu+eY6cpTotrac58o6ON7ZI1OFqDwlurW00mbw1e2/KdmhiF01Eyyi0zpxmmgYVMxzE6TqpSQrodZw8VRVjobeHL8JLTVlFs2g67+XjE0NSomxNKxBGwk56zm017xOY+Vzb8LyfEVbCFeBX5I8RUubekKp1nHxvESliLEk8+nOXsNxKm40axPI6fntO/wCkxxQtyfy/w896pPJN7Y/tLohBjRHCegOIOvDeAQwGGKIGKAiERXjRBUIAJJsBuTMHRtH3lHiXGKVHQnM33R8zynE4vx5jdaOi825ny6D8/KZ1jec/NrfEP7NOPT3zI6OO4vUqE5mOX7oNh+HP1lC8AiBnPlJt2zWkkqQY619RGWhiJDmbrDQqBWBIDAEEg8wDcj12jC2kasBG/qMtao9UBDTZPaEMPcRRlDFtcrAKq90+8OV7TP1DsROv2coqMGrVKhyVahpVFBAyU9bnXmWyeQIPWR8a4aKDmmtyoAZSwsSpva4t1BHja+xEqi6dFtXyihTxHKTUKLocysNfvC4nP2O86mFfMLHnJSVFmN7nz2Xk9va5F/FbW/C0lGKqc6evr8LyOh7VNjcSz9qrDl8P0mdnQjtrtlOpWYa5PlKjV2F8x05eUu4mqx1c7cukzfEMZmJA2+Mugk+TFqJU+GRY6vna/IbSOixkYMIMtXBis7PC+LlDla7L+a+U0tCsHF1II+uXKYLNz+Ms0MS6EFTY/X16zfptdLFw+UZsuljk5XDNyIQJyOG8Xz2D2B68vXpOxO3izxyRuJzMmKWN1IQiiAik7IUVmqBQWJsBqSeUyvGOLGroNEGw6+J/SQ8Y4uajZV0QcuviZy2Y2nntRqd/xj1+TsYcO3l9iapGRNDeYy8IhDcjGRQGOBiiDRXiGNMV4iYrRiNB2c4z7JWouM1OpfzR7WDqcp18Lch0mn7RYGoXRrXRKNJW2BUm4BZb3F7WvtdSBtPO6bkEEXBGxG/XeeocHxArrepmZnoKzEm2YICGDX0awzWYag6k3uJVNU7LcT8Mx1fDSvd01XW3L1nbFK48YPs46Q9xeTQ8Du4lehxddjofGTniyAe9GVMCDuBOPisJmYqgAA1Y9NdB5kxKEZBPJkguRcT4v7TRduZ8Jzw0ZVp5WItApvptLUqMUpOTtkt4Yxm/U+kepjIhjwTy+vrSRw3gNEqtbnNZ2fx2dchOqjTxH7TGiXuF4r2dRW6HbqOc0abM8U0/Hkhnx+5CjdCKMoVQyhl2MU9DuvlHGfHB5oV2hC+EeVvHCeWO8V2jTJmT6/CErAiQWiMcy2gtAYobQQiIYDFBaG0Yg2/Sep9hQtLDq5Gb2pPU9xCFZQOvhzDHwE8rGk9O7HVXKUcPYqVs2fmqtep5FMrFrHqQbgi1eV0izEuTqdpOACl/Npj+Wx1H3Sf/AJ6f6nAyT1UUwylSoykaqbEbbeMz2M7H0nJKVHS/KwYDyvY/nHPTuVSiaMWqUVUzz/H1rCwF2JsoHMnYRuMwfsitA6vo9Yj75/p8lGnmW6z0HhvZajh29pdqjjZnt3f8VGx8TfwmC40+V8Q53FwPM6CWY8WxclGbN7j46MfXbM5YWsST+ZgEaAbyQCIoBFEIRABw36iA8o4G0ZAaCVhUxHaNIgSNB2f4kFc02NlbUE8ja5/GKZ7PfWKa8Wsnjjt7M+TTRnLcKKRK3WPt4zIaAM3+o0MfONLGJCYCEx3jTHNeNgAgIhCUMREAAREYrQQAN9rfX6T1XhBC0KWVTZwhazd401vTVbhW0IWrmFjso5zynX1nqvZ9AwRsn8qiAEYAXZmbIO7yu7E6bAC+wlWXosxLk9Hovp18fzheovWQYfQa225bDwHgIbXM6EL2qyiXZFjMSFRm5KCST0A1njnG3PsWdr3qv623+QE9H7aYq1MUV3qHvf4jf8dvxnnXbVcq0V65j/6gfORn0CMzeCIDxiHjMwxQiK8QEAHl4wHnERFeBJCzGC8JMF4DGkxRIvnvFACOxElTXWDLyvGNptABlQaxJveBoYCHs8ZBFaIY68BivBABQExQ2jET4GialREA1J/IXJPpPUuC4dHp4dDmyhiH0sDULFi51GZSCg0JNkPO18Z2Aw18QahFwiN/5P3B+TN+E22AprQIQHPWPeTb+UuZjma+jG6iy8yw6yGVfFFmJ8m1o0iO7rpprqdNN+csuQiknYRtBALActB6SlxWpm7g25zdBUih8szGNvWrFj6fpMZ/EJv56J92mD6sWPwAnolCj3tOs8s7c18+NrWPusEHL3FCkf8AkDI5eIiXLONFGoDzMdMxIQjrxoigAbxGCFYDQDEBEYIEiTDU8zWH1YXinY7J4UNVLHZBfzJuB84pswaX3I7rM2XUbJUcONcQkAwXmM0kbnXaCJxY2gJgIQhjSI6IYRBFa0F4AOOkEBljA4Jq1RKSe85Cj1O/lz9IwPSf4fcLtg3qkf8AI4IPVaenxLy7wPD5XZ7MwuQSxv3ySV053YhCDoQ/gDOnWC0KVOiuiItteiDc/GcrDcQFVg63SnTYMqgDWwUM7G4sDkU6iwub23kdQuEieJ8s3IewlI07kybNexkgAAuZuj0Z2VgopKWNr8r6XPIepngmOrGpUd2IuzMxt1Jvp4XM9R7ScRqOlZ0bItNGynmTsQDyJBI9fWeShrGZ8s9zoklSHAH684EN5H7SIaDfeVjJ4o0GEGAgxwNo2FTreA0KNJj2a/ID/cicwJGg7GVD7VhyKm/oRb4wR/YtO/UPRQPxP7Qzq6RfpnN1P/Qzq2/eGptADrAVnKOkRMYIWiMBCgtCYohh+tYIooAAz0j+GvBMoOKYakZaQPT+p/kPXrMf2X4KcXWCahF7zt0Xp5nYevSey0FVFAGiqAAByA0AEuxR8kZMOPwiMpNTaxB5aEWI/CZ3Dp7Kl7NdBXJy67LTBDu3TRrg25sOd4/i2PqVnKIpyjr/AFHx6CUOHK1Rqj13YGwLWtYBTUCJa9gN7LpuBe+hr1LtIsxdm44cwZFqA3BAI8B005w41iV8JX4LVX2dswbIcpINwSAL2PS9/S0r8Ux+j5dQi305m4H4AEn0lsciWNNlbj8qRmO3VSmlAALmZcwOl1X2i5Q7G1g1wLc/LS/lzN+/7T0Pt1WqNhidLZkWo1gCx1cIovoq2XXc230N/OpQpbrZKSrgJEdSjLx9Pw3jIkoOu319Wjo0iOEBDjaAiCEwGgSJhr9dY8RjHUQJFnB8QejfI1r7+QNhvvFKhaGSU5LhMi4xfaJpFmMlkTKelpEkMYwXhIgvAQYrRXiiGKWMBg3rVFp0xdm/AeJ6CR0KDOQqi5PKegdncAmGXkzt77fIeHxkoxsTZ3uz/C1w9IU083f7zcz8gJ1iL90anmx2EoU8WTYWlykSd9uk1IgOfCgIQg1685muOYgrTcKmpsrtztcHfzt/u01NSpfQSBMNZrkXv1GhhKCkqEnTs42Axp9nlBVrXZraXA7oHdB1Njy2IPO0c2OLlslJQtgoZrkDvC772J/tsLkte4BEvY16dOoGXQ1LKV/p7uXXTbRQPO05vsHqVGJVtM1lzMSbHXva7kb9BMMsVNpvo0LJxwjN/wAQazlKI2plqlgbZmZAoLvYnXvbaWud73mImn7cVHevZnBsFOUDKqMyJnULysQAefd1mYyxwVRITdsdbrzjlOnT5w+Gw5wImvlJESTl4wwMg/3HgQEACG0cq8zG2gNAIkdWSEREeECRCtj1+v2hhtqbQQAJqQsbiMf5RsQCaCEwQBiktCjmYLsSbayMGSNWINxoQbjzEYGr4Xw5aW2pO7df0E7uGXWZDg/FXdxTbW+x8tdZoA1QcxLIsizT4dlUS5TqM3gJwMCWJ5Tu0e6Ln8peiLOhhktIeJcRSmNd5n+IdoWBKUxYjmflM3xPHsFLEkk8zG5fQRcxXEzWqm21tpZr46smoYgMNbm2tgLi53sB+czGAZspYW16zrDEVFoFGbNlykdNbgjX/G/nKJUySMhjq4dydxc28pVnT4zgVpKhW9yeZvfS+vScsytqmMcxvb0kyMBpK5MQEQFpmEUiAvp+v1zjwbwESq8azaxiGAi5+vOBJD8wtArRjb2EjvAY8sDFIxDEB//Z'}}
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


export default Eazye;
