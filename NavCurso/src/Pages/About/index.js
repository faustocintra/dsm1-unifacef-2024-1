import { Image, Text, TouchableOpacity, View } from 'react-native';
import Foto from '../../../assets/foto.png'
import styles from './style';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>

      <View style={styles.student}>
        <TouchableOpacity
          style={styles.ContainerImg}
        >
          <Image source={{ url: Foto }} style={styles.profileImg} />
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>Nome: Igor Campos</Text>
          <Text style={styles.text}>Telefone: (16)99142-1531</Text>
          <Text style={styles.text}>E-mail: igorpcampos2004@gmail.com</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")} >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}