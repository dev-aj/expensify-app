import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import LoginPage  from '../components/LoginPage';

//To check whether a user is logged in or not before sending on specific route
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = ()=> (
    <Router history={ history }>
        <div>
            <Header />
            <Switch>
                <Route path = "/" component={LoginPage} exact={true}/>
                <PrivateRoute path = "/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path = "/create" component={AddExpensePage} />
                <PrivateRoute path = "/edit/:id" component={EditExpensePage} />
                <Route path = "/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
); 

export default AppRouter;