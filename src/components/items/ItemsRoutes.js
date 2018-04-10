import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import ItemsIndex from './ItemsIndex';
import ItemsShow from  './ItemsShow';
import ItemsNew from './ItemsNew';
import ItemsEdit from './ItemsEdit';

const ItemsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ItemsIndex} />
      <Route path="/items/:id" component={ItemsShow} />
      <ProtectedRoute path="/items/new" component={ItemsNew} />
      <ProtectedRoute path="/items/:id/edit" component={ItemsEdit} />
    </Switch>
  );
};

export default ItemsRoutes;
