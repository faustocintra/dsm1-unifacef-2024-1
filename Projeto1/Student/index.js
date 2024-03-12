import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const Student = ({ name, grade1, grade2 }) => {

    const media = (grade1 + grade2) / 2

  return (
    <View style={styles.student}>        
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>    
        </View>           
        <Text style={styles.children}>{grade1}</Text>
        <Text style={styles.children}>{grade2}</Text>
        <Text style={styles.children}>{media}</Text>
    </View>
  )
}

export default Student;