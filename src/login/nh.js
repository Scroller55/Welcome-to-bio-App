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



class Nipseyhussle extends React.Component {

 
  render() {
    return (


      <View style={styles.container}>
       
                  <View style={styles.mainConatiner}>
<Text style ={styles.text3}>
Nipsey Hussle
</Text>
<Text style ={styles.text2}>
Born: August 15, 1985, Los Angeles, CA
</Text>
<Text style ={styles.text2}>
Died: March 31, 2019, Los Angeles, CA
</Text>
<Text style ={styles.text2}>
Occupation:   American rapper, activist, and entrepreneur.
</Text>
<Image source = {{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAiwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xAA8EAACAQMCAwcCAwYFBAMAAAABAgMABBEFIRIxQQYTIlFhcYEUkQcyoSNSscHR8BVCQ3LxM1OC4TVic//EABkBAAMBAQEAAAAAAAAAAAAAAAECBAADBf/EACURAAICAgIBBAMBAQAAAAAAAAABAhEDIRIxQRMiMkJRYXFDFP/aAAwDAQACEQMRAD8AvFHQoYpCoOjohR1jAoDeojtNr1t2d0xry5BdieGKFThpG8hn7n0BrHNZ7Va9rk7tJeSxRNstvbsURR5bbn3NYVujaNW17S9GQtqV7FCcbIWy59lG5qsS/ihoqSFYbPUJRn8/Aij4BYH7gVnml9nL25iVuPul5DbG3tT+TshdcYMcsZUbnbB/SkeSK8jqOR9Ius/4maXBKUaxvyAoIZUj3Hp4qfWP4hdn7ogPJcWxP/fhOB8rkfrVIm7Nm4hRXYrKoAyPKmVx2RnClobjONhxE8qyyx/IXjyLwbTbXdvcjNvPFKMZ8Dg7UvXnVrS/0q4SaIywTKcrIh5fNa3+HvaafW7J7bUN763C8UnCAJVPI7ddv4HrTrYl7plvoUKOsEKjoUKxgUdAUKwBEUdFR1ghij6ZohVZ7f6w2l6M0MEnBc3R7uM5wQP8zD4P61jFI7b3i692hIikElraqYoQpyGPNjnyyMfApTSNGiQB2jXf03rjQrOJI0JQcR3NWaBQBjAxUuXI7opw4l2w44OEAKNqXEO35d/aloOHlTpFQkipmyukhgsA6rv7UnLAPIfapVoxjIFNpgB0oWDsgbywjmUq3L1qK076ns7qK3ttxPCDiWP/ALidR7+VWSfhphcRLJGytXaGRo55MSaL9ZXcV9bx3EDh4pFDKw6inFZz2D1saffvo11IBDMxe3JP5X6r87n3960Yb8qtTtEPkOhQoUQAo6KhWNQlR0MCjArGC2AJrEu3+sf4t2kk7luOG2/YxY3Bx+Yj5/gK03txq40fQriUN42XhQA43O1YxpELXF2HcM2DuSaDYHt0Wzs6ztEGfIxtvViR8cqg4JFtogpPCq7saTbWijkCN/QA8qjlFykWxnGEaZaYu8b0p3ErDrVSh1K8lYNIwjAOyrtn3NWfQ7yKbhWVn4skNk5Gf7/jSyxNDrMmPOJiCM01ljLb8VS7W8ZYyKcqNj6VFaq8KTDnhWFIoMPqIYToP36ZTEqp61Han3szMbYzjJyAGIx7ev8A7pqs+pxR4nido127w4yP611WP9nN5rfRG9oLeaG5ivbdsPGwkRvJhuP4VsHZrV4dc0e31CDw8YxJH1jcc1/vpisyLLeWksL4ZlGdt8jHSnf4V372naK90lmPczxmVF8nXG/yD+gqnG9UyXIqdryatR0MfNCugoKFHQxWAJAUfQ0KZaxdrZadPOxxwqce9YJl/wCK+pG7uI7dGBjicZANQXZhckueZfJ9djSXaRzPH3rkZMmTt1pz2c/KABzBpJfE3+hOrbG4ljV94xl39ambVLaPwLEgHLONzUe8gjgbbc9ajhc6jPHIbC2MbD8sky/mPkB/WpGm2XQUYra2XHubTh8UioTSJAt5AVKkE7EVFaTZay3eT6pKw8CiNIwuCdicnH6DzpxccUUAjwhLMDsTkYpZRryPBqW6LBaXnFDICdxzqJnuPqZ+7AycnfypXT4n7hjnJfdveo/9tbX0nc4Bxg5GQQaQfikSUP0Spks3eeeNhTW6lEZIRwR5Gm8+lPqVu0SagIZePIdSUwPLFRcmkavamRzqImcsSBIfBjPLzH3rpxTXYnNp1QqsCpdd9GMIcgjyNMeykUkf4iWoi8OOMtjkUCHI+/DTm2knWPhuI1UkjiCHIqR7FWaTdtp7lxtbWxI/3MwwfsGqjD2SZ0jSuW2OVHQ9qFdzjYtDGOEu/IUPqB0RQKOLDx92Tv0ofTN6UTnryM6q/wCIMzR6OiLnDyAGrTVY/EGNn0ZWVchJMn7Ur6Oq7MtvozLayAcwMjAzSnZvlkg+EHJx7Vb7LSODRorsFPGBgH/N7mm2qRwoIJYUCEkqwHMVN6v1oo/5/vYVnE7kiXHd8xvvUjDbrFgrI4Xngb0hp5DgE75qw2tupUEjlXCb2U46URiO+kXGGZf/ALH+QpvdwsoJ4eHhGSWO5qyskdqgbg45TvjyqAaS2muJTdMTIW8K9cUOx0/wOrCJxEpGdxypnqttwyJLuOjVKaLqVi8zRuWHCN0cFGHwRTXV9UtjdGCKJ5V3yRyHuTtWoXlsRW0e6hDqVc/vLz+abtpz5yyhh7n+FOtLu+KfitUeNWG4YdanJFSSASBeFs4YUKC5UU+5g7s4CgUpol1Pp0l7cW0UfeSqql23wFzyHzT7VUABPPHlTDTYZJrSa4Rf2Svv64rpGTUdHOUYuVMuPZ7ULq+gn+tQCWJgONRjiyNvmpWmWkIos+NBgSMW/l/KntWw+Kshypc3QBR8R8z96FDFMcxGmGtwx3WmTwuwwyHA9cU/rN+1mtXSavcW8blUQ45+lB9DpDjRbz6jTYbBzvHOEPtvj+/SnPa6wtLaxCwYM4Qsr8ROy/8AP6VVNGuWjvdjgyEdevT+dWG9uOLS37+ZFVH27xcEc+vsajkmpl0ZKUP4R2iXivGjg+Ft96tlpdKVzWc9lrqM95A5woOV686uMWUCgE+I+eMUuWL5GwSTiTt3qEMcJlfY4xyqqalq1oUIQqXwdtiaj7u5uL6N1M7JhiGypxjyzUloGgz3IVo44YQwHDPcYLOPQDl84plAV5atdIjLHUZnlVLm3eWMElGBII88EchSOoXN2b1ltoZVhjYkYB3+TV/TQb+ISKt7ZOFHJhtj2PvSFzo8id4b7WbW34QSVjXb9TXSv0c7T+xVrDX/AKeZYpwVcgEZ8/KrFBrqSk924ZAMsvp1PxVd1uzsDhLbU0vn4sCMxENw7ZPFyHU0VrZdzfw28TbcG2+Tk7bn2yfiucoKjosj87RKa/c92HXkoBJ9qR7J6osGkCNipklUArjJ3zn+NQfbLU0aa5SEFlOVUg0j2PuHllSxjODO4U5P/HSjHG3AWWZLJTNg0j/4u19YlP3Gad1xCixQpGgwqqAPYV3VaVIkbt2CjoqOiARrOPxBsO41JbtR4Jxv7itHzUD21sPrtFk4BmSLxLSyWh09mU5wc5xjrR6tqstxYfSu3jHNiM56jHl1om8jzqJ1IMrbH83SlitmyNpDW3uGhlDDPT0OMVaLTtGMKrNgAjIBwByqojiZj4d/IUpFLtkOVYDK486eUFLs4wyOPRpGmy/U3dxKCvdSc1IGfb2/nTGdo7a6J4Sij5GPP0qu6PqUlu5ZJiucHiGwPnVmNh9fCsisQp/Pg7tt51NKPGRbjnzjrslbHWdLjgAnuODpgKTmmmo63pjI7QyliDvlTnPSoaWxDzhUjbgj6sfzHyB+a7k0dljAdXLMpYs4Bx6fb5pvbW2H1Ml9EhpJinnDtkbcQB6mkNS1tLG9lliKlynBGR0O+/64ruWSKy011LDiUe+Mnl51SLydXlZ84JGwU7DGcUuOHKViZsnGKXkK5mMjBTITgnBzU72GuIoNbhlKgv04mwc1Wivj4djttw4996muzriPULUxguVkDDkMemfvVaRFbbs3+FuONWxsQMe1KU102Qy26lVceWR8U7O2x2rUdAqFGKL4NagiI50HUOrK3IjegKDnwGgEy3tfpgtdTkaEARHfAql6oM4xvtyxWi9sWKSyBh+blVEvYRIrbb0i7GkriQHesGyFXixt1xRjZfGucnIANdSoVyRgHHLNHJwjPg8QyBxdfjn5V1JQQSCOQbL65x/fWrDa628Nt3ccjcWQAAcjmOn25VWuRBUYbckg89/KiZvEACNs5AFJKCl2PDI47Ref8Yts28iqCq8RYOeb7YJ88ZNczdpJ5PzQxcSlUDMxyMDG23Xc7+VUkyHhBUrz5UYkKcQyQcH06Uvpof13dkrqeqS3F20shB4TjOMZ86inyCzcxyJNcL+0IwfF967/AM3E3CGPPJFPGKRzlJydsUTl4PCORGd6muzYuJb+BYlLYkAIzji3BAzUHGuW4ee33q//AIc6Y8k5nYPw7jJBUDHtz32x7UwF2atpEbR2Y42C4ODjqaevgomDk550hbuFi4SrEbc+dKmTiUZAGKB0pnUjEvwg4o8uNu8A9KSZiW4sb12XUnJQ596wWNRR4yKKikkSKJpJHVEUZZmIAA9TQCULt8p+oUqNsVRLmeOFeKQ7eXnVo7b9q9JuGMOnM11KP9Vdox7Hr8fes8mleVy7tk0vC2aWVLoOYtc95KB18unrSIU5cKCSd8edO9PYd/3bDwSDhPv0pxd6WygNCQynmOX99Kfo497IrA4cjiB88UD+UYYeXKlGVw2OA8/PnXBGcKNvnG9GwM5ZMDB26ee9AgE77CugSMMBsTRHDZzt6eVYASZB2A+TXUakMSNyPMZo1DEEKASv/FL29tJM5UcyCSccsVmMHb921xGs74iZgrE8gM9fmvQHZnSks9OiEaqCBsQAMD4wPOsNvrIJp8cqrgqQH2PJvM/HlU52U7e6joYjt7stfaeNhEzeOP1Vv5Hb2oJ2N8XTNuKFSFIoiDnFRGhdrNF1wQpZXqC4zvby+CT7Hn8ZqbX/AK+/71EezhVJ5A0fdv8AumugSEY+bVwGOOZ+9AxQNd/EnTbINHpMZv5htx5KRL882+PvWca72i1XXpM6jdM0QOVgTwxr/wCPX3OTUTnPU0dGjk5NhE0KB54o6IpyMhsg4xvV27N2iamySSr+zIy2/wAYqlGrR2P1T6BJRKHMHEMsBkKT/XH6Vzy3xtHXDx5+4uOqdmrC5tiEiWLfOUQfxqmav2UubWJXgTvAQAwGBg/zrR7S6jvEXuH44zu59KSu52+tVDATA4/y7lqlhKSLckYsyhtEvAVPcMsbDPn/AH0pW27PzyzIj+Hjbhx5b1oc0sQtzEkZmWJvBxeFlyf4f0pFCgRri4hIeMeEMD+Y+uN67eprZMsScinJ2dVZXj4s4A9x8VNxaRBDFxhF4SPCEHCMYxjHxXJneRe+t4nMne+J2G2/T29KeXMkpgZAPEh3GeXLlXKUpHaEYDdYBeabe2Ucbg/maRI+LC4wAPXP8/WqBgrscgjYg9DV+0ZTHPJHI8kaf6sveqAFHiAAO/EWHMdPeqn2itRa6pJwIyRSeONGcOyj1P6/NdcT3RwzLVkcNiPMHIPkatOg9vde0YLGLn6y3H+ldePHoG5j9aqldCqDhZsejfiZpF6gj1FH0+UncsOOPP8AuA2HuBVth1GwmiWWG9tnRhlWWUEH5rzgDXJjQnJRSfahQymICQg867WVTz50360KJzHmQWHtR0hbk5NOKwQjUv2XV5tT+nURsZFJw65yRuMVE0/0CVotYte7ClpH7oBuWX8P86WatMMXUkaLJfy2dkZhbiRBlWCtjh9falLW5lmjtZ7e441B4Fjfy9a61LTF1Ky7y2IjuItsKTgjHL2pGRltre0F8giuc8PHGvhdfX4+ajhXRdNu78DlUL386TWYDEeF02wPPJ2oBHeRI5QZY1ZliZhszdQT+g+acRI63HEs3eq48TZyPg05a4tXBt43h70ghEz1FK3uh0tWVi4tLtLF+8dIIzPnuwMEb86ai6hKxhWLNLkkHnnlv8fwqUvLeQQTvqrDjGeHhOOL1/4qHS5iC23cwcKqrK7sPTff5p3sRXEV0u2NxeNI1vHL3dwoOHAdsDOAM7jzqM7a2EoledIU3IlfhUB0GeE5AHLPDy/rUrpHdxzKswgkM0qnhcYYEsOTY8O/PcdK47VwlkwzHLQOS6qeFSFJ3PlnAI6D2rY3s2ZaooFCgN/P5oVaQALBRuaMOnVhREcQxTPJHOsYePGr8xvSLQfumnFA1gCMKFSc0sKB6UfSsYBo4pRBKkzLxLGwYr5gHOKKuelYJsFpey20ZkDfUOueNOLxglth6+58t+VO+90+57qKYq8hP/SQ8Sqfeqv2QY/4CTk54Bvn/dViYAz2RI3yd/8Axrz3qVHox90bOtT7iNG7zgRlBTu+Sgep6ZppYqwvT3duxIPhDIpUbc8j251zdu3+FyniOWL8RzzoyzLe6QFJA4hsD6U9cX/QXyW/A91iFZJnSV4yhXxITnlzqt3ccKlLKNwYeJQGzyUnc589vtVudF+uk8I/IOn+6oC6VQ1hgAfsn6elJ5Oj6G8oEVwqqoIdkB4E2bh269Twg+x59KW1m3dLWFgi2YilYZA4w3E2B5eDP5vMA+1HKoC2xAGfp5N/aXakLh3bR4FLMQLnABPIcY/qaKdNHNq0Z9qUC299NFGHCKRw95+bBAPmfPnncU1qc7VgC600AAD/AAm05f8A5ioSrl0QPsKk2hVmJ33pSgaID//Z'}}
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


export default Nipseyhussle;
