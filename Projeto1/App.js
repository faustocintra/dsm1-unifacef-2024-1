import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/Card";
import Student from "./src/Student";
import Student2 from "./src/Student2";
import Alunos from "./src/Alunos";
import Viagem from "./src/Viagens";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/*<Student />*/}
        {/*<Student2 name='Adalberto Alves' grade={6.5} grade2={7.3} />*/}
        <Alunos name='Adalberto Alves' grade={6.5} grade2={7.3} faltas={10}/>
        <Viagem distancia={350} precoEtanol={3.7} precoGasolina={5.1}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6096ba",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
