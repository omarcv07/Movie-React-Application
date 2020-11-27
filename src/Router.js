import React, { Fragment } from 'react';
import { routes } from './routes/index';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';

const Router = (props) => {
    return (
        <Fragment>
            <Switch>
                {routes.map((el, index) => (
                    <Route key={index} path={el.path} component={el.component} />
                ))}
            </Switch>
        </Fragment>
    );
}

export default Router;