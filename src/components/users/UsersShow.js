import React from 'react';
import Axios from 'axios';

import BackButton from '../utility/BackButton';


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
        this.setState({ user: res.data }, () => console.log(res.data));
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-square">
          <div className="field is-grouped">
            <BackButton history={this.props.history} />
          </div>
        </div>
        <div className="column">
          <p>THIS IS PROFILEPAGE</p>
          <h3>{this.state.user.username}</h3>
          <h3>{this.state.user.email}</h3>
          {this.state.user.likes && this.state.user.likes.map(like => {
            return(
              <div key={like._id} >
                <p>{like.image} </p>
                <p>{like.title} </p>
              </div>
            );
          })}
        </div>
        <div>
          {this.state.user.items && this.state.user.items.map(item => {
            return(
              <div key={item.id} >
                <img src={item.image} />
                <p>{item.title} </p>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}

export default UsersShow;
