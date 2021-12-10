import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5178b1be = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _35cd237a = () => interopDefault(import('..\\pages\\allmagazines.vue' /* webpackChunkName: "pages/allmagazines" */))
const _39ce399e = () => interopDefault(import('..\\pages\\application\\index.vue' /* webpackChunkName: "pages/application/index" */))
const _20a7b8e0 = () => interopDefault(import('..\\pages\\basket\\index.vue' /* webpackChunkName: "pages/basket/index" */))
const _44a623a6 = () => interopDefault(import('..\\pages\\business\\index.vue' /* webpackChunkName: "pages/business/index" */))
const _4488d12a = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _c8ca24b6 = () => interopDefault(import('..\\pages\\favourite\\index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _4771f824 = () => interopDefault(import('..\\pages\\filter\\index.vue' /* webpackChunkName: "pages/filter/index" */))
const _6245a0ad = () => interopDefault(import('..\\pages\\myorders.vue' /* webpackChunkName: "pages/myorders" */))
const _6d1c5cef = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _dbba204a = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _de0d54b6 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _1208fc34 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _b6ffa884 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _54c3c1a4 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _f5dff19e = () => interopDefault(import('..\\pages\\auth\\code.vue' /* webpackChunkName: "pages/auth/code" */))
const _0777f456 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _6f5692a7 = () => interopDefault(import('..\\pages\\auth\\newpassword.vue' /* webpackChunkName: "pages/auth/newpassword" */))
const _2568c95a = () => interopDefault(import('..\\pages\\auth\\phone.vue' /* webpackChunkName: "pages/auth/phone" */))
const _2e33c6e7 = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _449f0507 = () => interopDefault(import('..\\pages\\profile\\edit.vue' /* webpackChunkName: "pages/profile/edit" */))
const _01b3fa3a = () => interopDefault(import('..\\pages\\magazine\\_id.vue' /* webpackChunkName: "pages/magazine/_id" */))
const _89c50b70 = () => interopDefault(import('..\\pages\\order\\_id.vue' /* webpackChunkName: "pages/order/_id" */))
const _794b88c7 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

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
    component: _5178b1be,
    name: "about___uz"
  }, {
    path: "/allmagazines",
    component: _35cd237a,
    name: "allmagazines___uz"
  }, {
    path: "/application",
    component: _39ce399e,
    name: "application___uz"
  }, {
    path: "/basket",
    component: _20a7b8e0,
    name: "basket___uz"
  }, {
    path: "/business",
    component: _44a623a6,
    name: "business___uz"
  }, {
    path: "/faq",
    component: _4488d12a,
    name: "faq___uz"
  }, {
    path: "/favourite",
    component: _c8ca24b6,
    name: "favourite___uz"
  }, {
    path: "/filter",
    component: _4771f824,
    name: "filter___uz"
  }, {
    path: "/myorders",
    component: _6245a0ad,
    name: "myorders___uz"
  }, {
    path: "/news",
    component: _6d1c5cef,
    name: "news___uz",
    children: [{
      path: ":id?",
      component: _dbba204a,
      name: "news-id___uz"
    }]
  }, {
    path: "/profile",
    component: _de0d54b6,
    name: "profile___uz"
  }, {
    path: "/ru",
    component: _1208fc34,
    name: "index___ru"
  }, {
    path: "/search",
    component: _b6ffa884,
    name: "search___uz"
  }, {
    path: "/test",
    component: _54c3c1a4,
    name: "test___uz"
  }, {
    path: "/auth/code",
    component: _f5dff19e,
    name: "auth-code___uz"
  }, {
    path: "/auth/login",
    component: _0777f456,
    name: "auth-login___uz"
  }, {
    path: "/auth/newpassword",
    component: _6f5692a7,
    name: "auth-newpassword___uz"
  }, {
    path: "/auth/phone",
    component: _2568c95a,
    name: "auth-phone___uz"
  }, {
    path: "/auth/register",
    component: _2e33c6e7,
    name: "auth-register___uz"
  }, {
    path: "/profile/edit",
    component: _449f0507,
    name: "profile-edit___uz"
  }, {
    path: "/ru/about",
    component: _5178b1be,
    name: "about___ru"
  }, {
    path: "/ru/allmagazines",
    component: _35cd237a,
    name: "allmagazines___ru"
  }, {
    path: "/ru/application",
    component: _39ce399e,
    name: "application___ru"
  }, {
    path: "/ru/basket",
    component: _20a7b8e0,
    name: "basket___ru"
  }, {
    path: "/ru/business",
    component: _44a623a6,
    name: "business___ru"
  }, {
    path: "/ru/faq",
    component: _4488d12a,
    name: "faq___ru"
  }, {
    path: "/ru/favourite",
    component: _c8ca24b6,
    name: "favourite___ru"
  }, {
    path: "/ru/filter",
    component: _4771f824,
    name: "filter___ru"
  }, {
    path: "/ru/myorders",
    component: _6245a0ad,
    name: "myorders___ru"
  }, {
    path: "/ru/news",
    component: _6d1c5cef,
    name: "news___ru",
    children: [{
      path: ":id?",
      component: _dbba204a,
      name: "news-id___ru"
    }]
  }, {
    path: "/ru/profile",
    component: _de0d54b6,
    name: "profile___ru"
  }, {
    path: "/ru/search",
    component: _b6ffa884,
    name: "search___ru"
  }, {
    path: "/ru/test",
    component: _54c3c1a4,
    name: "test___ru"
  }, {
    path: "/ru/auth/code",
    component: _f5dff19e,
    name: "auth-code___ru"
  }, {
    path: "/ru/auth/login",
    component: _0777f456,
    name: "auth-login___ru"
  }, {
    path: "/ru/auth/newpassword",
    component: _6f5692a7,
    name: "auth-newpassword___ru"
  }, {
    path: "/ru/auth/phone",
    component: _2568c95a,
    name: "auth-phone___ru"
  }, {
    path: "/ru/auth/register",
    component: _2e33c6e7,
    name: "auth-register___ru"
  }, {
    path: "/ru/profile/edit",
    component: _449f0507,
    name: "profile-edit___ru"
  }, {
    path: "/ru/magazine/:id?",
    component: _01b3fa3a,
    name: "magazine-id___ru"
  }, {
    path: "/ru/order/:id?",
    component: _89c50b70,
    name: "order-id___ru"
  }, {
    path: "/ru/product/:id?",
    component: _794b88c7,
    name: "product-id___ru"
  }, {
    path: "/magazine/:id?",
    component: _01b3fa3a,
    name: "magazine-id___uz"
  }, {
    path: "/order/:id?",
    component: _89c50b70,
    name: "order-id___uz"
  }, {
    path: "/product/:id?",
    component: _794b88c7,
    name: "product-id___uz"
  }, {
    path: "/",
    component: _1208fc34,
    name: "index___uz"
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
