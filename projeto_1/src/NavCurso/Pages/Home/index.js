import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades Mobile</Text>
      <Text style={styles.name}>Danilo Nogueira</Text>
      <Text style={styles.code}>Código: 24157</Text>
      <Text style={styles.course}>Curso: Engenharia de Software</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("about")} >
          <Text style={styles.buttonText}>Sobre mim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("class")} >
          <Text style={styles.buttonText}>Curso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("institution")} >
          <Text style={styles.buttonText}>Instituição</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  code: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  course: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    padding: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

