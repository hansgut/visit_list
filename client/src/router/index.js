import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'Users',

    component: () => import('../views/Users.vue'),
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',

    component: () => import('../views/Register.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',

    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/subjects',
    name: 'Subjects',

    component: () => import('../views/subjects/Subjects.vue'),
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/subjects/new',
    name: 'New Subject',

    component: () => import('../views/subjects/Add.vue'),
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/positions',
    name: 'Positions',

    component: () => import('../views/positions/Positions.vue'),
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/positions/new',
    name: 'New Position',

    component: () => import('../views/positions/Add.vue'),
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/lists',
    name: 'Lists',

    component: () => import('../views/lists/Lists.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/lists/:id',
    name: 'List',

    component: () => import('../views/lists/List.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/profile');
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresAdmin)) {
    if (store.getters.isAdmin){
      next()
    } else {
      next('/')
    }
  }
});

export default router;
