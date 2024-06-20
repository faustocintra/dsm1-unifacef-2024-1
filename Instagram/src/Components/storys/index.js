import { Image, Text, Pressable, View } from "react-native";
import styles from "../storys/style";
import { LinearGradient } from "expo-linear-gradient";

const Story = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.highlight}>
        <LinearGradient
          colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf", "#4f5bd5"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <View style={styles.blackBorder}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
        </LinearGradient>
      </Pressable>
      <Text>{name}</Text>
    </View>
  );
};
export default Story;
