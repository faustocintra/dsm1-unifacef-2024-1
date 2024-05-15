import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Image } from "react-native-web";

const Curso = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={"../../assets/Curso.jpg"} style={styles.image} />
      <Text style={styles.cursoTitle}>Engenharia de Software</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Meu App")}>
        <Text style={styles.btnText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  cursoTitle: {
    fontSize: 30,
    margin: 10,
  },
  btn: {
    backgroundColor: '#1E35C6',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Curso;