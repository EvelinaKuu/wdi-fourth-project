import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Axios from 'axios';

class UsersShow extends React.Component {
  state = {
    user: {

      username: '',
      email: ''
    }
  }


  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => console.log(err));
  }

  unlikeItem = () => {
    Axios
      .delete(`/api/items/${this.props.match.params.id}/unlike`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-multiline">
          <div className="column">
            <div>

              <Link to="/" className="button is-white"><i className="fas fa-chevron-left"></i>
                Back to all items
              </Link>

            </div>
            <div className="column">
              <h3> User: {this.state.user.username}</h3>
              <h3> Email: {this.state.user.email}</h3>


              <div className="column is-square">
                <h3>Selling these items: </h3>
                {this.state.user.items &&
                  this.state.user.items.map(item => {
                    return(
                      <div key={item.id} >
                        <Link to={`/items/${item.id}`}>
                          <img src={item.image} className="item-image"/>
                        </Link>
                        <p>{item.title} </p>
                      </div>
                    );
                  })}
              </div>


              <h3>Liked these items: </h3>
              {this.state.user.likes && this.state.user.likes.map(like => {
                console.log(like);
                return(
                  <div key={like.id} >
                    <Link to={`/items/${like.id}`}>
                      <img src={like.image} className="item-image" />
                    </Link>
                    <p>{like.title} </p>
                  </div>
                );
              })}
              {/* { Auth.isAuthenticated() &&
                this.state.item.likes &&
                this.state.item.likes.every(like => like !== Auth.getPayload().userId) &&
                <button className="button is-white" onClick={this.likeItem} >
                  <i className="fas fa-heart"></i>
                </button>
              } */}


              { Auth.isAuthenticated() &&
              Auth.getPayload().userId === this.state.item.createdBy
              <button className="button is-white" onClick={this.unlikeItem}>
                Remove like
              </button> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersShow;
