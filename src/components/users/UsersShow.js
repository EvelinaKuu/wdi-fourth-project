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

  unlikeItem = (like) => {
    Axios
      .delete(`/api/items/${like.id}/unlike`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => {
        const likes = this.state.user.likes.filter(({ id }) => {
          return id !== like.id;
        });

        const user = this.state.user;
        user.likes = likes;

        this.setState({ user });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="container is-widescreen">
          <Link to="/" className="button is-white"><i className="fas fa-chevron-left"></i>
                Back to all items
          </Link>
        </div>

        <div className="columns is-multiline is-mobile">
          <div className="column is-half">
            <img src={this.state.user.image} className="item-image"/>
          </div>
          <div className="column is-half">
            <h3> User: {this.state.user.username}</h3>
            <h3> Email: {this.state.user.email}</h3>
          </div>
        </div>

        <div className="container is-widescreen">
          <h3>Selling these items: </h3>
        </div>

        <div className="columns is-multiline is-mobile">
          {this.state.user.items &&
                  this.state.user.items.map(item => {
                    return(
                      <div className="column is-third" key={item.id} >
                        <Link to={`/items/${item.id}`}>
                          <img src={item.image} className="item-image"/>
                        </Link>
                        <p>{item.title} </p>
                      </div>
                    );
                  })}
        </div>

        {this.state.user.likes && this.state.user.likes.length > 0 &&
        <div className="container is-widescreen">
          <h3>Liked these items: </h3>
        </div>
        }

        <div className="columns is-multiline is-mobile">
          {this.state.user.likes && this.state.user.likes.map(like => {
            console.log(like);
            return(


              <div className="column is-quarter" key={like.id} >
                <Link to={`/items/${like.id}`}>
                  <img src={like.image} className="item-image" />
                </Link>
                <p>{like.title} </p>
                { Auth.isAuthenticated() &&
                    Auth.getPayload().userId === this.props.match.params.id &&
                    <button className="button is-white" onClick={() => this.unlikeItem(like)}>
                      Unlike
                    </button> }
              </div>
            );
          })}
        </div>
      </div>

    );
  }
}

export default UsersShow;
