import { Image, Pressable, StatusBar, Text, TouchableHighlight, View } from "react-native";
import styles from "./style";

export default function Institution({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instituição de Ensino</Text>
      <StatusBar style="auto" />
      <View style={styles.students}>
        <TouchableHighlight
          style={styles.profileImgContainer}
        >
          <Image source={{ uri: "https://ava-grad.unifacef.com.br/pluginfile.php/1/core_admin/logocompact/300x300/1707216088/logo_unifacef_login.png" }} style={styles.profileImg} />
        </TouchableHighlight>

        <View>
          <Text style={styles.subtitle}>Faculdade: Uni-Facef</Text>
          <Text style={styles.subtitle}>Telefone: (16) 3713-4688</Text>

        </View>

        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>

      </View>
    </View>
  )
}