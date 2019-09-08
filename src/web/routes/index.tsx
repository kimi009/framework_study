import * as React from 'react'
import { Switch, RouteProps, Route } from 'react-router-dom'
const { lazy, Suspense } = React

import Loading from '../components/loading/'
// const Loading = import('../components/loading')

const Home = lazy(() =>
  import(/* webpackChunkName:"home" */ '../components/home')
)

const Banner = lazy(() =>
  import(/* webpackChunkName:"banner" */ '../components/banner')
)

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/banner',
    exact: true,
    component: Banner
  }
]

const Routes = () => (
  <Suspense fallback={<Loading/>}>
    <Switch>
      {routes.map(route => {
        const { path, exact, component } = route
        const LazyComponent = component
        return (
          <Route
            path={path}
            key={path + ''}
            exact={exact}
            render={() => <LazyComponent />}
          />
        )
      })}
    </Switch>
  </Suspense>
)

export default Routes
