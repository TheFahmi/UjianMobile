import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Icon, Button } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import { StackActions } from '@react-navigation/native';
import { loginAction, loginConfirm, checkLogin  } from '../actions'

import Splash from '../screens/splash'

class Login extends React.Component {
    state = {
        name : null
    }
    
    componentDidMount () {
        this.props.checkLogin()
        console.log('check login', this.props.auth)
    }

    componentDidUpdate () {
        console.log('did update', this.props.username)
        if (this.props.username) {
            this.props.navigation.dispatch(StackActions.replace('feed'));
        } 
    }

    onBtnLogin = async () => {
        try {
            await AsyncStorage.setItem('username', this.state.name)
            this.props.loginAction(this.state.name)
        } catch (err) {
            console.log(err)
        }
    }

    render () {
        // console.log(AsyncStorage.getItem('username'))
        console.log('username', this.props.username)
        console.log('initial auth', this.props.auth)
        if (this.props.auth) {
            return (
                <View style = {styles.container}>
                    {/* <Splash/> */}
                    <View style = {styles.logo}>
                        <Text style = {styles.logoText}> Tomato App</Text>
                        <Icon type = 'material-community' name = 'food' size = {100} color = 'tomato'/>
                    </View>
                    <Input
                        placeholder='username'
                        leftIcon={
                            <Icon
                            name='user'
                            type = 'simple-line-icon'
                            size={24}
                            color='tomato'
                            />
                        }
                        onChangeText = { (value) =>this.setState({name : value})}
                    />
                    <View>
                        <Button title = 'LOGIN'                         
                            containerStyle={{ width: '90%', marginHorizontal : 20, marginVertical : 30 }}
                            buttonStyle={{ backgroundColor: 'tomato' }}
                            onPress = {this.onBtnLogin}
                        />
                    </View>
                </View>
            )

        }
        return (
            <View style = {styles.container}>
                <Splash/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent :'center',
        alignContent : 'center'
    },
    logo : {
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom: 50
    },
    logoText : {
        fontSize : 50,
        fontWeight : '800',
        color : 'tomato'
    }
})

const mapStore = ({ user }) => {
    return {
        username : user.username,
        auth : user.auth
    }
}

export default connect(mapStore, { loginAction, loginConfirm, checkLogin })(Login)