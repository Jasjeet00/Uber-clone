import { View, Text } from 'react-native'
import React from 'react'


const data=[
    {
    id:"123",
    title:"Get a ride",
    image:" ",
    screen:"MapScreen",
    },
    {
        id:"456",
        title:"order food",
        image:"",
        screen:"EatsScreen",// Change later
    },

    
];


const NavOptions = () => {
  return (
    <View>
      <Text>NavOptions</Text>
    </View>
  )
}

export default NavOptions