import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08827303 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _062d9558 = () => interopDefault(import('..\\pages\\allmagazines.vue' /* webpackChunkName: "pages/allmagazines" */))
const _7c056608 = () => interopDefault(import('..\\pages\\application\\index.vue' /* webpackChunkName: "pages/application/index" */))
const _5c5582c2 = () => interopDefault(import('..\\pages\\basket\\index.vue' /* webpackChunkName: "pages/basket/index" */))
const _4c08fd08 = () => interopDefault(import('..\\pages\\business\\index.vue' /* webpackChunkName: "pages/business/index" */))
const _1d6d2d8c = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _fed97efa = () => interopDefault(import('..\\pages\\favourite\\index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _17f4cdd0 = () => interopDefault(import('..\\pages\\filter\\index.vue' /* webpackChunkName: "pages/filter/index" */))
const _1cf5b18b = () => interopDefault(import('..\\pages\\myorders.vue' /* webpackChunkName: "pages/myorders" */))
const _9e78e666 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _2d74fabd = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _69f66ffa = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _283a4dc8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3fa414c0 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _19454f0c = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _53ff588f = () => interopDefault(import('..\\pages\\auth\\code.vue' /* webpackChunkName: "pages/auth/code" */))
const _0b3ee037 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _29689b89 = () => interopDefault(import('..\\pages\\auth\\newpassword.vue' /* webpackChunkName: "pages/auth/newpassword" */))
const _3463a3bc = () => interopDefault(import('..\\pages\\auth\\phone.vue' /* webpackChunkName: "pages/auth/phone" */))
const _683f3945 = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _ff66622e = () => interopDefault(import('..\\pages\\profile\\edit.vue' /* webpackChunkName: "pages/profile/edit" */))
const _3d61c41c = () => interopDefault(import('..\\pages\\magazine\\_id.vue' /* webpackChunkName: "pages/magazine/_id" */))
const _ebe668b4 = () => interopDefault(import('..\\pages\\order\\_id.vue' /* webpackChunkName: "pages/order/_id" */))
const _49abfaa5 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

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
    component: _08827303,
    name: "about___uz"
  }, {
    path: "/allmagazines",
    component: _062d9558,
    name: "allmagazines___uz"
  }, {
    path: "/application",
    component: _7c056608,
    name: "application___uz"
  }, {
    path: "/basket",
    component: _5c5582c2,
    name: "basket___uz"
  }, {
    path: "/business",
    component: _4c08fd08,
    name: "business___uz"
  }, {
    path: "/faq",
    component: _1d6d2d8c,
    name: "faq___uz"
  }, {
    path: "/favourite",
    component: _fed97efa,
    name: "favourite___uz"
  }, {
    path: "/filter",
    component: _17f4cdd0,
    name: "filter___uz"
  }, {
    path: "/myorders",
    component: _1cf5b18b,
    name: "myorders___uz"
  }, {
    path: "/news",
    component: _9e78e666,
    name: "news___uz",
    children: [{
      path: ":id?",
      component: _2d74fabd,
      name: "news-id___uz"
    }]
  }, {
    path: "/profile",
    component: _69f66ffa,
    name: "profile___uz"
  }, {
    path: "/ru",
    component: _283a4dc8,
    name: "index___ru"
  }, {
    path: "/search",
    component: _3fa414c0,
    name: "search___uz"
  }, {
    path: "/test",
    component: _19454f0c,
    name: "test___uz"
  }, {
    path: "/auth/code",
    component: _53ff588f,
    name: "auth-code___uz"
  }, {
    path: "/auth/login",
    component: _0b3ee037,
    name: "auth-login___uz"
  }, {
    path: "/auth/newpassword",
    component: _29689b89,
    name: "auth-newpassword___uz"
  }, {
    path: "/auth/phone",
    component: _3463a3bc,
    name: "auth-phone___uz"
  }, {
    path: "/auth/register",
    component: _683f3945,
    name: "auth-register___uz"
  }, {
    path: "/profile/edit",
    component: _ff66622e,
    name: "profile-edit___uz"
  }, {
    path: "/ru/about",
    component: _08827303,
    name: "about___ru"
  }, {
    path: "/ru/allmagazines",
    component: _062d9558,
    name: "allmagazines___ru"
  }, {
    path: "/ru/application",
    component: _7c056608,
    name: "application___ru"
  }, {
    path: "/ru/basket",
    component: _5c5582c2,
    name: "basket___ru"
  }, {
    path: "/ru/business",
    component: _4c08fd08,
    name: "business___ru"
  }, {
    path: "/ru/faq",
    component: _1d6d2d8c,
    name: "faq___ru"
  }, {
    path: "/ru/favourite",
    component: _fed97efa,
    name: "favourite___ru"
  }, {
    path: "/ru/filter",
    component: _17f4cdd0,
    name: "filter___ru"
  }, {
    path: "/ru/myorders",
    component: _1cf5b18b,
    name: "myorders___ru"
  }, {
    path: "/ru/news",
    component: _9e78e666,
    name: "news___ru",
    children: [{
      path: ":id?",
      component: _2d74fabd,
      name: "news-id___ru"
    }]
  }, {
    path: "/ru/profile",
    component: _69f66ffa,
    name: "profile___ru"
  }, {
    path: "/ru/search",
    component: _3fa414c0,
    name: "search___ru"
  }, {
    path: "/ru/test",
    component: _19454f0c,
    name: "test___ru"
  }, {
    path: "/ru/auth/code",
    component: _53ff588f,
    name: "auth-code___ru"
  }, {
    path: "/ru/auth/login",
    component: _0b3ee037,
    name: "auth-login___ru"
  }, {
    path: "/ru/auth/newpassword",
    component: _29689b89,
    name: "auth-newpassword___ru"
  }, {
    path: "/ru/auth/phone",
    component: _3463a3bc,
    name: "auth-phone___ru"
  }, {
    path: "/ru/auth/register",
    component: _683f3945,
    name: "auth-register___ru"
  }, {
    path: "/ru/profile/edit",
    component: _ff66622e,
    name: "profile-edit___ru"
  }, {
    path: "/ru/magazine/:id?",
    component: _3d61c41c,
    name: "magazine-id___ru"
  }, {
    path: "/ru/order/:id?",
    component: _ebe668b4,
    name: "order-id___ru"
  }, {
    path: "/ru/product/:id?",
    component: _49abfaa5,
    name: "product-id___ru"
  }, {
    path: "/magazine/:id?",
    component: _3d61c41c,
    name: "magazine-id___uz"
  }, {
    path: "/order/:id?",
    component: _ebe668b4,
    name: "order-id___uz"
  }, {
    path: "/product/:id?",
    component: _49abfaa5,
    name: "product-id___uz"
  }, {
    path: "/",
    component: _283a4dc8,
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
