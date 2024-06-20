import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    width: 80,
    height: 42,
    resizeMode: 'contain',
  },
  storyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginTop: 5,
  },
  storyText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },
  storyImageWithAura: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  storyWithAura: {
    width: 48,
    height: 48,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  profileContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 5,
  },
  profileIcon: {
    width: '100%',
    height: '100%',
  },
  publicationContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  publicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  publicationIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  publicationUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  publicationThreeDotsContainer: {
    marginLeft: 200,
  },
  publicationThreeDots: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  publicationImage: {
    width: windowWidth - 40,
    height: (windowWidth - 40) * 0.8,
    maxWidth: 550,
    borderRadius: 10,
    marginTop: 10,
  },
  publicationActions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  publicationActionIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  publicationFlag: {
    width: 30,
    height: 30,
    marginLeft: 180,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  likeImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  likeText: {
    fontSize: 14,
  },
});

export default styles;
