import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54f271bb = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1d3abcae = () => interopDefault(import('../pages/blog-classic.vue' /* webpackChunkName: "pages/blog-classic" */))
const _fef3f94e = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _6fabb882 = () => interopDefault(import('../pages/blog-grid.vue' /* webpackChunkName: "pages/blog-grid" */))
const _4ac0582d = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _f6d60ef4 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _740a9972 = () => interopDefault(import('../pages/home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _ba2ce3c0 = () => interopDefault(import('../pages/home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _a06fcd80 = () => interopDefault(import('../pages/ppdb.vue' /* webpackChunkName: "pages/ppdb" */))
const _abb67472 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _2c438c88 = () => interopDefault(import('../pages/project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _6f391363 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _56e76546 = () => interopDefault(import('../pages/unit.vue' /* webpackChunkName: "pages/unit" */))
const _79cd33e8 = () => interopDefault(import('../pages/unit-detail.vue' /* webpackChunkName: "pages/unit-detail" */))
const _f3c62648 = () => interopDefault(import('../pages/unit2.vue' /* webpackChunkName: "pages/unit2" */))
const _74aa4c80 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _54f271bb,
    name: "about"
  }, {
    path: "/blog-classic",
    component: _1d3abcae,
    name: "blog-classic"
  }, {
    path: "/blog-details",
    component: _fef3f94e,
    name: "blog-details"
  }, {
    path: "/blog-grid",
    component: _6fabb882,
    name: "blog-grid"
  }, {
    path: "/contact-us",
    component: _4ac0582d,
    name: "contact-us"
  }, {
    path: "/form",
    component: _f6d60ef4,
    name: "form"
  }, {
    path: "/home-three",
    component: _740a9972,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _ba2ce3c0,
    name: "home-two"
  }, {
    path: "/ppdb",
    component: _a06fcd80,
    name: "ppdb"
  }, {
    path: "/project",
    component: _abb67472,
    name: "project"
  }, {
    path: "/project-details",
    component: _2c438c88,
    name: "project-details"
  }, {
    path: "/service",
    component: _6f391363,
    name: "service"
  }, {
    path: "/unit",
    component: _56e76546,
    name: "unit"
  }, {
    path: "/unit-detail",
    component: _79cd33e8,
    name: "unit-detail"
  }, {
    path: "/unit2",
    component: _f3c62648,
    name: "unit2"
  }, {
    path: "/",
    component: _74aa4c80,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
