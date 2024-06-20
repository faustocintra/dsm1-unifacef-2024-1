import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }} style={styles.logo} />
            <TextInput placeholder="Nome de usuário, email ou número" style={styles.input} />
            <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} />
            <CustomButton title="Entrar" onPress={() => navigation.navigate('Feed')} />
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            <CustomButton title="Criar nova conta" onPress={() => {}} style={styles.createAccountButton} />
            <View style={styles.footer}>
                <Text style={styles.footerText}>Ruan Carlos Passeto</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 32,
    },
    input: {
        width: '50%', 
        padding: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    forgotPassword: {
        marginVertical: 16,
        color: '#0095f6',
    },
    createAccountButton: {
        backgroundColor: '#fff',
        borderColor: '#0095f6',
        borderWidth: 1,
    },
    footer: {
        position: 'absolute',
        bottom: 16,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
});

export default LoginScreen;
