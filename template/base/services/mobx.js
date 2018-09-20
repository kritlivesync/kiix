import React from 'react'
import * as store from '../store'

export default (App) => {
  return class AppWithMobx extends React.Component {

    constructor(props) {
      super(props)
      this.mobxStore = store
    }

    render() {
      return <App {...this.props} mobxStore={this.mobxStore} />
    }
  }
}
