import React, { useEffect, useRef, useState } from 'react'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import InputText from '../../component/inputtext/InputText';
import styles from './Style/Style';
import Glyphs from '../../assets/Glyph';
import {handleSignup} from '../../utils/helper';

const SignUp = () => {
  console.log("UI Rendered.");
const [isPasswordVisibile,setIsPasswordVisible]=useState<boolean>(false);
const [isConfirmPasswordVisibile,setIsConfirmPasswordVisible]=useState<boolean>(false);
const details={
  name:useRef(''),
  email:useRef(''),
  contact:useRef(''),
  country:useRef(''),
  createPassword:useRef(''),
  confirmPassword:useRef('')
};








  return (
   <ScrollView style={{}} >
    <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'}/>
    <Image source={Glyphs.ContactForm} style={styles.contactImg} tintColor={'#110F2480'}/>
    <View style={{backgroundColor:'#FFFFFF'}}>
    <View style={styles.inputbox}>
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={Glyphs.Profile2User} style={{margin:16}} /></View>
    <InputText placeholder={'Enter name'} ChangeText={(text:string)=>{details.name.current=text}} keyboardType={"text"} secureText={false} maxLength={20}/>
    </View>

    <View style={styles.inputbox}>
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={Glyphs.Email} style={{margin:16}} /></View>
    <InputText placeholder={'Enter Email Id'} ChangeText={(text:string)=>{details.email.current=text}} keyboardType={"email"} secureText={false} maxLength={20}/>
    </View>

    <View style={styles.inputbox}>
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={Glyphs.Phone} style={{margin:16}} /></View>
    <InputText placeholder={'Enter Contact Number'} ChangeText={(text:string)=>{details.contact.current=text}} keyboardType={'numeric'} secureText={false} maxLength={20}/>
    </View>

    <View style={styles.inputbox}>
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={Glyphs.Location} style={{margin:16}} /></View>
    <InputText placeholder={'Enter Country Name'} ChangeText={(text:string)=>{details.contact.current=text}} keyboardType={"text"} secureText={false} maxLength={20}/>
    </View>

    <View style={styles.inputbox}>
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={Glyphs.Key} style={{margin:16}} /></View>
    <InputText placeholder={'Create Password'} ChangeText={(text:string)=>{details.createPassword.current=text}} keyboardType={"text"} secureText={isPasswordVisibile?true:false} maxLength={20}/>
    <TouchableOpacity style={styles.eye} onPress={()=>{setIsPasswordVisible(!isPasswordVisibile)}}><Image source={!isPasswordVisibile?Glyphs.Eye:Glyphs.Eyecut} /></TouchableOpacity>
    </View>


    <View style={styles.inputbox}>
    <View style={{ backgroundColor: '#E6E6E6', width: 0 }}><Image source={Glyphs.Key} style={{margin:16}} /></View>
    <InputText placeholder={'Confirm Password'} ChangeText={(text:string)=>{details.confirmPassword.current=text}} keyboardType={"text"} secureText={isConfirmPasswordVisibile?true:false} maxLength={20}/>
     <TouchableOpacity style={styles.eye} onPress={()=>{setIsConfirmPasswordVisible(!isConfirmPasswordVisibile)}}><Image source={!isConfirmPasswordVisibile?Glyphs.Eye:Glyphs.Eyecut} /></TouchableOpacity>
    </View>

    <TouchableOpacity accessibilityRole='button' onPress={()=>{handleSignup(details)}} style={styles.btn}>
     <Text style={styles.btntxt}>Sign Up</Text>
    </TouchableOpacity>

    </View>
   </ScrollView>
  )
}

export default SignUp;
