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
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
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
