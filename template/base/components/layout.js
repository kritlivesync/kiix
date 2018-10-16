import { Component, Fragment } from "react";
import { observer } from 'mobx-react'

import { Head, Link, Translate } from "../components";
import { Store } from "../services";

@observer
class Layout extends Component {
  constructor(props) {
    super(props);
  }

  switchingLanguage (){
      if (Store.app.locale === "en") {
          Store.app.setLocale("th")
      } else {
          Store.app.setLocale("en")
      }
  };

  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/uikit.min.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
          <script src="/static/js/uikit.min.js" />
        </Head>
        <div>
          <div className="uk-navbar-container uk-navbar-transparent">
              <div className="uk-container">
                  <nav uk-navbar="true">
                      <div className="uk-navbar-left">
                          <Link href={`/`} as={`/`}>
                          <a href="/" className="uk-navbar-item uk-logo c-white">
                              Site
                          </a>
                          </Link>
                      </div>
                      <div className="uk-navbar-right">
                          <ul className="uk-navbar-nav uk-visible@m">
                              <li><Link href={`/`} as={`/`}><a href="/">Home</a></Link></li>
                              <li><a onClick={() => this.switchingLanguage()}>
                                <Translate text="label"/>
                              </a></li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>


          {children}


          <footer className="copyright">
              <div className="uk-container">
                  <div uk-grid="true">
                      <div className="uk-width-1-1 uk-text-center">
                          Copyright © 2018. All Rights Reserved.
                      </div>
                  </div>
              </div>
          </footer>
        </div>

      </Fragment>
    );
  }
}
export default Layout;
