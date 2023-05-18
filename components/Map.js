import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from "react-native-maps";import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';


const Map = () => {

  const origin = useSelector(selectOrigin);
  return (
    <MapView
    style= {tw`flex-1`}
    mapType="mutedStandard"
    initialRegion = {{
        latitude:47.560539,
        longitude: -52.712830,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    }}

    >

      {origin?.location &&(
        <Marker
        coordinate={{
          latitude:origin.location.lat,
          longitude:origin.location.lng,
        }}
        
        />
      )}



        
    
    </MapView>


  )
}

export default Map

const styles = StyleSheet.create({})