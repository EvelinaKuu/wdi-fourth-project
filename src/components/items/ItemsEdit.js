import React from 'react';
import Axios from 'axios';

import ItemsForm from './ItemsForm';
import Auth from '../../lib/Auth';

class ItemsEdit extends React.Component {
  state = {
    item: {
      title: '',
      image: '',
      price: '',
      category: '',
      description: ''
    },
    errors: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/items/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }
  handleChange = ({ target: { name, value } }) => {
    const item = Object.assign({}, this.state.item, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ item, errors });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/items/${this.props.match.params.id}`, this.state.item,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then(res => this.props.history.push(`/items/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }
  render() {
    return (
      <ItemsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        item={this.state.item}
        errors={this.state.errors}
      />
    );
  }
}

export default ItemsEdit;
