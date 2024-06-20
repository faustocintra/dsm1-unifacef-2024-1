import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { Ionicons, Entypo, Feather, Octicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isActivePage = (pageName) => {
    return route.name === pageName ? styles.activeTab : styles.inactiveTab;
  };

  const isActivePageIcon = (pageName) => {
    return route.name === pageName;
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'around',
      paddingBottom: 20,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: '#ffffff'
    },
    activeTab: {
      paddingTop: 20,
      paddingHorizontal: 32,
      borderTopWidth: 2,
      borderColor: '#abcdef'
    },
    inactiveTab: {
      marginTop: 4,
      paddingTop: 16,
      paddingHorizontal: 32,
    },
    icon: {
      height: 24,
      width: 24,
      borderRadius: 16
    }
  });

  return (
    <View style={styles.container}>
      {['home', 'search', 'add', 'profile'].map((icon, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate(icon)}>
          <View style={isActivePage(icon)}>
            {icon === 'profile' ? (
              <TouchableHighlight>
                <Image style={styles.icon} source={{ uri: "https://avatars.githubusercontent.com/u/125435204?v=4" }} />
              </TouchableHighlight>
            ) : (
              <Ionicons name={`${icon}`} size={26} color={isActivePageIcon(icon)} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
