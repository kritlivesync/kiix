import { Component } from "react";
import { inject, observer } from 'mobx-react'
import { Store } from "../../base/services";
import { Layout, Link, Router, Translate} from "../../base/components";


@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 0
    };
  }

  componentDidMount () {
    Store.app.start()
  }

  componentWillUnmount () {
    Store.app.stop()
  }


  render() {
    const { store } = this.props;
    return (
      <Layout title={Translate({text:'title'})}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{Store.app.lastUpdate}</h2>
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
export default Index;
