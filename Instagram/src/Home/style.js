import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    gap:16,
    alignItems: "center",
    width: "100%",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
    position: "absolute",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  feed: {
    flex: 1,
    width: "100%",
    marginTop: 100, // Ajuste conforme necessário
    marginBottom: 60, // Ajuste conforme necessário
    backgroundColor: "#fff", // Definir a cor de fundo para evitar problemas de sobreposição
  },
  post: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postUserInfo: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
  },
  location: {
    color: "#888",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  postFooter: {
    padding: 10,
  },
  likes: {
    fontWeight: "bold",
  },
  caption: {
    marginVertical: 5,
  },
  comments: {
    color: "#888",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
