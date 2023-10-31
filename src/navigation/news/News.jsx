import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import LatestNews from './LatestNews';
import WorldNews from './WorldNews';

const News = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h3>News</h3>
      <hr />
      <ul>
        <li>
          <NavLink to={`${path}/latest`} exact>
            Latest News
          </NavLink>
        </li>
        <li>
          <NavLink to={`${path}/world`} exact>
            World News
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/latest`} component={LatestNews} />
        <Route exact path={`${path}/world`} component={WorldNews} />
      </Switch>
    </>
  );
};

export default News;
