// imports the vue pages
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Home from '@/views/Home'
import NewPost from '@/views/NewPost'
import SinglePost from '@/views/SinglePost'
import Profile from '@/views/Profile'
import Events from '@/views/Events'
import Classes from '@/views/Classes'
import FAQs from '@/views/FAQs' 

Vue.use(Router)

// creates routes for each of the vue pages and export it
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newpost',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/singlepost',
      name: 'SinglePost',
      component: SinglePost
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FAQs
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;