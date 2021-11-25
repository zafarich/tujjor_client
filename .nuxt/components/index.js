export { default as AboutUs } from '../..\\components\\AboutUs.vue'
export { default as BannerOnMainPage } from '../..\\components\\BannerOnMainPage.vue'
export { default as Brands } from '../..\\components\\brands.vue'
export { default as CatalogMagazinesMainPage } from '../..\\components\\CatalogMagazinesMainPage.vue'
export { default as CatalogPage } from '../..\\components\\CatalogPage.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HeaderMainPage } from '../..\\components\\HeaderMainPage.vue'
export { default as LogoRectangle } from '../..\\components\\LogoRectangle.vue'
export { default as MagazineDescription } from '../..\\components\\MagazineDescription.vue'
export { default as News } from '../..\\components\\news.vue'
export { default as OnSaleItem } from '../..\\components\\OnSaleItem.vue'
export { default as OtherItems } from '../..\\components\\OtherItems.vue'
export { default as PopularItem } from '../..\\components\\PopularItem.vue'
export { default as ProductCard } from '../..\\components\\ProductCard.vue'
export { default as ProductLike } from '../..\\components\\ProductLike.vue'
export { default as FaqQuestions } from '../..\\components\\FAQ\\FaqQuestions.vue'
export { default as ModalsDangerMessage } from '../..\\components\\Modals\\DangerMessage.vue'
export { default as ModalsSuccessModal } from '../..\\components\\Modals\\SuccessModal.vue'
export { default as ModalsWarningMessage } from '../..\\components\\Modals\\WarningMessage.vue'
export { default as UIBaseLoading } from '../..\\components\\UI\\BaseLoading.vue'
export { default as UILoadingOnBlocks } from '../..\\components\\UI\\LoadingOnBlocks.vue'

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
