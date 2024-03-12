import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#445AE3',
    borderRadius: 20
  },
  gradientBackground: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardText: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  context: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }
});

export default styles