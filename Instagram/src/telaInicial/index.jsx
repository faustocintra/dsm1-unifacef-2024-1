import { StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity, Pressable, ScrollView } from "react-native"
import storys from "../database/storys"
import Storys from "../components/storys"
import Post from "../components/posts"
import Footer from "../components/footer"
import Header from "../components/header"

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"FFF"} translucent={false} />
      <Header />
      <ScrollView>
        <Storys />
        <Post />
      </ScrollView>
      <Footer />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
})