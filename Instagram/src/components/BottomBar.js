import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import * as Font from 'expo-font'

const BottomBar = () => {
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'MaterialIcons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),
      });
    };

    loadFont()
  }, [])

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarItem}>
        <Text style={styles.icon}>&#xe88a;</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarItem}>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarItem}>
        <AntDesign name="pluscircleo" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarItem}>
        <FontAwesome5 name="film" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarItem}>
        <Image
          source={require('../../assets/my-profile.jpeg')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomBarItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontFamily: 'MaterialIcons', 
    fontSize: 24, 
    color: 'black', 
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
})

export default BottomBar