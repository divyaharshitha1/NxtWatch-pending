import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], activeTab: 'HOME'}

  render() {
    const {isDarkTheme, savedVideos, activeTab} = this.state
    return (
      <CartContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          activeTab,
          activeTabItem: this.activeTabItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
