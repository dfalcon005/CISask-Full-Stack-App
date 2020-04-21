import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Home from '@/components/Home'
import NewPost from '@/components/NewPost'
import SinglePost from '@/components/SinglePost'
import Profile from '@/components/Profile'
import Events from '@/components/Events'
import Classes from '@/components/Classes'
import FAQs from '@/components/FAQs' 

Vue.use(Router)

export default new Router({
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
