import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Card = ({title, children}) => {
  return <View style={styles.card}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.children}>{children}</Text>
  </View>
}

export default Card