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
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const item = Object.assign({}, this.state.item, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ item, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/items', this.state.item,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(item => {
        console.log(item);
        this.props.history.push('/');
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <ItemsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        item={this.state.item}
        errors={this.state.errors}
      />
    );
  }
}

export default ItemsNew;
