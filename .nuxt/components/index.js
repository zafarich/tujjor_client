export const AboutUs = () => import('../..\\components\\AboutUs.vue' /* webpackChunkName: "components/about-us" */).then(c => wrapFunctional(c.default || c))
export const BannerOnMainPage = () => import('../..\\components\\BannerOnMainPage.vue' /* webpackChunkName: "components/banner-on-main-page" */).then(c => wrapFunctional(c.default || c))
export const Brands = () => import('../..\\components\\brands.vue' /* webpackChunkName: "components/brands" */).then(c => wrapFunctional(c.default || c))
export const CatalogMagazinesMainPage = () => import('../..\\components\\CatalogMagazinesMainPage.vue' /* webpackChunkName: "components/catalog-magazines-main-page" */).then(c => wrapFunctional(c.default || c))
export const CatalogPage = () => import('../..\\components\\CatalogPage.vue' /* webpackChunkName: "components/catalog-page" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeaderMainPage = () => import('../..\\components\\HeaderMainPage.vue' /* webpackChunkName: "components/header-main-page" */).then(c => wrapFunctional(c.default || c))
export const LogoRectangle = () => import('../..\\components\\LogoRectangle.vue' /* webpackChunkName: "components/logo-rectangle" */).then(c => wrapFunctional(c.default || c))
export const MagazineDescription = () => import('../..\\components\\MagazineDescription.vue' /* webpackChunkName: "components/magazine-description" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../..\\components\\news.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const OnSaleItem = () => import('../..\\components\\OnSaleItem.vue' /* webpackChunkName: "components/on-sale-item" */).then(c => wrapFunctional(c.default || c))
export const OtherItems = () => import('../..\\components\\OtherItems.vue' /* webpackChunkName: "components/other-items" */).then(c => wrapFunctional(c.default || c))
export const PopularItem = () => import('../..\\components\\PopularItem.vue' /* webpackChunkName: "components/popular-item" */).then(c => wrapFunctional(c.default || c))
export const ProductCard = () => import('../..\\components\\ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const ProductLike = () => import('../..\\components\\ProductLike.vue' /* webpackChunkName: "components/product-like" */).then(c => wrapFunctional(c.default || c))
export const FaqQuestions = () => import('../..\\components\\FAQ\\FaqQuestions.vue' /* webpackChunkName: "components/faq-questions" */).then(c => wrapFunctional(c.default || c))
export const ModalsDangerMessage = () => import('../..\\components\\Modals\\DangerMessage.vue' /* webpackChunkName: "components/modals-danger-message" */).then(c => wrapFunctional(c.default || c))
export const ModalsSuccessModal = () => import('../..\\components\\Modals\\SuccessModal.vue' /* webpackChunkName: "components/modals-success-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalsWarningMessage = () => import('../..\\components\\Modals\\WarningMessage.vue' /* webpackChunkName: "components/modals-warning-message" */).then(c => wrapFunctional(c.default || c))
export const UIBaseLoading = () => import('../..\\components\\UI\\BaseLoading.vue' /* webpackChunkName: "components/u-i-base-loading" */).then(c => wrapFunctional(c.default || c))
export const UILoadingOnBlocks = () => import('../..\\components\\UI\\LoadingOnBlocks.vue' /* webpackChunkName: "components/u-i-loading-on-blocks" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
