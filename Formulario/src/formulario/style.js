export default function Form({title, text}) {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
    </View>
}