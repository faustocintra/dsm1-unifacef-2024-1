import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles"; 

export default function Homepage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Sobre Mim"
          onPress={() => navigation.navigate("AboutMe")}
          color="#007bff" 
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Curso"
          onPress={() => navigation.navigate("Course")}
          color="#007bff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Instituição"
          onPress={() => navigation.navigate("Institution")}
          color="#007bff" 
        />
      </View>
    </View>
  );
}
