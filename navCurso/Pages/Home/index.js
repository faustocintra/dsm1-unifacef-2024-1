import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atividade Fausto</Text>
            <Text style={styles.name}>Pedro Paulino Martiniano</Text>
            <Text style={styles.code}>Código: 25784</Text>
            <Text style={styles.course}>Curso: Engenharia de Software</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("about")} >
                    <Text style={styles.buttonText}>Sobre mim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("class")} >
                    <Text style={styles.buttonText}>Curso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("institution")} >
                    <Text style={styles.buttonText}>Instituição</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}