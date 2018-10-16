import { Component } from "react";
import { observer } from 'mobx-react'
import { Store, Api } from "../../base/services";
import { Layout, Link, Router, Translate} from "../../base/components";


@observer
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data:[]
    };
  }

  static async getInitialProps ({ query: { id } }) {
    console.log('getInitialProps====>',{ id })
    return { title:'Item',id }
  }

  async componentDidMount () {
    this.setState({loading:true})
    var data = await Api.get('test/'+this.props.id)
    this.setState({
      loading:false,
      data : data.res
    })
  }

  componentWillUnmount () {
  }

  onItem(item){
    console.log(item)
  }

  renderItem (item, index) {
    return (<div key={index} className="list_item" onClick={()=>this.onItem(item)}>{item.name}</div>)
  }

  render () {
    const {title, id} = this.props
    return (
      <Layout title={Translate({text:'title'})}>
        <section className="uk-section-large uk-background-cover">
            <div className="uk-container">
                <div className="uk-grid">
                    <div className="uk-width-1-1 uk-text-center">
                        <h2>{title} {Store.app.lastUpdate}</h2>
                        <p>{id} <Translate text="label"/></p>
                        {this.state.data.map(this.renderItem.bind(this))}
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    );
  }

}
export default Item;