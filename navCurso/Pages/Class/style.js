import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C589C',
        padding: 30,
        paddingTop: 50
    },
    students: {
        gap: 20,
        alignItems: "center",
        flex: 1,
        textAlign: "center",
        justifyContent: "center"
    },
    text: {
        color: '#ffff',
        paddingBottom: 16,
        fontWeight: 'bold',
        fontSize: 48
    },
    subtitle: {
        color: '#fff',
        paddingBottom: 16,
        fontWeight: '300',
        fontSize: 20
    },
    profileImgContainer: {
        textAlign: "center",
        justifyContent: "center",
        // marginLeft: 8,
        height: 500,
        width: 320,
    },
    profileImg: {
        height: 500,
        width: 320,
        borderRadius: 8,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },

});

export default styles