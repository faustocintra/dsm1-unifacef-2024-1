import { useState } from "react";
import { Alert, Button, ScrollView, StatusBar, Text, TextInput, View } from "react-native";

import styles from "./style";

export default function Work() {

  const [values, setValues] = useState({ a: 0, b: 0, c: 0 }); // obj with values
  const [delta, setDelta] = useState(null); // delta value
  const [resultBhaskara, setResultBhaskara] = useState({ x1: null, x2: null }) // bhaskara value

  const handleButtonPress = () => {
    // console.log(values)
    const deltaValue = (values.b * values.b) - (4 * values.a * values.c);
    // console.log(deltaValue)

    if (deltaValue <= 0) {
      Alert.alert("não há raízes válidas para a equação de 2º grau."); // if value <= 0
      setValues({ a: 0, b: 0, c: 0 });
      return; // stop function
    }
    setDelta(deltaValue);
    // bhaskara values
    const valueX1 = ((-values.b) + Math.sqrt(deltaValue)) / (2 * values.a);
    const valueX2 = ((-values.b) - Math.sqrt(deltaValue)) / (2 * values.a);
    //setando os valores
    setResultBhaskara({
      x1: valueX1.toFixed(2),
      x2: valueX2.toFixed(2)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Equação do 2º grau</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.horizontal}>
            <Text style={styles.subTitle}>Valor A</Text>
            <TextInput
              style={styles.textInput}
              value={values.a}
              onChangeText={(value) => setValues(prevValues => ({ // add new value in obj
                ...prevValues,
                a: parseInt(value)
              }))}
              inputMode="decimal"
              keyboardType="decimal-pad"
            />
          </View>
          <View style={styles.horizontal}>
            <Text style={styles.subTitle}>Valor B</Text>
            <TextInput
              style={styles.textInput}
              value={values.b}
              onChangeText={(value) => setValues(prevValues => ({// add new value in obj
                ...prevValues,
                b: parseInt(value)
              }))}
              inputMode="decimal"
              keyboardType="decimal-pad"
            />
          </View>
          <View style={styles.horizontal}>
            <Text style={styles.subTitle}>Valor C</Text>
            <TextInput
              style={styles.textInput}
              value={values.c}
              onChangeText={(value) => setValues(prevValues => ({// add new value in obj
                ...prevValues,
                c: parseInt(value)
              }))}
              maxLength={1}
              inputMode="decimal"
              keyboardType="decimal-pad"
            />
          </View>
          <View style={styles.horizontal}>
            <Button title="Calcular"
              onPress={handleButtonPress}
            />
          </View>
          {delta && ( // if delta value > 0 , show results
            <>
              <View style={styles.horizontal}>
                <Text style={styles.subTitle}>Valor do Delta: {delta} </Text>
              </View>

              <View>
                <Text style={styles.subTitle}>Resultado da formula de Bhaskara: </Text>
                <Text style={styles.subTitle}>Valor de x1: {resultBhaskara.x1} </Text>
                <Text style={styles.subTitle}>Valor de x2: {resultBhaskara.x2} </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View >
  )
}