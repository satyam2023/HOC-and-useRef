import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/Slice';

const HomeScreen = () => {
 const dispatch=useDispatch();
    function handletoken(){
     dispatch(setToken(null));
    }
  return (
    <>
   <Text style={{color:'red',fontSize:18,fontWeight:'600'}}>HomeScreen</Text>
   <TouchableOpacity onPress={handletoken} style={{backgroundColor:'black',height:30,width:100,alignSelf:'center',borderRadius:10,padding:3}}>
    <Text style={{color:'red'}}>CLear Token</Text>
   </TouchableOpacity>
    </>
  )
}

export default HomeScreen