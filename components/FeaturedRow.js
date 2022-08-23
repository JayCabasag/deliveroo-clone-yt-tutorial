import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description, imageUrl, featuredCategory}) => {
  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon size={20} color='#00CCBB'/>
        </View>
        <Text className='text-xs text-gray-500 p-4'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >   
            <RestaurantCard 
                id='123'
                imageUrl='https://links.papareact.com/gn7'
                title='Title'
                rating='3.4'
                genre='Japanese'
                address='Taguig'
                short_description='No description this time'
                dishes={[]}
                long='00'
                lat='00'
            />

            <RestaurantCard 
                id='123'
                imageUrl='https://links.papareact.com/gn7'
                title='Title'
                rating='3.4'
                genre='Japanese'
                address='Taguig'
                short_description='No description this time'
                dishes={[]}
                long='00'
                lat='00'
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow