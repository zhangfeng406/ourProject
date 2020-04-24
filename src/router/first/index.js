// const first = () => {import('../../modules/first/index')};
import first from '../../modules/first/index';
import Main from '../../components/layout/main';
const firstRoutes = {
  path: '/first',
  component: Main,
  redirect: {name: 'firstHome'},
  children: [
    {
      name: 'firstHome',
      path: '/firstHome',
      component: first
    }
  ]
}

export default firstRoutes;