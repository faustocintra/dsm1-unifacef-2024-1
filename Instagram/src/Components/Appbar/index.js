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
            uri: "https://avatars.githubusercontent.com/u/106411734?s=96&v=4",
          }}
        />
      </Pressable>
    </View>
  );
};
export default Appbar;
