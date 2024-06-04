import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function InstagramLogin({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder="Nome de usuário, email ou número">
      </TextInput>
      <TextInput style={styles.input}
      placeholder="Senha">
      </TextInput>
      <TouchableOpacity
        style={styles.button}
        title="Entrar"
        onPress={() => navigation.navigate("Home")}
      >
        <Text style = {styles.btnEntrarTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    input: {
        width: "83%",
        backgroundColor: "#f0f0f0",
        border: "solid",
        borderColor: "#efe5e5",
        padding: 15,
        borderWidth: 1.5,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 19
    },
    button: {
        width: "83%",
        backgroundColor: "#00bbff",
        borderRadius: 30,
        padding: 15,
        margin: 10,
        marginBottom: 15
    },
    btnEntrarTexto: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20
    },
    
    });