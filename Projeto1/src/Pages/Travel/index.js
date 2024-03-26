import { ScrollView, StatusBar, Text, View } from "react-native";
import styles from "./style";
import Card from "./card";

export default function Travel() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Valor gasto de combustível</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.card}>
          <Card distance={100} priceAlcool={9} priceGasoline={30} />
          <Card distance={80} priceAlcool={9} priceGasoline={10} />
          <Card distance={20} priceAlcool={9} priceGasoline={10} />
          <Card distance={120} priceAlcool={9} priceGasoline={40} />
        </View>
      </ScrollView>
    </View >
  )
}