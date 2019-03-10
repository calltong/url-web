import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MainLayout from './components/main'
import Home from './pages/home'
import Code from './pages/code'

export default class App extends Component {
  componentDidMount() {
    //this.props.member.init()
  }

  render() {
    return (
      <MainLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/:code" component={Code} />
      </MainLayout>
    )
  }
}
