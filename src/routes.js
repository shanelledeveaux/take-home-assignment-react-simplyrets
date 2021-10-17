import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropertyListingsView from "./views/PropertyListingsView"

export default (
    <BrowserRouter>
        <Switch>
            <Route component={PropertyListingsView} exact path="/PropertyListings" />
            {/* Add new routes here */}
        </Switch>
   </BrowserRouter>
);