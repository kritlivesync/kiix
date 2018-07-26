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

  render() {
    const {title,id} = this.props
    return (
      <Layout title={title}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{title}</h2>
                        <p>{id}</p>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }
}
