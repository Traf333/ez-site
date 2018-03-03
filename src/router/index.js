import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Pages from '@/components/Pages';
import Page from '@/components/Page';
import NewPage from '@/components/NewPage';
import NotFoundComponent from '@/components/NotFoundComponent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/new-page',
      name: 'NewPage',
      component: NewPage
    },
    {
      path: '/:path',
      name: 'Page',
      component: Page
    },

    { path: '*', component: NotFoundComponent }
  ],
});


// export default new Router({
//   routes: storage.pages.map(item => ({
//     path: item.path,
//     name: 'HelloWorld',
//     component: HelloWorld,
//   }) ),
// });
