import locale78296afc from '../..\\lang\\uz.js'
import locale77fcde9e from '../..\\lang\\ru.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"uz","file":"uz.js"},{"code":"ru","file":"ru.js"}],
  defaultLocale: "uz",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "D:\\active_projects\\tujjor_test\\lang",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  prefix_except_default: "uz",
  normalizedLocales: [{"code":"uz","file":"uz.js"},{"code":"ru","file":"ru.js"}],
  localeCodes: ["uz","ru"],
}

export const localeMessages = {
  'uz.js': () => Promise.resolve(locale78296afc),
  'ru.js': () => Promise.resolve(locale77fcde9e),
}
