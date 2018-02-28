import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import BackButton from '../utility/BackButton';
import CommentForm from '../utility/CommentForm';
import Auth from '../../lib/Auth';

class ItemsShow extends React.Component {
  state = {
    item: {},
    newComment: {
      content: ''
    }
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

  handleChange = ({ target: { value }}) => {
    console.log(value);
    // const comment = Object.assign({}, this.state.comment, { value });
    this.setState({ newComment: { value }});
  }

  handleSubmit = e => {
    // console.log('handleSubmit works');
    e.preventDefault();
    Axios
      .post(`/api/items/${this.state.item.id}/comments`, this.state.newComment,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
      .then((res) => console.log(res))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  render() {
    return (
      <div className="columns">
        <div className="column">
          <img src={this.state.item.image} className="img-responsive" />
          <div className="field is-grouped">
            <BackButton history={this.props.history} />
            { Auth.isAuthenticated() && <Link to={`/items/${this.state.item.id}/edit`} className="button is-white">
              <i className="fas fa-pencil" aria-hidden="true"></i>Edit
            </Link> }
            {/* <i class="fas fa-edit"></i> */}
            {' '}
            { Auth.isAuthenticated() && <button className="button is-white" onClick={this.deleteItem}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button> }
          </div>
        </div>
        <div className="column">
          <h3>{this.state.item.title}</h3>
          <h3>Price: {this.state.item.price}£</h3>
          <h3>Category:{this.state.item.category}</h3>
          <h4>Description of the item:{this.state.item.description}</h4>            <h4>Sold by:{this.state.item.createdBy && this.state.item.createdBy.username}</h4>


          {this.state.item.comments && this.state.item.comments.map(comment => {
            return(
              <div key={comment._id} >
                <p>{comment.content} </p>
                <p>{comment.createdBy.username} </p>
              </div>
            );
          })}

          <CommentForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            newComment={this.state.newComment}
            // onChange={this.handleChange}
          />

        </div>
      </div>
    );
  }
}

export default ItemsShow;
