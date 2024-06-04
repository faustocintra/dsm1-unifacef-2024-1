import {
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "./node_modules/react-native"
import { FontAwesome6 } from "./node_modules/@expo/vector-icons"
import { styles } from "./style"

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"FFF"} translucent={false} />
      <Text style={styles.language}>Português(Brasil)</Text>
      <Image
        source={require("./assets/logo-instagram.png")}
        style={styles.logo}
      />
      <TextInput
        placeholder="Celular, nome de usuário ou email"
        style={styles.input}
      />
      <TextInput placeholder="Senha" style={styles.input} />

      <Pressable
        style={styles.buttonEntrar}
        onPress={() => navigation.navigate("Tela Inicial")}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: 600 }}>
          Entrar
        </Text>
      </Pressable>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              color: "#474747",
              marginTop: 10,
              fontWeight: 500,
            }}
          >
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.buttonCadastrar}>
          <Text
            style={{ color: "#1E90FF", textAlign: "center", fontWeight: 600 }}
          >
            Criar nova conta
          </Text>
        </Pressable>
        <View style={styles.meta}>
          <FontAwesome6 name="meta" size={14} color="grey" />
          <Text style={{ color: "grey", fontWeight: 600, marginLeft: 5 }}>
            Meta
          </Text>
        </View>
      </View>
    </View>
  )
}
