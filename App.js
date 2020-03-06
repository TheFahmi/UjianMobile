import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Provider, connect } from 'react-redux'

// import main navigator
import MainNavigation from './src/navigators/mainNavigation'

// import reducer
import reducer from './src/reducers'

class App extends React.Component {
    render () {
        return (
            <Provider store = {createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
                <NavigationContainer>
                    <MainNavigation/>
                </NavigationContainer>
            </Provider>
        )
    }
}
export default App