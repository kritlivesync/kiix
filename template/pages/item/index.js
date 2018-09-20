import { Component } from "react";
import { inject, observer } from 'mobx-react'
//import {  } from "../../base/services";
import { Layout, Link, Router, Translate} from "../../base/components";


@inject('store') @observer
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 1
    };
  }

  static async getInitialProps ({ query: { id } }) {
    console.log('getInitialProps====>',{ id })
    return { title:'Item',id }
  }

  switchingLanguage (){
      const { t, i18n } = this.props;
      console.log(i18n.language)
      if (i18n.language === "en") {
          i18n.changeLanguage("th");
      } else {
          i18n.changeLanguage("en");
      }
  };
  
  componentDidMount () {
    //this.props.store.app.start()
  }

  componentWillUnmount () {
    //this.props.store.app.stop()
  }

  render() {
    const {title, id, store} = this.props
    return (
      <Layout title={'title'}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{title} {store.app.lastUpdate}</h2>
                        <p>{id} <Translate text="label"/></p>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }
}
export default Item;