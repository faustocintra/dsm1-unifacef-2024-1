import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C589C',
    padding: 8,
    borderRadius: 8,
  },
  card: {
    gap: 20,
  },
  text: {
    color: '#ffff',
    paddingTop: 50,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 28
  },
  textInput: {
    borderColor: '#888',
    borderWidth: 1
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  subTitle: {
    fontSize: 20,
    padding: 2
  },
});

export default styles