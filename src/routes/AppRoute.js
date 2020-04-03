import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Templates from '../pages/EmailTemplate/Templates';
import Template from '../pages/EmailTemplate/Template';

const AppRoute = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/" exact component={Templates} />
                        <Route path="/template" exact component={Template} />
                        <Route path="/template/:id" exact component={Template} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Fragment>
    );

}

export default AppRoute;
