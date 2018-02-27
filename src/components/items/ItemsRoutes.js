import React from 'react';
import { Switch, Route } from 'react-router-dom';


import ItemsIndex from './ItemsIndex';
import ItemsShow from  './ItemsShow';
import ItemsNew from './ItemsNew';
import ItemsEdit from './ItemsEdit';


const ItemsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ItemsIndex} />
      <Route path="/items/new" component={ItemsNew} />
      <Route path="/items/:id/edit" component={ItemsEdit} />
      <Route path="/items/:id" component={ItemsShow} />
    </Switch>
  );
};

export default ItemsRoutes;
