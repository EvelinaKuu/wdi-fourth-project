import React from 'react';
import Axios from 'axios';

import ItemsForm from './ItemsForm';
import Auth from '../../lib/Auth';

class ItemsNew extends React.Component {
  state = {
    item: {
      title: '',
      image: '',
      price: '',
      category: '',
      description: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const item = Object.assign({}, this.state.item, { [name]: value });
    this.setState({ item }, () => {
      console.log(this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/items', this.state.item,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ItemsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        item={this.state.item}
      />
    );
  }
}

export default ItemsNew;
