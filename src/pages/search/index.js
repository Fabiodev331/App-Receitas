import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Seach(){
    return(
        <View style={styles.container}>
            <Text>Página de pesquisa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})