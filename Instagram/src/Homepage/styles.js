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
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  logoHeader: {
    width: 110,
    height: 50,
    resizeMode: 'contain',
  },
  headerNav: {
    flexDirection: 'row',
  },
  iconMenu: {
    width: 25,
    height: 25,
    marginLeft: 15,
    resizeMode: 'contain',
  },
  containerStories: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  containerStory: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  containerStoryAdd: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  storyAdd: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
    resizeMode: 'contain',
  },
  gradient: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  containerFeedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userFeed: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
    resizeMode: 'contain',
  },
  userName: {
    fontWeight: 'bold',
  },
  more: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  feed: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  containerFeedFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  FooterAction: {
    flexDirection: 'row',
  },
  PostSave: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  PostInfo: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  PostText: {
    color: '#000',
  },
  containerActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    paddingVertical: 10,
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  actionIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default styles;