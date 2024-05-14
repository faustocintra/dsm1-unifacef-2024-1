import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import styles from './style';

export default function Class({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Curso</Text>
      <StatusBar style="auto" />
      <View style={styles.students}>
        <TouchableHighlight
          style={styles.profileImgContainer}
        >
          <Image source={{ uri: "https://i.pinimg.com/564x/59/07/31/5907310e24002bff96b3c4ee848d1fa3.jpg" }} style={styles.profileImg} />
        </TouchableHighlight>

        <View>
          <Text style={styles.subtitle}>Curso: Engenharia de Software</Text>
          <Text style={styles.subtitle}>Instituição: Uni-FACEF Centro Universitário Municipal de Franca</Text>
          <Text style={styles.subtitle}>Semestre: 5º</Text>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")} >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}