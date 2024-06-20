import { Pressable, Text, View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Header = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
    },
    iconRow: {
      flexDirection: 'row',
      gap: 20
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold'
    }
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("login")}>
        <Text style={styles.text}>
          Instagram
        </Text>
      </Pressable>
      <View style={styles.iconRow}>
        <AntDesign name="hearto" size={24} color="black" />
        <FontAwesome5 name="facebook-messenger" size={24} color="black" />
      </View>
    </View>
  )
}

export default Header;
