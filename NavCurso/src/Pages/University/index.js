import { Image, Pressable, StatusBar, Text, TouchableHighlight, View } from "react-native";
import styles from "./style";

export default function university({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instituição de Ensino</Text>
      <StatusBar style="auto" />
      <View style={styles.student}>
        <TouchableHighlight
          style={styles.ContainerImg}
        >
          <Image source={{ url: "https://ava-grad.unifacef.com.br/pluginfile.php/1/core_admin/logocompact/300x300/1707216088/logo_unifacef_login.png" }} style={styles.profileImg} />
        </TouchableHighlight>

        <View>
          <Text style={styles.text}>Faculdade: Uni-Facef</Text>
          <Text style={styles.text}>Telefone: (16) 3713-4688</Text>
        </View>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>
      </View>
    </View>
  )
}