import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_1ac70dc5 from 'nuxt_plugin_plugin_1ac70dc5' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_74e390d2 from 'nuxt_plugin_bootstrapvue_74e390d2' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_image_13ff833a from 'nuxt_plugin_image_13ff833a' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_pluginutils_3381abf4 from 'nuxt_plugin_pluginutils_3381abf4' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_091d4dd1 from 'nuxt_plugin_pluginrouting_091d4dd1' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_799dd73e from 'nuxt_plugin_pluginmain_799dd73e' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_axios_0af94168 from 'nuxt_plugin_axios_0af94168' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_fontawesome_0b0266aa from 'nuxt_plugin_fontawesome_0b0266aa' // Source: .\\fontawesome.js (mode: 'all')
import nuxt_plugin_vueslickcarousel_0c02c5e7 from 'nuxt_plugin_vueslickcarousel_0c02c5e7' // Source: ..\\plugins\\vue-slick-carousel.js (mode: 'client')
import nuxt_plugin_clickOut_055955c6 from 'nuxt_plugin_clickOut_055955c6' // Source: ..\\plugins\\clickOut.js (mode: 'client')
import nuxt_plugin_beautySum_787e6b5c from 'nuxt_plugin_beautySum_787e6b5c' // Source: ..\\plugins\\beautySum.js (mode: 'client')
import nuxt_plugin_vueslidercomponent_24f1520b from 'nuxt_plugin_vueslidercomponent_24f1520b' // Source: ..\\plugins\\vue-slider-component.js (mode: 'client')
import nuxt_plugin_vuestarrating_3fe7f99a from 'nuxt_plugin_vuestarrating_3fe7f99a' // Source: ..\\plugins\\vue-star-rating.js (mode: 'client')
import nuxt_plugin_vmask_916e808a from 'nuxt_plugin_vmask_916e808a' // Source: ..\\plugins\\v-mask.js (mode: 'client')
import nuxt_plugin_persistedState_3a517c40 from 'nuxt_plugin_persistedState_3a517c40' // Source: ..\\plugins\\persistedState.js (mode: 'client')
import nuxt_plugin_vuelidate_6e4e74bf from 'nuxt_plugin_vuelidate_6e4e74bf' // Source: ..\\plugins\\vuelidate.js (mode: 'client')
import nuxt_plugin_pdf_195d7a9e from 'nuxt_plugin_pdf_195d7a9e' // Source: ..\\plugins\\pdf.js (mode: 'client')
import nuxt_plugin_auth_5aeeca70 from 'nuxt_plugin_auth_5aeeca70' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Интернет-платформа  Tujjor —  низкие цены и широкий ассортимент! | Tujjor","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},{"hid":"description","name":"description","content":"Интернет-платформа  Tujjor —  низкие цены и широкий ассортимент! | Tujjor. "},{"name":"keywords","content":"интернет магазин, узбекистан, ташкент, рассрочка, скидка, Книги, телефоны и гаджеты, компьютеры  и  оргтехника, для геймеров, кондиционеры, бытовая техника, телевизоры, видео и аудио, посуда, мебель, техника для красоты и здоровья, техника для кухни, для дома и офиса, инструменты и автотовары, игрушки, подарки и аксессуары, рамазан, одежда, обувь и аксессуары"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fslick-carousel@1.8.1\u002Fslick\u002Fslick.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fslick-carousel@1.8.1\u002Fslick\u002Fslick-theme.css"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto:wght@100;300;400;500;700;900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_1ac70dc5 === 'function') {
    await nuxt_plugin_plugin_1ac70dc5(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_74e390d2 === 'function') {
    await nuxt_plugin_bootstrapvue_74e390d2(app.context, inject)
  }

  if (typeof nuxt_plugin_image_13ff833a === 'function') {
    await nuxt_plugin_image_13ff833a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_3381abf4 === 'function') {
    await nuxt_plugin_pluginutils_3381abf4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_091d4dd1 === 'function') {
    await nuxt_plugin_pluginrouting_091d4dd1(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_799dd73e === 'function') {
    await nuxt_plugin_pluginmain_799dd73e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_0af94168 === 'function') {
    await nuxt_plugin_axios_0af94168(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_0b0266aa === 'function') {
    await nuxt_plugin_fontawesome_0b0266aa(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueslickcarousel_0c02c5e7 === 'function') {
    await nuxt_plugin_vueslickcarousel_0c02c5e7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_clickOut_055955c6 === 'function') {
    await nuxt_plugin_clickOut_055955c6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_beautySum_787e6b5c === 'function') {
    await nuxt_plugin_beautySum_787e6b5c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueslidercomponent_24f1520b === 'function') {
    await nuxt_plugin_vueslidercomponent_24f1520b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuestarrating_3fe7f99a === 'function') {
    await nuxt_plugin_vuestarrating_3fe7f99a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vmask_916e808a === 'function') {
    await nuxt_plugin_vmask_916e808a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_persistedState_3a517c40 === 'function') {
    await nuxt_plugin_persistedState_3a517c40(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuelidate_6e4e74bf === 'function') {
    await nuxt_plugin_vuelidate_6e4e74bf(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pdf_195d7a9e === 'function') {
    await nuxt_plugin_pdf_195d7a9e(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_5aeeca70 === 'function') {
    await nuxt_plugin_auth_5aeeca70(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
