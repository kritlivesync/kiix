import { Component } from "react";
import { Layout, Link, Router} from "../../components";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0,
      title:'Index'
    };
  }

  render() {
    const {title} = this.state
    return (
      <Layout title={title}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{title}</h2>
                        <Link href={`/item?id=xxxxxxxxxxx`} as={`/item/xxxxxxxxxxx`}>
                        <a className="uk-button uk-button-default uk-width-1-1" >Go</a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }
}
