import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,view } from "react-native";
import Form from './src/form';

export default function App() {
    return (
        <view styles={styles.container}>
            <Form/>
            <StatusBar style="auto" />
        </view>
    );
}


const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles