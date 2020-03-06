import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'

const Splash = () => {
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>Tomato App</Text>
            <Icon type = 'material-community' name = 'food' size = {100} color = 'white'/>
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : "center",
        backgroundColor : 'tomato'
    },
    text : {
        fontSize : 40,
        fontWeight : '800',
        color : '#fff'
    }
})
export default Splash