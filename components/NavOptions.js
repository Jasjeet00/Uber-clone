import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data=[
    {
    id:"123",
    title:"Get a ride",
    image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_858,h_483/f_auto,q_auto/products/carousel/UberX.png",
    screen:"MapScreen",
    },
    {
    id:"456",
    title:"Order food",
    image:"https://links.papareact.com/28w",
    screen:"EatsScreen",// Change later
    },

    
];


const NavOptions = () => {

  const navigation = useNavigation();
  return (

    <FlatList 
    data={data}
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
      <TouchableOpacity
       style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
       onPress={()=> navigation.navigate(item.screen)}
       >

        <View>
          <Image 
          style={{width:120, height:120, resizeMode:"contain"}}
          source={{uri:item.image}}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
          name="arrowright" 
          color="white" 
          type="antdesign"></Icon>
        </View>
        
      </TouchableOpacity>
    )}/>
      
    
   
  );
};

export default NavOptions;