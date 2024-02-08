import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    inputbox:{
        width:353,
        height:56,
        borderRadius:33,
        marginLeft:20,
        backgroundColor:'#F5F7F9',
        flexDirection:'row',
        marginBottom:16,
         
     },
     inputboxno:{
         width:353,
         height:56,
         borderRadius:33,
         marginLeft:20,
         backgroundColor:'#F5F7F9',
         borderWidth:1,
         borderColor:'red',
         flexDirection:'row',
         marginBottom:16,
     },
     btn:{
        backgroundColor:'#E6E6E6',
        height:45,
        width:'40%',
        borderRadius:30,
       alignSelf:'center',
       marginTop:10
     },
     contactImg:{height:200,
        resizeMode:'contain',
        alignSelf:'center',
        marginVertical:20
    },
    btntxt:{fontSize:18,
        color:'#3F7AF7BC',
        fontWeight:'700',
        alignSelf:'center',
        marginTop:7},
        eye:{
            position:'absolute',
            left:320,
            top:20
        }

});

export default styles;