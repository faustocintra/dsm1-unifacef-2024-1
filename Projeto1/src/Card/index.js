import React from 'react'
<<<<<<< HEAD
import { Text, View } from 'react-native'
=======
import {Text, View } from 'react-native'
>>>>>>> 34e6d998a9cea15b7f9085df989f6c6d3105b710
import styles from './styles'

const Card = ({title, children}) => {
  return <View style={styles.card}>
<<<<<<< HEAD
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.children}>{children}</Text>
  </View>
}

=======
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>  
    <Text style={styles.children}>{children}</Text>
  </View>
  
}



>>>>>>> 34e6d998a9cea15b7f9085df989f6c6d3105b710
export default Card