import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import ItemsRoutes from './components/items/ItemsRoutes';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Navbar      from './components/utility/Navbar';
// import ImageHeroBox from './components/utility/ImageHeroBox';


import './scss/style.scss';
import 'bulma/css/bulma.css';


class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <div className="container">
          <header>
            <h1><Link to="/" className="title is-1">Pre-loved fashion in West London</Link></h1>
            <h2>For the <span>fashion lover</span>...</h2>
            <Navbar />
          </header>
          <div className="wrapper">
            <main className="content">
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* <ImageHeroBox /> */}
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
