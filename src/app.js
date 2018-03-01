import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ItemsRoutes from './components/items/ItemsRoutes';
import UsersShow       from './components/users/UsersShow';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Navbar      from './components/utility/Navbar';
import ImageHeroBox from './components/utility/ImageHeroBox';


import './scss/style.scss';
import 'bulma/css/bulma.css';


class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <div className="container">
            <header>
              <h1><Link to="/" className="title is-3">Pre-loved fashion items for sale in West London</Link></h1>

              <Navbar />
            </header>
            <div className="wrapper">
              <main className="content">
                <ImageHeroBox />
                <Route path="/users/:id" component={UsersShow} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <ItemsRoutes
                />
              </main>
            </div>
          </div>
          <footer className="footer"></footer>
        </div>

      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
