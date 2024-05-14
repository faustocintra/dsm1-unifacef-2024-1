import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import styles from './style';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre mim</Text>
      <StatusBar style="auto" />
      <View style={styles.students}>
        <TouchableHighlight
          style={styles.profileImgContainer}
        >
          <Image source={{ uri: "https://avatars.githubusercontent.com/EderJrDev" }} style={styles.profileImg} />
        </TouchableHighlight>

        <View>
          <Text style={styles.subtitle}>Nome: Pedro Paulino Martiniano</Text>
          <Text style={styles.subtitle}>Telefone: (16)99128-9052</Text>
          <Text style={styles.subtitle}>E-mail: pedropmartiniano@gmail.com</Text>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")} >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}