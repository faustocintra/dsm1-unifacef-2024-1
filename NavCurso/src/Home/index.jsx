import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SobreMim")}>
        <Text style={styles.btnText}>Sobre mim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Curso")}>
        <Text style={styles.btnText}>Curso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Instituicao")}>
        <Text style={styles.btnText}>Instituição</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    alignItems: 'center',
    justifyContent: 'center',
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

export default HomePage;