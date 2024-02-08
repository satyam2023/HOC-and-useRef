
import React, { FC, useRef, useState } from "react";
import { TextInput, StyleSheet, Keyboard, Text, View } from "react-native";
import styles from "./Style/style";
import Glyphs from "../../assets/Glyph";


interface InputProps {
    placeholder: string;
    ChangeText: Function,
    keyboardType: any,
    secureText: boolean,
    maxLength: number,

}

const InputText: FC<InputProps> = (props): JSX.Element => {
    const [keyboard,setkeyboard]=useState<boolean>(true)
    const [float,setfloat]=useState<boolean>(false)
    
    
    Keyboard.addListener('keyboardDidHide', () => {
        setkeyboard(false);
    })
    function handle() {
        setkeyboard(true)
        setfloat(true);
    }
    function handleone() {
        setfloat(false);
    }
    
    return (
        <>
        { (float==true) &&
            <View style={{}}>
                <Text style={{color:'#00000080',position:'absolute',top:-7,left:56,fontWeight:'400',fontSize:12,lineHeight:15,backgroundColor:'#FFFFFF' }}>
                    {props.placeholder}</Text>
            </View>
            
        }
        <TextInput
            
            placeholder={props.placeholder}
            placeholderTextColor={'#110F2480'}
            onFocus={handle}
            onBlur={handleone}
            onChangeText={
                (text: string) => {
                    props.ChangeText(text);
                   
                }
            }
            style={!float?styles.TextInputs:styles.TextInputsfloating}
            inputMode={props.keyboardType}
            secureTextEntry={props.secureText}
            maxLength={props.maxLength}
        />  
        </>
          
    );
};

export default InputText;