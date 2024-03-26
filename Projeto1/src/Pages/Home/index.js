import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades Mobile</Text>
      <Text style={styles.name}>Eder Junior</Text>
      <Text style={styles.code}>Código: 24323</Text>
      <Text style={styles.course}>Curso: Engenharia de Software</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("average")} >
          <Text style={styles.buttonText}>Média dos alunos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("travel")} >
          <Text style={styles.buttonText}>Viagem</Text>
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

