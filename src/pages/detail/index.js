import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Detail(){
    return(
        <View style={styles.container}>
            <Text>Página de detalhes</Text>
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
