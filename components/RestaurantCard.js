import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'


const RestaurantCard = ({id, imageUrl, title, rating, genre, address, short_description, dishes, long, lat}) => {
  return (
    <TouchableOpacity className='mr-4'>
        <Image 
        source={{uri: imageUrl}} 
        className='h-36 w-64 rounded-sm'
        />
        <View className="px-3 pb-4">
            <Text className='font-bold  text-lg pt-2'>{title}</Text>

            <View className='flex-row items-center space-x-1'>
                <StarIcon color="gray" opacity={0.5} size={22}/>
                <Text className="text-xs">{rating} . {genre}</Text>
            </View>
            <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color="gray" opacity={0.5} size={22}/>
                <Text className="text-xs">{'Nearby'} . {genre}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard