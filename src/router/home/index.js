import Main from '../../components/layout/main'
import home from '../../modules/home/index';
import fuJianMap from '../../modules/home/fuJianMap';
import chinaMap from '../../modules/home/chinaMap';
const homeRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Main,
    redirect: {name: 'homepage'},
    children: [
      {
        name: 'homepage',
        path: '/homePage',
        component: home,
        children: [
          {
            path: '/fuJianMap',
            component: fuJianMap,
          },
          {
            path:'/chinaMap',
            component:chinaMap,
          }
        ]
      },

    ]
  }
]

export default homeRoutes;