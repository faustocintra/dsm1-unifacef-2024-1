import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    position: 'relative',
  },
  scrollWrapper: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    zIndex: 1,
  },
  logoImage: {
    width: 60,
    height: 60,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 8,
  },
  storyContainer: {
    paddingVertical: 12,
    zIndex: 2,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 6,
  },
  storyImage: {
    width: 65,
    height: 65,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: 'magenta',
  },
  storyText: {
    marginTop: 6,
    textAlign: 'center',
  },
  feedWrapper: {
    padding: 12,
  },
  feedItem: {
    marginBottom: 22,
  },
  feedTop: {
    position: 'absolute',
    top: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 8,
  },
  profileName: {
    marginLeft: 4,
    color: 'magenta',
    textShadowColor: 'black',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 4,
  },
  feedImage: {
    width: '100%',
    height: 400, 
    marginBottom: 12,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  leftIconGroup: {
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: 'bold',
  },
  commentSection: {
    marginBottom: 18,
  },
  commentText: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  profileThumb: {
    width: 30,
    height: 30,
    borderRadius: 13,
  }
});

export default styles;
