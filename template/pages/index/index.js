import { Component } from "react";
import { inject, observer } from 'mobx-react'
//import {  } from "../../base/services";
import { Layout, Link, Router, Translate} from "../../base/components";

@inject('store') @observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0
    };
  }

  componentDidMount () {
    this.props.store.app.start()
  }

  componentWillUnmount () {
    this.props.store.app.stop()
  }

  switchingLanguage (){
      const { store } = this.props;
      if (store.app.locale === "en") {
          store.app.setLocale("th")
      } else {
          store.app.setLocale("en")
      }
  };

  render() {
    const { store } = this.props;
    return (
      <Layout title={'label'}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{store.app.lastUpdate}</h2>
                        <Link href={`/item?id=xxxxxxxxxxx`} as={`/item/xxxxxxxxxxx`}>
                        <a className="uk-button uk-button-default uk-width-1-1" >Go</a>
                        </Link> | 
                        <a onClick={() => this.switchingLanguage()}><Translate text="label"/></a>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }
}
export default Index;
