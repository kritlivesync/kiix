
import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import { mobxStore } from '../base/services'

class MyApp extends App {
  render () {
    const {Component, pageProps, mobxStore} = this.props
    return (
      <Container>
          <Provider store={ mobxStore }>
            <Component {...pageProps} />
          </Provider>
      </Container>
    )
  }
}

export default mobxStore(MyApp)
