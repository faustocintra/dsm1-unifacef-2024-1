import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import styles from './style';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre mim</Text>
      <StatusBar style="auto" />
      <View style={styles.students}>
        <View>
          <Text style={styles.subtitle}>Nome: Danilo Nogueira</Text>
          <Text style={styles.subtitle}>Telefone: (16)992667778</Text>
          <Text style={styles.subtitle}>E-mail: danilo.nogueira1802@@gmail.com</Text>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")} >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}