import { Component } from "react";
import { inject, observer } from 'mobx-react'
import { Layout, Link, Router} from "../../components";

@inject('app') @observer
export default class Index extends Component {
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
      const { t, i18n } = this.props;
      if (i18n.language === "en") {
          i18n.changeLanguage("th");
      } else {
          i18n.changeLanguage("en");
      }
  };

  render() {
    const { t } = this.props;
    return (
      <Layout title={'index'}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{title} {this.props.store.app.lastUpdate}</h2>
                        <Link href={`/item?id=xxxxxxxxxxx`} as={`/item/xxxxxxxxxxx`}>
                        <a className="uk-button uk-button-default uk-width-1-1" >Go</a>
                        </Link> | 
                        <a onClick={() => switchingLanguage("en")}>{t("label")}</a>
                        <div>ENV { process.env.TEST }</div>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }
}
