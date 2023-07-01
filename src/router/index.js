import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
{path: '/projects',
name:'projects',
component: () => import ('../views/ProjectsView.vue')
},

{path: '/contact',
name:'contact',
component: () => import ('../views/ContactView.vue')
},

{path: '/testimonial',
name:'testimonial',
component: () => import ('../views/TestimonialView.vue')
},

{path: '/profile',
name:'profile',
component: () => import ('../views/')
},

{path: '/skills',
name:'skills',
component: () => import ('../views/')
},

{path: '/work-experience',
name:'work experience',
component: () => import ('../views/')
},

{path: '/education',
name:'education',
component: () => import ('../views/')
},

{path: '/biography',
name:'biography',
component: () => import ('../views/')
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
