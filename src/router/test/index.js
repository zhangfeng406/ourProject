import Main from '../../components/layout/main';
import test from '../../modules/test/index';

const testRoute = {
  path: '/test',
  component: Main,
  redirect: {name: 'testPage'},
  children: [
    {
      name: 'testPage',
      path: '/testPage',
      component: test
    }
  ]
}

export default testRoute;