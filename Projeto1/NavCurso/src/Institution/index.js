import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";
import unifacef from '../../assets/unifacef.png'

export default function Institution({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={unifacef} />
      <View>
        <Text>Uni-FACEF</Text>
      </View>
      <View>
        <Text>Telefone:</Text>
      </View>
      <View>
        <Text>(16) 3713-4688</Text>
      </View>
      <View style={styles.btn}>
        <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
      </View>
    </View>
  );
}
