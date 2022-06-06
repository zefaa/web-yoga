import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54f271bb = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6d719a43 = () => interopDefault(import('../pages/career/index.vue' /* webpackChunkName: "pages/career/index" */))
const _16220c50 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _fa26a07a = () => interopDefault(import('../pages/ppdb/index.vue' /* webpackChunkName: "pages/ppdb/index" */))
const _a46f416e = () => interopDefault(import('../pages/unit/index.vue' /* webpackChunkName: "pages/unit/index" */))
const _27653cb2 = () => interopDefault(import('../pages/news/news-details.vue' /* webpackChunkName: "pages/news/news-details" */))
const _119ad352 = () => interopDefault(import('../pages/unit/unit-details.vue' /* webpackChunkName: "pages/unit/unit-details" */))
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
    path: "/career",
    component: _6d719a43,
    name: "career"
  }, {
    path: "/news",
    component: _16220c50,
    name: "news"
  }, {
    path: "/ppdb",
    component: _fa26a07a,
    name: "ppdb"
  }, {
    path: "/unit",
    component: _a46f416e,
    name: "unit"
  }, {
    path: "/news/news-details",
    component: _27653cb2,
    name: "news-news-details"
  }, {
    path: "/unit/unit-details",
    component: _119ad352,
    name: "unit-unit-details"
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
