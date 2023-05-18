import { StyleSheet, Text, View, SafeAreaView,Image, ImageBackground } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{ GOOGLE_MAPS_APIKEY} from "@env";
import {setOrigin, setDestination} from '../slices/navSlice';

import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const navigation = useNavigation();
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

        <GooglePlacesAutocomplete
          placeholder="Where From ?"
          styles = {{
            container:{
              flex:0,
            },
          }}
          onPress={(data, details = null)=>{
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
                
              })
            );
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}

          query={{
            key:GOOGLE_MAPS_APIKEY,
            language:"en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        
        />
          
       

        <NavOptions/>

        

        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})