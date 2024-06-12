import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    position: 'relative', // Para permitir que os stories fiquem sobrepostos
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1, // Certifica-se de que o cabeçalho fique acima dos outros conteúdos
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    width: 120, 
    height: 40, 
  },
  leftHeaderTitle: {
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  storiesContainer: {
    paddingVertical: 10,
    //position: 'absolute', // Para permitir a sobreposição dos stories
    //top: 60, // Ajusta a posição dos stories abaixo do cabeçalho
    zIndex: 2, // Garante que os stories fiquem acima do feed
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#c13584',
  },
  storyName: {
    marginTop: 5,
    textAlign: 'center',
  },
  containerGeral: {
    padding: 10,
  },
  feedItem: {
    marginBottom: 20,
  },
  feedHeader: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  feedProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  feedProfileName: {
    marginLeft: 5,
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  feedImage: {
    width: '100%',
    height: width,
    marginBottom: 10,
  },  
  feedActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftIcons: {
    flexDirection: 'row',
  },
  feedFollowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  feedFollowImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  feedFollowText: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  feedComment: {
    marginBottom: 20,
  },
  feedCommentText: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  footerProfileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  followedByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followedByText: {
    marginLeft: 5,
  },
});

export default styles;