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
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }
  likeItem = () => {
    Axios
      .post(`/api/items/${this.props.match.params.id}/like`, {}, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ item: res.data }))
      // check if the currentUser is logged in and if his likes is in the array of likes hide button
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
      this.setState({ newComment: { content: value }});
    }

    handleSubmit = e => {
      e.preventDefault();
      Axios
        .post(`/api/items/${this.state.item.id}/comments`, this.state.newComment,
          {
            headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
          })
        .then((res) => {
          this.setState(prevState => {
            const newState = prevState;
            newState.item.comments.push(res.data);
            newState.newComment.content = '';
            return newState;
          });
        })
        .catch(err => this.setState({ errors: err.response.data.errors }));
    }

      deleteComment = (id) => {
        Axios
          .delete(`/api/items/${this.state.item.id}/comments/${id}`,
            {
              headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
            })
          .then((res) => this.setState({ item: res.data}))
          .catch(err => console.log(err));
      }
      render() {
        let isCurrentUsers = null;
        if (Auth.isAuthenticated() && this.state.item.createdBy) isCurrentUsers = Auth.getPayload().userId === this.state.item.createdBy.id;

        console.log(this.state.item.likes);
        return (
          <div className="columns">
            <div className="column is-quarter">
              <img src={this.state.item.image} className="item-display" />
              <p>Likes: { this.state.item.likes && this.state.item.likes.length } </p>
              <div className="field is-grouped">
                <BackButton history={this.props.history} />
                { Auth.isAuthenticated() && isCurrentUsers &&

                  <Link to={`/items/${this.state.item.id}/edit`} className="button is-white">
                    <i className="fas fa-pencil" aria-hidden="true"></i>Edit
                  </Link> }
                {' '}
                { Auth.isAuthenticated() && isCurrentUsers &&

                <button className="button is-white" onClick={this.deleteItem}>
                  <i className="fa fa-trash" aria-hidden="true"></i>Delete
                </button> }
                { Auth.isAuthenticated() &&
              this.state.item.likes &&
              this.state.item.likes.every(like => like !== Auth.getPayload().userId) &&
              <button className="button is-white" onClick={this.likeItem} >
                <i className="fas fa-heart"></i>
              </button>
                }
              </div>
            </div>
            <div className="column">
              <h3>{this.state.item.title}</h3>
              <h3>Price: £{this.state.item.price}</h3>
              <h3>Category: {this.state.item.category}</h3>
              <h3>Description of the item: {this.state.item.description}</h3>
              {this.state.item.createdBy && <h4>Sold by: <Link to={`/users/${this.state.item.createdBy.id}`}>{this.state.item.createdBy.username}</Link></h4>}
              {this.state.item.createdBy && <p><a href={`mailto:${this.state.item.createdBy.email}`}>Send email to seller</a></p>}
              <h3>Comments:</h3>
              {this.state.item.comments && this.state.item.comments.map(comment => {
                return(
                  <div key={comment._id} >
                    <p>{comment.content} </p>
                    <p>{'-' + comment.createdBy.username} </p>
                    { Auth.isAuthenticated() && Auth.getPayload().userId === comment.createdBy.id &&
                    <button className="button is-white" onClick={() => this.deleteComment(comment._id)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>}
                  </div>
                );
              })}
              <CommentForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                newComment={this.state.newComment}
              />
            </div>
          </div>
        );
      }
}

export default ItemsShow;
