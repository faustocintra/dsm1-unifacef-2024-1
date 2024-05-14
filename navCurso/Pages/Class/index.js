import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import styles from './style';

export default function Class({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Curso</Text>
            <StatusBar style="auto" />
            <View style={styles.students}>
                <TouchableHighlight
                    style={styles.profileImgContainer}
                >
                    <Image source={{ uri: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MpFbPyQiSvfPwlvcgTet2mt9hcWmmryUPQ&usqp=CAU" }} style={styles.profileImg} />
                </TouchableHighlight>

                <View>
                    <Text style={styles.subtitle}>Curso: Engenharia de Software</Text>
                    <Text style={styles.subtitle}>Instituição: Uni-FACEF</Text>
                    <Text style={styles.subtitle}>Semestre: 5º</Text>

                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("home")} >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}