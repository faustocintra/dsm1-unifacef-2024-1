import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 130,
    justifyContent: "center",
    backgroundColor: '#445AE3',
    borderRadius: 20,
    // position: 'relative',
    // margin: 'auto',
    fontFamily: 'inherit',
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
  },
  jobText: {
    fontWeight: '400',
    justifyContent: "space-between",
    color: 'white',
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 16,
  },
});

export default styles