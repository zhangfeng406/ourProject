// const second = () => {import('../../modules/second/index')};
import Main from '../../components/layout/main'
import second from '../../modules/second/index';
import secondPageParams from '../../modules/second/components/params';

const secondRoutes = {
  path: '/second',
  component: Main,
  redirect: {name: 'secondPage'},
  children: [
    {
      name: 'secondPage',
      path: '/secondPage',
      component: second,
      children: [
        {
          name: 'secondPageParams',
          path: '/secondPage/params/:id',
          component: secondPageParams
        }
      ]
    },
    // {
    //   name: 'secondPageParams',
    //   path: '/secondPage/params/:id',
    //   component: secondPageParams
    // }
  ]
}

export default secondRoutes;