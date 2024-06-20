import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.titulo}>Instagram</Text>
        </Pressable>
      </View>
      <View style={styles.container__icons}>
        <View>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
        <View>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};
export default header;
