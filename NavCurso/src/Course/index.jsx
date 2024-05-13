import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default function Curso() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Curso</Text>
        <Image
          source={require('https://imgur.com/a/TgdQ4HX')}
          style={styles.image}
        />
        <Text style={styles.courseName}>Engenharia de software</Text>
        <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable>
      </View>
    );
  }
