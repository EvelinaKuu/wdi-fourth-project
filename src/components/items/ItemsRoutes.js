import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import ItemsIndex from './ItemsIndex';
import ItemsShow from  './ItemsShow';
import ItemsNew from './ItemsNew';
import ItemsEdit from './ItemsEdit';
import UsersShow from '../users/UsersShow';

const ItemsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ItemsIndex} />
      <ProtectedRoute path="/items/:id/edit" component={ItemsEdit} />
      <ProtectedRoute path="/items/new" component={ItemsNew} />
      <ProtectedRoute path="/users/:id" component={UsersShow} />
      <Route path="/items/:id" component={ItemsShow} />
    </Switch>
  );
};

export default ItemsRoutes;
