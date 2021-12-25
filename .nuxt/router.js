import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f2a3c32 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _47195df4 = () => interopDefault(import('..\\pages\\allmagazines.vue' /* webpackChunkName: "pages/allmagazines" */))
const _fd819ed0 = () => interopDefault(import('..\\pages\\application\\index.vue' /* webpackChunkName: "pages/application/index" */))
const _38e2cda6 = () => interopDefault(import('..\\pages\\basket\\index.vue' /* webpackChunkName: "pages/basket/index" */))
const _3a6f1eec = () => interopDefault(import('..\\pages\\business\\index.vue' /* webpackChunkName: "pages/business/index" */))
const _01ac0570 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _5ef15b1f = () => interopDefault(import('..\\pages\\favourite\\index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _16fbce98 = () => interopDefault(import('..\\pages\\filter\\index.vue' /* webpackChunkName: "pages/filter/index" */))
const _d313afb2 = () => interopDefault(import('..\\pages\\myorders.vue' /* webpackChunkName: "pages/myorders" */))
const _545fb169 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _37f950be = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _ffbe4cc2 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _0fba86a8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _86897ef8 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _863d18b0 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _6f3c982b = () => interopDefault(import('..\\pages\\auth\\code.vue' /* webpackChunkName: "pages/auth/code" */))
const _57a9941b = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _16cdd46d = () => interopDefault(import('..\\pages\\auth\\newpassword.vue' /* webpackChunkName: "pages/auth/newpassword" */))
const _fe6350c0 = () => interopDefault(import('..\\pages\\auth\\phone.vue' /* webpackChunkName: "pages/auth/phone" */))
const _1d5b4ae1 = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _5cda19cd = () => interopDefault(import('..\\pages\\profile\\edit.vue' /* webpackChunkName: "pages/profile/edit" */))
const _19ef0f00 = () => interopDefault(import('..\\pages\\magazine\\_id.vue' /* webpackChunkName: "pages/magazine/_id" */))
const _b56be97c = () => interopDefault(import('..\\pages\\order\\_id.vue' /* webpackChunkName: "pages/order/_id" */))
const _ead0797e = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

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
    component: _4f2a3c32,
    name: "about___uz"
  }, {
    path: "/allmagazines",
    component: _47195df4,
    name: "allmagazines___uz"
  }, {
    path: "/application",
    component: _fd819ed0,
    name: "application___uz"
  }, {
    path: "/basket",
    component: _38e2cda6,
    name: "basket___uz"
  }, {
    path: "/business",
    component: _3a6f1eec,
    name: "business___uz"
  }, {
    path: "/faq",
    component: _01ac0570,
    name: "faq___uz"
  }, {
    path: "/favourite",
    component: _5ef15b1f,
    name: "favourite___uz"
  }, {
    path: "/filter",
    component: _16fbce98,
    name: "filter___uz"
  }, {
    path: "/myorders",
    component: _d313afb2,
    name: "myorders___uz"
  }, {
    path: "/news",
    component: _545fb169,
    name: "news___uz",
    children: [{
      path: ":id?",
      component: _37f950be,
      name: "news-id___uz"
    }]
  }, {
    path: "/profile",
    component: _ffbe4cc2,
    name: "profile___uz"
  }, {
    path: "/ru",
    component: _0fba86a8,
    name: "index___ru"
  }, {
    path: "/search",
    component: _86897ef8,
    name: "search___uz"
  }, {
    path: "/test",
    component: _863d18b0,
    name: "test___uz"
  }, {
    path: "/auth/code",
    component: _6f3c982b,
    name: "auth-code___uz"
  }, {
    path: "/auth/login",
    component: _57a9941b,
    name: "auth-login___uz"
  }, {
    path: "/auth/newpassword",
    component: _16cdd46d,
    name: "auth-newpassword___uz"
  }, {
    path: "/auth/phone",
    component: _fe6350c0,
    name: "auth-phone___uz"
  }, {
    path: "/auth/register",
    component: _1d5b4ae1,
    name: "auth-register___uz"
  }, {
    path: "/profile/edit",
    component: _5cda19cd,
    name: "profile-edit___uz"
  }, {
    path: "/ru/about",
    component: _4f2a3c32,
    name: "about___ru"
  }, {
    path: "/ru/allmagazines",
    component: _47195df4,
    name: "allmagazines___ru"
  }, {
    path: "/ru/application",
    component: _fd819ed0,
    name: "application___ru"
  }, {
    path: "/ru/basket",
    component: _38e2cda6,
    name: "basket___ru"
  }, {
    path: "/ru/business",
    component: _3a6f1eec,
    name: "business___ru"
  }, {
    path: "/ru/faq",
    component: _01ac0570,
    name: "faq___ru"
  }, {
    path: "/ru/favourite",
    component: _5ef15b1f,
    name: "favourite___ru"
  }, {
    path: "/ru/filter",
    component: _16fbce98,
    name: "filter___ru"
  }, {
    path: "/ru/myorders",
    component: _d313afb2,
    name: "myorders___ru"
  }, {
    path: "/ru/news",
    component: _545fb169,
    name: "news___ru",
    children: [{
      path: ":id?",
      component: _37f950be,
      name: "news-id___ru"
    }]
  }, {
    path: "/ru/profile",
    component: _ffbe4cc2,
    name: "profile___ru"
  }, {
    path: "/ru/search",
    component: _86897ef8,
    name: "search___ru"
  }, {
    path: "/ru/test",
    component: _863d18b0,
    name: "test___ru"
  }, {
    path: "/ru/auth/code",
    component: _6f3c982b,
    name: "auth-code___ru"
  }, {
    path: "/ru/auth/login",
    component: _57a9941b,
    name: "auth-login___ru"
  }, {
    path: "/ru/auth/newpassword",
    component: _16cdd46d,
    name: "auth-newpassword___ru"
  }, {
    path: "/ru/auth/phone",
    component: _fe6350c0,
    name: "auth-phone___ru"
  }, {
    path: "/ru/auth/register",
    component: _1d5b4ae1,
    name: "auth-register___ru"
  }, {
    path: "/ru/profile/edit",
    component: _5cda19cd,
    name: "profile-edit___ru"
  }, {
    path: "/ru/magazine/:id?",
    component: _19ef0f00,
    name: "magazine-id___ru"
  }, {
    path: "/ru/order/:id?",
    component: _b56be97c,
    name: "order-id___ru"
  }, {
    path: "/ru/product/:id?",
    component: _ead0797e,
    name: "product-id___ru"
  }, {
    path: "/magazine/:id?",
    component: _19ef0f00,
    name: "magazine-id___uz"
  }, {
    path: "/order/:id?",
    component: _b56be97c,
    name: "order-id___uz"
  }, {
    path: "/product/:id?",
    component: _ead0797e,
    name: "product-id___uz"
  }, {
    path: "/",
    component: _0fba86a8,
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
