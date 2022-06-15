export { default as BlogGridItem } from '../../components/BlogGridItem.vue'
export { default as BreadcrumbOne } from '../../components/BreadcrumbOne.vue'
export { default as CallToActionOne } from '../../components/CallToActionOne.vue'
export { default as CallToActionTwo } from '../../components/CallToActionTwo.vue'
export { default as MobileNavigation } from '../../components/MobileNavigation.vue'
export { default as OffCanvasMobileMenu } from '../../components/OffCanvasMobileMenu.vue'
export { default as SectionTitle } from '../../components/SectionTitle.vue'
export { default as ShapeWithAnimation } from '../../components/ShapeWithAnimation.vue'
export { default as TeamMember } from '../../components/TeamMember.vue'
export { default as TeamOne } from '../../components/TeamOne.vue'
export { default as TestimonialItem } from '../../components/TestimonialItem.vue'
export { default as TestimonialSectionOne } from '../../components/TestimonialSectionOne.vue'
export { default as Unit } from '../../components/Unit.vue'

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
