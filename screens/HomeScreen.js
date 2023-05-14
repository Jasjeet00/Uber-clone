import { StyleSheet, Text, View, SafeAreaView,Image, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>

        <Image 
        style={{
            width:130,
            height:100,
            resizeMode:"contain"
        }}
        source={{
            uri:"https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
        }}
        />

        <NavOptions/>

        

        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})