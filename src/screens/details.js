import React from 'react'
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'

class Details extends React.Component {
    render() {
        const { image, rating, address, cuisines, open, for2, currency, name } = this.props.route.params.data
        return (
            <View style={style.container}>
                <View style={style.imageContainer}>
                    <Image source={{ uri: image }} style={{ height: 50, width: "100%", flex: 1 }} />
                </View>
                <ScrollView>

                <Text style={{
                    marginBottom: 10,
                    fontSize: 20,
                    textDecorationLine: 'underline' 

                }}>Restaurant Name : </Text>
                <Text style={{ marginBottom: 10 }}>
                    {name}
                </Text>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 20,
                    textDecorationLine: 'underline' 

                }}>Rating : </Text>
                <Text style={{ marginBottom: 10 }}>
                    {rating}
                </Text>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 20,
                    textDecorationLine: 'underline' 
                }}>Address : </Text>
                <Text style={{ marginBottom: 10 }}>
                    {address}
                </Text>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 20,
                    textDecorationLine: 'underline' 
                }}>Cuisines : </Text>
                <Text style={{ marginBottom: 10 }}>
                    {cuisines}
                </Text>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 20,
                    textDecorationLine: 'underline' 
                }}>Open : </Text>
                <Text style={{ marginBottom: 10 }}>
                    {open}
                </Text>
                <Text style={{
                    marginBottom: 10,
                    fontSize: 20,
                    textDecorationLine: 'underline' 
                }}>
                    Avg Cost for 2 Persons :
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {currency}{for2}
                </Text>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }, imageContainer: {
        width: '100%', height: '40%'
    }
})
export default Details