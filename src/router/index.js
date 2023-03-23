import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Services from '../views/Services'
import Portfolio from '../views/Portfolio'
import Blogs from '../views/Blogs'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/',
    // alias: ['/home'],
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/services',
    name: 'services',
    component: Services,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    NProgress.configure({ showSpinner: false });
    NProgress.setColor = (color) => {
      const style = document.createElement('style')
      style.textContent = `
            #nprogress .bar {
              background: ${color} !important;
            }
            `
      document.body.appendChild(style)
    }
    // Start the route progress bar.
    NProgress.setColor("Orange");
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;