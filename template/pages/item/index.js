import { Component } from "react";
import { Layout, Link, Router} from "../../components";

export default class Item extends Component {
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
      if (i18n.language === "en") {
          i18n.changeLanguage("th");
      } else {
          i18n.changeLanguage("en");
      }
  };
  
  render() {
    const {title,id} = this.props
    return (
      <Layout title={title}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{title} {this.props.store.app.lastUpdate}</h2>
                        <p>{id}</p>
                        <a onClick={() => switchingLanguage("en")}>{t("label")}</a>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }
}
