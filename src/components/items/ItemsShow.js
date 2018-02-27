import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';
import Auth from '../../lib/Auth';

class ItemsShow extends React.Component {
  state = {
    item: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }

  deleteItem = () => {
    Axios
      .delete(`/api/items/${this.props.match.params.id}`,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.item.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.item.title}</h3>
          <h3>{this.state.item.price}£</h3>
          <h3>{this.state.item.category}</h3>
          <h4>{this.state.item.description}</h4>
          <h4>{this.state.item.createdBy && this.state.item.createdBy.username}</h4>
          <BackButton history={this.props.history} />
          { Auth.isAuthenticated() && <Link to={`/items/${this.state.item.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link> }
          {' '}
          { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteItem}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button> }
        </div>
      </div>
    );
  }
}

export default ItemsShow;
