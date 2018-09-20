import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'
import { i18n, mobxStore } from '../base/service'

class MyApp extends App {
  render () {
    const {Component, pageProps, mobxStore} = this.props
    return (
      <Container>
        <I18nextProvider i18n={ i18n }>
          <Provider store={ mobxStore }>
            <Component {...pageProps} />
          </Provider>
        </I18nextProvider>
      </Container>
    )
  }
}

export default mobxStore(MyApp)
