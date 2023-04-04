import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

import { Logo } from "../../components/logo";

export default function Home(){
    const [inputText, setInputText] = useState('');

    function handleSearch(){
        console.log('Você digitou:', inputText);
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>

            <View style={styles.inputArea}>
                <TextInput
                    placeholder="Digite o nome da comida..."
                    style={styles.input}
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Icon name='search' size={28} color='#4CBE6C' />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0e0e0e'
    },
    inputArea:{
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#ECECEC',
        paddingRight: 8,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 50
    }
})