import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));
const NotFound = React.lazy(() => import('./NotFound'));
const News = React.lazy(() => import('./news/News'));
const Playground = React.lazy(() => import('./Playground'));

const Routes = (props) => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect from='/home' to='/' />
          <Route exact path='/about/:id' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/playground' component={Playground} />
          <Route path='/news' component={News} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default Routes;
