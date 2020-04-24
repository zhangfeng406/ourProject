import firstRouters from './first';
import secondRouters from './second';
import homeRouters from './home';
import testRoute from './test';
const routes = [
  firstRouters,
  secondRouters,
  ...homeRouters,
  testRoute
]
export {routes};