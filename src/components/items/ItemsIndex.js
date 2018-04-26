import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Auth from '../../lib/Auth';

import SortingBar from '../utility/SortingBar';

class ItemsIndex extends React.Component {
  state = {
    items: [],
    sortBy: 'price',
    sortDirection: 'asc',
    query: ''
  }
  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  handleSearch = (e) => {
    // console.log(e.target.value);
    this.setState({query: e.target.value}, () => console.log(this.state) );
  }

  sorting = () => {
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');
    const orderedProducts = _.orderBy(this.state.items, [sortBy], [sortDirection]);
    const products = _.filter(orderedProducts, (item) => regex.test(item.category));
    return products;
  }
  componentWillMount() {
    Axios
      .get('/api/items')
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const products = this.sorting();
    return (
      <div className="container">
        <SortingBar
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
        />
        <div className="columns is-multiline">
          {products.map(item => {
            return(<div key={item.id} className="column is-one-quarter">
              <figure className="image is-square">
                <Link to={`/items/${item.id}`}>
                  <img src={item.image} className="item-image" />
                </Link>
              </figure>
            </div>);
          })}
          { Auth.isAuthenticated() && <Link to="/items/new" className="standard-button"><i className="fas fa-plus"></i> Add your item for sale
          </Link>
          }
        </div>
      </div>
    );
  }
}

export default ItemsIndex;
