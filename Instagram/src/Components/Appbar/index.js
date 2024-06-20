import { View, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import styles from "./style";

const Appbar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Entypo name="home" size={26} color="black" />
      </Pressable>
      <Pressable>
        <Ionicons name="search" size={26} color="black" />
      </Pressable>
      <Pressable>
        <Feather name="plus-square" size={26} color="black" />
      </Pressable>
      <Pressable>
        <Octicons name="video" size={26} color="black" />
      </Pressable>
      <Pressable>
        <Image
          style={styles.image}
          source={{
            uri: "https://fastly.picsum.photos/id/290/200/300.jpg?hmac=kjRyFwJ6i5kuROjzxcs6QbXbBr8EptbH5AuVxtMxhQ0",
          }}
        />
      </Pressable>
    </View>
  );
};
export default Appbar;
