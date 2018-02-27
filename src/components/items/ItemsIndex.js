import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class ItemsIndex extends React.Component {
  state = {
    items: []
  }

  componentWillMount() {
    Axios
      .get('/api/items')
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/items/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Item
            </Link>
            }
          </div>
          {this.state.items.map(item => {
            return(
              <div key={item.id} className="column">
                <Link to={`/items/${item.id}`}>
                  <img src={item.image} className="" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemsIndex;
