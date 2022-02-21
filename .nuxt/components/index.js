export { default as AboutFour } from '../..\\components\\AboutFour.vue'
export { default as AboutOne } from '../..\\components\\AboutOne.vue'
export { default as AboutThree } from '../..\\components\\AboutThree.vue'
export { default as AboutTwo } from '../..\\components\\AboutTwo.vue'
export { default as AccordionStyleOne } from '../..\\components\\AccordionStyleOne.vue'
export { default as BlogGridItem } from '../..\\components\\BlogGridItem.vue'
export { default as BlogSectionOne } from '../..\\components\\BlogSectionOne.vue'
export { default as BlogSidebar } from '../..\\components\\BlogSidebar.vue'
export { default as BrandLogoCarousel } from '../..\\components\\BrandLogoCarousel.vue'
export { default as BreadcrumbOne } from '../..\\components\\BreadcrumbOne.vue'
export { default as CallToActionOne } from '../..\\components\\CallToActionOne.vue'
export { default as CallToActionThree } from '../..\\components\\CallToActionThree.vue'
export { default as CallToActionTwo } from '../..\\components\\CallToActionTwo.vue'
export { default as CallToActionVideo } from '../..\\components\\CallToActionVideo.vue'
export { default as ContactForm } from '../..\\components\\ContactForm.vue'
export { default as ContactSectionOne } from '../..\\components\\ContactSectionOne.vue'
export { default as ContactSectionTwo } from '../..\\components\\ContactSectionTwo.vue'
export { default as FaqOne } from '../..\\components\\FaqOne.vue'
export { default as FeatureOne } from '../..\\components\\FeatureOne.vue'
export { default as FunfactWithTitle } from '../..\\components\\FunfactWithTitle.vue'
export { default as FunFcat } from '../..\\components\\FunFcat.vue'
export { default as HeroFixedBanner } from '../..\\components\\HeroFixedBanner.vue'
export { default as HeroSliderOne } from '../..\\components\\HeroSliderOne.vue'
export { default as HeroSliderTwo } from '../..\\components\\HeroSliderTwo.vue'
export { default as MobileNavigation } from '../..\\components\\MobileNavigation.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as Newsletter } from '../..\\components\\Newsletter.vue'
export { default as OffCanvasMobileMenu } from '../..\\components\\OffCanvasMobileMenu.vue'
export { default as PortfolioGallery } from '../..\\components\\PortfolioGallery.vue'
export { default as PortfolioGalleryTwo } from '../..\\components\\PortfolioGalleryTwo.vue'
export { default as ProjectWrapper } from '../..\\components\\ProjectWrapper.vue'
export { default as SearchPopup } from '../..\\components\\SearchPopup.vue'
export { default as SectionTitle } from '../..\\components\\SectionTitle.vue'
export { default as ServiceItem } from '../..\\components\\ServiceItem.vue'
export { default as ServiceWrapper } from '../..\\components\\ServiceWrapper.vue'
export { default as ShapeWithAnimation } from '../..\\components\\ShapeWithAnimation.vue'
export { default as SkillWithVideo } from '../..\\components\\SkillWithVideo.vue'
export { default as SuccessStory } from '../..\\components\\SuccessStory.vue'
export { default as TeamMember } from '../..\\components\\TeamMember.vue'
export { default as TeamOne } from '../..\\components\\TeamOne.vue'
export { default as TestimonialItem } from '../..\\components\\TestimonialItem.vue'
export { default as TestimonialSectionOne } from '../..\\components\\TestimonialSectionOne.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'

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
