import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades Mobile</Text>
      <Text style={styles.name}>Igor Campos</Text>
      <Text style={styles.code}>Código: 24052</Text>
      <Text style={styles.course}>Curso: Engenharia de Software</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("about")} >
          <Text style={styles.buttonText}>Sobre mim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("course")} >
          <Text style={styles.buttonText}>Curso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("university")} >
          <Text style={styles.buttonText}>Instituição</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

