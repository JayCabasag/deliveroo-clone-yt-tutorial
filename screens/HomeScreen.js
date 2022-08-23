import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from "@react-navigation/native"
import {AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserAddIcon, UserIcon} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {

  const navigation = useNavigation();
    
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image 
            source={{
                uri: 'https://links.papareact.com/wru'
            }}

            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now !</Text>
            <Text className='font-bold text-xl'>Current Location 
            <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon size={20} color="gray"/>
            <TextInput placeholder='Restaurants and Cuisines'
                keyboardType='default'
            />
        </View>
        <AdjustmentsIcon size={25} color="#00CCBB"/>
      </View>

      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
            paddingBottom: 100
        }}    
      >
            {/* Categories */}
                <Categories />

             {/* Featured Row */}
                <FeaturedRow 
                    id=''
                    title='Featured'
                    description='Paid placements from our partners'
                    imageUrl='https://links.papareact.com/gn7'
                    featuredCategory='featured'
                />
                 <FeaturedRow 
                    id=''
                    title='Tasty Discounts'
                    description="Everyone's been enjoying these juicy discounts!"
                    imageUrl='https://links.papareact.com/gn7'
                    featuredCategory='featured'
                />
                 <FeaturedRow 
                    id=''
                    title='Offers near you!'
                    description='Why not support you rlocal restaurant tonight?'
                    imageUrl='https://links.papareact.com/gn7'
                    featuredCategory='featured'
                />
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen