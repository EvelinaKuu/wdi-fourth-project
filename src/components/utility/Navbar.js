import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';
const Navbar = ({ history }) => {
  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <div>
      <nav className="level">
        <div className="navbar level-left">
          <Link to="/" className="title">Pre-loved - West London</Link>
        </div>
        <div className="navbar level-right">
          { !Auth.isAuthenticated() &&
          <Link to="/login" className="button is-white">Login</Link>
          }
          {' '}
          { !Auth.isAuthenticated() &&
          <Link to="/register" className="button is-white">Register</Link>
          }
          { Auth.isAuthenticated() && <Link to="/" className="button is-white">Home
          </Link>
          }
          {' '}
          { Auth.isAuthenticated() && <Link to={`/users/${Auth.getPayload().userId}`} className="button is-white">Your profile
          </Link>
          }
          {' '}
          { Auth.isAuthenticated() && <Link to="/items/new" className="button is-white">Add Item
          </Link>
          }
          {' '}
          { Auth.isAuthenticated() &&
          <a href="#" className="button is-white" onClick={logout}>Logout</a>
          }

        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
