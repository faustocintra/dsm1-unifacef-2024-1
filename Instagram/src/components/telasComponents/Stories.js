import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Stories = () => {
  const storyInfo = [
    {
        id:1,
        name: 'Your Story',
        image: require('../../storage/images/userProfile.jpg')
    }
  ]

  return (
   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingVertical: 20}}>
    {
        storyInfo.map((data, index) => {
            return (
                <TouchableOpacity key={index}>
                    <View>
                    
                    </View>
                </TouchableOpacity>
            )
        })
    }


   </ScrollView>
  )
}

export default Stories