import Vue from 'vue';
import Router from 'vue-router';
import LandingPage  from './views/LandingPage';
import RepoPage  from './views/RepoPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landinpage',
      component: LandingPage
    },
	{
	  path: '/repos',
      name: 'repopage',
      component: RepoPage
	}
  ]
});

//,
//    {
//      path: '/about',
//      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
 //     component: () =>
//        import(/* webpackChunkName: "about" */ './views/About.vue')
//    }



