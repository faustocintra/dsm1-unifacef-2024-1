import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ title, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.children}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  children: {
    width: "100px",
    height: "100px",
  },
});

export default Card;