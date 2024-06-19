import { Image, Text, TouchableHighlight, View } from "react-native";
import styles from "../storys/style";

const Story = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableHighlight>
      <Text>{name}</Text>
    </View>
  );
};
export default Story;
