import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingTop: 35
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  logo: {
    width: 100,
    height: 50,
    objectFit: 'contain'
  },
  stories: {
    height: 120,
    flexDirection: 'row'
  },
  storyCirculo: {
    flex:1,
    alignItems: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 70,
    borderColor: 'white',
    borderWidth: 3,
  },
  linearGradient: {
    height: 80,
    width: 80,
    borderRadius: 65,
    marginHorizontal: 4,
  },
  storyText: {
    marginTop: 7,
    fontSize: 12,
  },
  post: {
    marginVertical: 7,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5
  },
  postProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postUsername: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 435,
  },
  postDescription: {
    padding: 10,
  },
  iconPost: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  likePost: {
    marginHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  textBold: {
    fontWeight: 'bold',
  },
  iconBook: {
    marginLeft: 200
  }
});

export default styles;
