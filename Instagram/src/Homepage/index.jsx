import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Image } from "react-native";
import styles from './styles';

const Homepage = ({}) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho / Notificações / Direct Messenger */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/instagram-text-icon.png")}
          style={styles.logoHeader}
        />
        <View style={styles.headerNav}>
          <Image
            source={require("../../assets/curtida-icone.png")}
            style={styles.iconMenu}
          />
          <Image
            source={require("../../assets/direct-icone.png")}
            style={styles.iconMenu}
          />
        </View>
      </View>

      {/* Story User */}
      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image
              source={require("../../assets/icone-mais.png")}
              style={styles.storyAdd}
            />
          </View>
          <Image
            source={require("../../assets/minha-foto.png")}
            style={styles.story}
          />
          <Text>Seu story</Text>
        </View>

        {/* Stories gerais */}
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image
            source={require("../../assets/leopeewee.jpg")}
            style={styles.story}
          />
          <Text>leopeewee</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image
            source={require("../../assets/einerd.png")}
            style={styles.story}
          />
          <Text>einerd</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image
            source={require("../../assets/unifaceflogonovo.jpg")}
            style={styles.story}
          />
          <Text>UniFacef</Text>
        </View>
      </View>

      {/* Feed */}
      <View>
        {/* Cabeçalho do Feed */}
        <View style={styles.containerFeedHeader}>
          <View style={styles.userContainer}>
            <Image
              source={require("../../assets/minha-foto.png")}
              style={styles.userFeed}
            />
            <Text style={styles.userName}>kauan_rodrigues852</Text>
          </View>
          <Image
            source={require("../../assets/more.png")}
            style={styles.more}
          />
        </View>

        {/* Imagem do Feed */}
        <Image source={require("../../assets/minha-foto.png")} style={styles.feed} />

        {/* Rodapé do Feed */}
        <View style={styles.containerFeedFooter}>
          <View style={styles.FooterAction}>
            <Image
              source={require("../../assets/curtida-icone.png")}
              style={styles.iconMenu}
            />
            <Image
              source={require("../../assets/comentario.png")}
              style={styles.iconMenu}
            />
            <Image
              source={require("../../assets/direct.png")}
              style={styles.iconMenu}
            />
          </View>
          <View style={styles.PostSave}>
            <Image
              source={require("../../assets/salvar.png")}
              style={styles.iconMenu}
            />
          </View>
        </View>

        {/* Informações do Post */}
        <View style={styles.PostInfo}>
          <Text style={styles.PostText}>
            Curtido por{" "}
            <Text style={[styles.userName, styles.PostText]}>
              leopewee{" "}
            </Text>
            e <Text style={[styles.userName, styles.PostText]}>outras </Text>
            pessoas
          </Text>
          <Text style={styles.PostText}>
            <Text style={[styles.userName, styles.PostText]}>
              kauan_rodrigues852
            </Text>
            <Text>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Text>
          </Text>
        </View>
      </View>

      {/* Barra de navegação inferior */}
      <View style={styles.containerActionBar}>
        <Image
          source={require("../../assets/action_home.png")}
          style={styles.actionIcon}
        />
        <Image
          source={require("../../assets/action_search.png")}
          style={styles.actionIcon}
        />
        <Image
          source={require("../../assets/action_reels.png")}
          style={styles.actionIcon}
        />
        <Image
          source={require("../../assets/action_store.png")}
          style={styles.actionIcon}
        />
        <Image
          source={require("../../assets/minha-foto.png")}
          style={styles.userFeed}
        />
      </View>
    </View>
  );
};

export default Homepage;