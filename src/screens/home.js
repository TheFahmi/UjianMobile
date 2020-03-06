import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Header } from 'react-native-elements';

import { Card, ListItem, Button, Icon, CardItem } from 'react-native-elements'
import Axios from 'axios'
import { connect } from 'react-redux'
import { getData, loginAction } from '../actions'
// import DataCard from './card'
import AsyncStorage from '@react-native-community/async-storage'


class Home extends React.Component {
    componentDidMount() {
        this.props.getData()
        console.log(AsyncStorage.getItem('username'))

    }

    renderCard = () => {
        return this.props.data.map((item, index) => {
            return (
                <TouchableWithoutFeedback key={index} onPress={() => this.props.navigation.navigate('detail', {
                    data: {
                        image: item.restaurant.featured_image,
                        name : item.restaurant.name,
                        rating: item.restaurant.user_rating.aggregate_rating,
                        address: item.restaurant.location.address,
                        cuisines: item.restaurant.cuisines,
                        open: item.restaurant.timings,
                        for2: item.restaurant.average_cost_for_two,
                        currency: item.restaurant.currency
                    }
                })}>
                    <View style={{ width: '50%', height: 'auto' }}>
                        <Card>
                        <View style={{ borderTopStartRadius: 20 }}>
                            <Image source={{ uri: item.restaurant.featured_image }} 
                            style={{ height: 100, width:"100%" }} />
                        </View>
                            <Text>{item.restaurant.name}</Text>
                            {/* <Icon
                                type='FontAwesome'
                                name='star'
                                style={{
                                    fontSize: 8,
                                    color: 'gold'
                                }}
                            /> */}
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'black'
                                }}
                            >
                                Rating : {item.restaurant.user_rating.aggregate_rating}
                            </Text>
                            
                        </Card>
                    </View>
                </TouchableWithoutFeedback>
            )
        })
    }
    render() {
        // console.log(this.props.data[0].restaurant.thumb)
        console.log('username', this.props.username)
        return (



            <ScrollView>
                <View style={styles.container}>
                    <Header
                        leftComponent={{ icon: 'ticket', type: 'entypo', color: 'white' }}
                        containerStyle={{
                            backgroundColor: 'tomato',
                            justifyContent: 'space-around',
                            marginTop: Platform.OS === 'ios' ? 0 : -25,
                            elevation: 2
                        }}
                        rightComponent={{ text: `Hallo,${this.props.username}`, style: { color: 'white', fontWeight: '700' } }}
                    >
                    </Header>
                    <View style={styles.icons}>
                        <View style={styles.icon}>
                            <Icon name='credit-card' size={40} color='tomato' />
                            <Text style={styles.iconText}>credit</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='food-variant' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>variant</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='food-fork-drink' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>receipe</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='location-on' size={40} color='tomato' />
                            <Text style={styles.iconText}>location</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='shopping-cart' size={40} color='tomato' />
                            <Text style={styles.iconText}>cart</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='pizza' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>pizza</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='hamburger' type='material-community' size={40} color='tomato' />
                            <Text style={styles.iconText}>burger</Text>
                        </View>
                        <View style={styles.icon}>
                            <Icon name='more-horiz' size={40} color='tomato' />
                            <Text style={styles.iconText}>more</Text>
                        </View>
                        <View style={styles.card} >
                            {this.renderCard()}
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icons: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
    ,
    icon: {
        height: 70, width: 70,
        margin: 10,
        // backgroundColor : 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'tomato'
    },
    iconText: {
        fontSize: 14,
        textTransform: 'capitalize',
        color: 'black'
    },
    header: {
        height: 80, width: '100%',
        backgroundColor: 'tomato',
        padding: 20
    },
    headerText: {
        fontSize: 30,
        color: '#fff'
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    }
})

const mapStore = ({ data, user }) => {
    return {
        data: data.data,
        username: user.username
    }
}
export default connect(mapStore, { getData, loginAction })(Home)