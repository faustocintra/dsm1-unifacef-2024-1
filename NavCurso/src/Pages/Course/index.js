import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import curso from '../../../assets/curso'
import styles from './style';

export default function Course({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curso</Text>
      <StatusBar style="auto" />
      <View style={styles.student}>
        <TouchableHighlight
          style={styles.profileImgContainer}
        >
          <Image source={{ url: curso }} style={styles.profileImg} />
        </TouchableHighlight>

        <View>
          <Text style={styles.text}>Curso: Engenharia de Software</Text>
          <Text style={styles.text}>Instituição: Uni-FACEF</Text>
          <Text style={styles.text}>Semestre: 5º</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")} >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}