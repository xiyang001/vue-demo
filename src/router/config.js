/**
 * Created by Wenba on 2017/2/21.
 */
module.exports = {
  routes: [
    {
      path: '/hot',
      component: require('../components/Hot.vue'),
    },
    {
      path:'/show',
      component:require('../components/show.vue')
    },
    {
      path:'/top',
      component:require('../components/Top.vue')
    }
  ]
}
