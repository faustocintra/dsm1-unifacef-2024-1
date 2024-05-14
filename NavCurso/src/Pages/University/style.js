import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C589C',
    padding: 8
  },
  card: {
    gap: 20,
  },
  student: {
    alignItems: "center",
    flex: 1,
    textAlign: "center",
    justifyContent: "center"
  },
  profileImg: {
    alignItems: "center",
    justifyContent: 'center',
    height: 80,
    width: 300,
  },
  title: {
    color: '#ffff',
    paddingTop: 28,
    fontWeight: 'bold',
    fontSize: 48
  },
  text: {
    color: '#fff',
    paddingBottom: 16,
    fontWeight: '300',
    fontSize: 20
  },
  ContainerImg: {
    marginBottom: 20,
    height: 100,
    width: 400,
  },
  profileImg: {
    height: 100,
    width: 400,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles