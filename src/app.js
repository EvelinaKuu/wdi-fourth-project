import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ItemsRoutes from './components/items/ItemsRoutes';
import ProtectedRoute from './components/utility/ProtectedRoute';
import UsersShow       from './components/users/UsersShow';
import Login       from './components/auth/Login';
import Register    from './components/auth/Register';
import Navbar      from './components/utility/Navbar';
import ImageHeroBox from './components/utility/ImageHeroBox';

import 'bulma/css/bulma.css';
import './scss/style.scss';



class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <div className="container">
            <header>
              <Navbar />
            </header>
            <div className="wrapper">
              <main className="content">
                <ImageHeroBox />
                <ProtectedRoute path="/users/:id" component={UsersShow} />
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
