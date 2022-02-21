import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6549e630 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b92ba0d8 = () => interopDefault(import('..\\pages\\blog-classic.vue' /* webpackChunkName: "pages/blog-classic" */))
const _328d9144 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _3e1855b4 = () => interopDefault(import('..\\pages\\blog-grid.vue' /* webpackChunkName: "pages/blog-grid" */))
const _dacf3650 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _401abd1e = () => interopDefault(import('..\\pages\\form.vue' /* webpackChunkName: "pages/form" */))
const _883ab3c6 = () => interopDefault(import('..\\pages\\home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _5422c98b = () => interopDefault(import('..\\pages\\home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _0270f0fc = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _66fa5ff1 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _70f582d0 = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _f5fc7e16 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6549e630,
    name: "about"
  }, {
    path: "/blog-classic",
    component: _b92ba0d8,
    name: "blog-classic"
  }, {
    path: "/blog-details",
    component: _328d9144,
    name: "blog-details"
  }, {
    path: "/blog-grid",
    component: _3e1855b4,
    name: "blog-grid"
  }, {
    path: "/contact-us",
    component: _dacf3650,
    name: "contact-us"
  }, {
    path: "/form",
    component: _401abd1e,
    name: "form"
  }, {
    path: "/home-three",
    component: _883ab3c6,
    name: "home-three"
  }, {
    path: "/home-two",
    component: _5422c98b,
    name: "home-two"
  }, {
    path: "/project",
    component: _0270f0fc,
    name: "project"
  }, {
    path: "/project-details",
    component: _66fa5ff1,
    name: "project-details"
  }, {
    path: "/service",
    component: _70f582d0,
    name: "service"
  }, {
    path: "/",
    component: _f5fc7e16,
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
