import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}
    showsHorizontalScrollIndicator={false}
    >
        {/* Categroy card */}
      <CategoryCard 
        imageUrl='https://links.papareact.com/gn7' 
        title='Testing'
      />
      <CategoryCard 
        imageUrl='https://links.papareact.com/gn7' 
        title='Testing 2'
      />
      <CategoryCard 
        imageUrl='https://links.papareact.com/gn7' 
        title='Testing 3'
       />
        <CategoryCard 
        imageUrl='https://links.papareact.com/gn7' 
        title='Testing 3'
       />
        <CategoryCard 
        imageUrl='https://links.papareact.com/gn7' 
        title='Testing 3'
       />

    </ScrollView>
  )
}

export default Categories