import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54f271bb = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1d3abcae = () => interopDefault(import('../pages/blog-classic.vue' /* webpackChunkName: "pages/blog-classic" */))
const _4ac0582d = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _f6d60ef4 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _740a9972 = () => interopDefault(import('../pages/home-three.vue' /* webpackChunkName: "pages/home-three" */))
const _ba2ce3c0 = () => interopDefault(import('../pages/home-two.vue' /* webpackChunkName: "pages/home-two" */))
const _a06fcd80 = () => interopDefault(import('../pages/ppdb.vue' /* webpackChunkName: "pages/ppdb" */))
const _abb67472 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _6f391363 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _27653cb2 = () => interopDefault(import('../pages/news/news-details.vue' /* webpackChunkName: "pages/news/news-details" */))
const _444d1bcf = () => interopDefault(import('../pages/news/news-page.vue' /* webpackChunkName: "pages/news/news-page" */))
const _119ad352 = () => interopDefault(import('../pages/unit/unit-details.vue' /* webpackChunkName: "pages/unit/unit-details" */))
const _18c0092f = () => interopDefault(import('../pages/unit/unit-page.vue' /* webpackChunkName: "pages/unit/unit-page" */))
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
    path: "/service",
    component: _6f391363,
    name: "service"
  }, {
    path: "/news/news-details",
    component: _27653cb2,
    name: "news-news-details"
  }, {
    path: "/news/news-page",
    component: _444d1bcf,
    name: "news-news-page"
  }, {
    path: "/unit/unit-details",
    component: _119ad352,
    name: "unit-unit-details"
  }, {
    path: "/unit/unit-page",
    component: _18c0092f,
    name: "unit-unit-page"
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
