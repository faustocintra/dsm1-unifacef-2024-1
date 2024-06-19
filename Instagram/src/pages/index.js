import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Image } from "react-native";
import styles from './styles';

const pages = ({ }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho / Notificações / Direct Messenger */}
      <View style={styles.header}>
        <Image source={require("../../assets/instagram texto icone.png")} style={styles.logoHeader} />
        <View style={styles.headerNav}>
          <Image source={require("../../assets/icone curtida.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/icone direct.png")} style={styles.iconMenu} />
        </View>
      </View>

      {/* Story User */}
      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image source={require("../../assets/icone mais azul.jpg")} style={styles.storyAdd} />
          </View>
          <Image source={require("../../assets/pessoa.jpeg")} style={styles.story} />
          <Text>Seu story</Text>
        </View>

        {/* Stories geral*/}
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/pessoa 2.jpeg")} style={styles.story} />
          <Text>maria_bs</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/pessoa 3.jpeg")} style={styles.story} />
          <Text>fk_lua</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/pessoa 4.jpeg")} style={styles.story} />
          <Text>gab_biel</Text>
        </View>
      </View>

      {/* Feed */}
      <View>

        {/* Cabeçalho do Feed */}
        <View style={styles.containerFeedHeader}>
          <View style={styles.userContainer}>
            <Image source={require("../../assets/pessoa.jpeg")} style={styles.userFeed} />
            <Text style={styles.userName}>stella_souza</Text>
          </View>
          <Image source={require("../../assets/icone mais azul.jpg")} style={styles.more} />
        </View>

        {/* Imagem do Feed */}
        <Image source={require("../../assets/pessoa.jpeg")} style={styles.feed} />

        {/* Rodapé do Feed */}
        <View style={styles.containerFeedFooter}>
          <View style={styles.FooterAction}>
            <Image source={require("../../assets/icone curtida.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/icone comentario.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/icone direct.png")} style={styles.iconMenu} />
          </View>
          <View style={styles.PostSave}>
            <Image source={require("../../assets/icone salvar.png")} style={styles.iconMenu} />
          </View>
        </View>

        {/* Informações do Post */}
        <View style={styles.PostInfo}>
          <Text style={styles.PostText}>
            Curtido por <Text style={[styles.userName, styles.PostText]}>maria_bs</Text>
            e <Text style={[styles.userName, styles.PostText]}>outras </Text>
            pessoas
          </Text>
          <Text style={styles.PostText}>
            <Text style={[styles.userName, styles.PostText]}>stella_souza</Text>
            <Text> A felicidade está sempre a um passo. </Text>
          </Text>
        </View>

        <View style={styles.containerActionBar}>
          <Image source={require("../../assets/home-icon.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/pesquisa.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/reels.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/icone mais.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/pessoa.jpeg")} style={styles.userFeed} />
        </View>
      </View>
    </View>
  );
}

export default pages;
