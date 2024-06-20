import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CustomIcon from '../components/CustomIcon';

const FeedScreen = () => {
    const stories = [
        { id: 1, imageUrl: require('../../assets/images/story1.jpg'), name: 'Seu story' },
        { id: 2, imageUrl: require('../../assets/images/story2.jpg'), name: 'Amigo' },
        { id: 3, imageUrl: require('../../assets/images/story3.jpeg'), name: 'Amigo' },
        { id: 4, imageUrl: require('../../assets/images/story4.jpeg'), name: 'Amigo' },
    ];

    const posts = [
        { id: 1, imageUrl: require('../../assets/images/post1.jpg'), likes: 'Fulano e outras pessoas', description: 'Descrição da foto' },
        { id: 2, imageUrl: require('../../assets/images/post2.jpg'), likes: 'Beltrano e outras pessoas', description: 'Imagem 2' },
        // adicione mais posts conforme necessário
    ];

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.logo}>Instagram</Text>
                <View style={styles.icons}>
                    <CustomIcon name="heart-outline" size={24} color="#000" style={styles.icon} />
                    <CustomIcon name="chatbubble-outline" size={24} color="#000" style={styles.icon} />
                </View>
            </View>
            <View style={styles.storyContainer}>
                {stories.map(story => (
                    <View key={story.id} style={styles.story}>
                        <Image source={story.imageUrl} style={styles.storyImage} />
                        <Text style={styles.storyName}>{story.name}</Text>
                    </View>
                ))}
            </View>
            {posts.map(post => (
                <View key={post.id} style={styles.postContainer}>
                <Image source={post.imageUrl} style={styles.postImage} />
                <View style={styles.postLikesContainer}>
                    <CustomIcon name="heart-outline" size={24} color="#000" style={styles.icon} />
                    <Text style={styles.postText}>Curtido por {post.likes}</Text>
                </View>
                <Text style={styles.postDescription}>{post.description}</Text>
            </View>
        ))}
    </ScrollView>
);
};

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
},
logo: {
    fontSize: 24,
    fontWeight: 'bold',
},
icons: {
    flexDirection: 'row',
},
icon: {
    marginLeft: 16,
},
storyContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
},
story: {
    alignItems: 'center',
    marginHorizontal: 8,
},
storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 4,
},
storyName: {
    fontSize: 12,
},
postContainer: {
    marginVertical: 16,
    alignItems: 'center',
},
postImage: {
    width: '100%',
    height: 400,
},
postLikesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
},
postText: {
    fontWeight: 'bold',
    marginLeft: 8,
},
postDescription: {
    color: '#555',
},
});

export default FeedScreen;
