export { default as AboutExperience } from '../../components/about/Experience.vue'
export { default as AboutIntro } from '../../components/about/Intro.vue'
export { default as HomeAbout } from '../../components/home/About.vue'
export { default as HomeHero } from '../../components/home/Hero.vue'
export { default as HomeOss } from '../../components/home/Oss.vue'
export { default as HomeSkills } from '../../components/home/Skills.vue'
export { default as HomeTestimonials } from '../../components/home/Testimonials.vue'
export { default as LayoutFooter } from '../../components/layout/Footer.vue'
export { default as LayoutNavigation } from '../../components/layout/Navigation.vue'
export { default as LayoutThemeSwitcher } from '../../components/layout/ThemeSwitcher.vue'

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
