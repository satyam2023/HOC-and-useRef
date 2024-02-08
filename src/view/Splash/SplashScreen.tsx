import React from 'react'
import { Image, SafeAreaView, StatusBar } from 'react-native'
import Glyphs from '../../assets/Glyph'
import styles from './Style/Style'

const SplashScreen = () => {
  return (
    <SafeAreaView style={{display:'flex'}}>
        <StatusBar backgroundColor={'#FFFFFF'}/>
        <Image source={Glyphs.Splash} style={styles.img}/>  

    </SafeAreaView>
  )
}

export default SplashScreen