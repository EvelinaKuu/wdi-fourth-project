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
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/items/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Item
            </Link>
            }
          </div>
          {this.state.items.map(item => {
            return(
              <div key={item.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/items/${item.id}`}>
                  <img src={item.image} className="img-responsive" />
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