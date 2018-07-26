import { Component } from "react";
import { Link, Head } from '../'

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title = "Title" } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/uikit.min.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
          <script src="/static/js/uikit.min.js" />
          <script src="/static/js/uikit-icons.min.js" />
        </Head>
        <div>
          <div className="uk-navbar-container uk-navbar-transparent">
              <div className="uk-container">
                  <nav uk-navbar="true">
                      <div className="uk-navbar-left">
                          <a href="/" className="uk-navbar-item uk-logo c-white">
                              Site
                          </a>
                      </div>
                      <div className="uk-navbar-right">
                          <ul className="uk-navbar-nav uk-visible@m">
                              <li><a href="/">Home</a></li>
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

      </div>
    );
  }
}
export default Layout;
