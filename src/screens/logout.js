import React from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'

import { logOutAction } from '../actions'

class LogOut extends React.Component {
    componentDidUpdate () {
        // console.log('auth', this.props.auth)
        if (!this.props.username) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'login' }
                ]
            })
            this.props.rootStackNavigation.dispatch(resetAction);
        }
    }

    handleLogOut = async () => {
        try {
            this.props.logOutAction()
            await AsyncStorage.clear()
            console.log('logout')
        } catch (err) {
            console.log(err)
        }
    }

    render () {
        console.log(this.props.auth)
        return (
            <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Button title = 'logOut' onPress = {this.handleLogOut}/>
            </View>
        )
    }
}

const mapStore = ({ user }) => {
    return {
        username : user.username
    }
}

export default connect(mapStore, {logOutAction})(LogOut)