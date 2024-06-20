import { Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../posts/style";

const Posts = ({ perfil, name, post, descricao }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container__image}>
        <Image style={styles.image} source={{ uri: perfil }}></Image>
        <Text style={styles.text}>{name}</Text>
      </View>
      <Image style={styles.post} source={{ uri: post }}></Image>
      <View style={styles.container__icons}>
        <View style={styles.icons}>
          <AntDesign name="hearto" size={24} color="black" />
          <FontAwesome5 name="comment" size={24} color="black" />
          <Feather name="send" size={24} color="black" />
        </View>
        <Text style={styles.text}>
          {name}
          <Text style={styles.text__description}> {descricao}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Posts;
