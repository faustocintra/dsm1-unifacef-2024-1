import React from 'react';
import { Image, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

const StoryItem = ({ image, name }) => {
  const styles = StyleSheet.create({
    imageContainer: {
      gap: 8,
      alignItems: 'center',
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 40,
      borderWidth: 2,
      borderColor: '#ff69b4',
    },
    text: {
      textAlign: 'center',
    }
  });

  return (
    <View style={styles.imageContainer}>
      <TouchableHighlight underlayColor="#DDDDDD">
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableHighlight>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default StoryItem;
