import React from 'react';
import Axios from 'axios';

import BackButton from '../utility/BackButton';


class UsersShow extends React.Component {
  state = {}


  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ item: res.data }, () => console.log(this.state)))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-square">
          <img src={this.state.item.image} className="item-image" />
          <div className="field is-grouped">
            <BackButton history={this.props.history} />
          </div>
        </div>
        <div className="column">
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
      </div>
    );
  }
}

export default UsersShow;
