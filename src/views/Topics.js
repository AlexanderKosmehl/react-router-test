import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'
import Topic from './Topic'

export default function Topics () {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/1`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/3`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}
