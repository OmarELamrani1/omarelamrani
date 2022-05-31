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

export const LazyAboutExperience = import('../../components/about/Experience.vue' /* webpackChunkName: "components/about-experience" */).then(c => c.default || c)
export const LazyAboutIntro = import('../../components/about/Intro.vue' /* webpackChunkName: "components/about-intro" */).then(c => c.default || c)
export const LazyHomeAbout = import('../../components/home/About.vue' /* webpackChunkName: "components/home-about" */).then(c => c.default || c)
export const LazyHomeHero = import('../../components/home/Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => c.default || c)
export const LazyHomeOss = import('../../components/home/Oss.vue' /* webpackChunkName: "components/home-oss" */).then(c => c.default || c)
export const LazyHomeSkills = import('../../components/home/Skills.vue' /* webpackChunkName: "components/home-skills" */).then(c => c.default || c)
export const LazyHomeTestimonials = import('../../components/home/Testimonials.vue' /* webpackChunkName: "components/home-testimonials" */).then(c => c.default || c)
export const LazyLayoutFooter = import('../../components/layout/Footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => c.default || c)
export const LazyLayoutNavigation = import('../../components/layout/Navigation.vue' /* webpackChunkName: "components/layout-navigation" */).then(c => c.default || c)
export const LazyLayoutThemeSwitcher = import('../../components/layout/ThemeSwitcher.vue' /* webpackChunkName: "components/layout-theme-switcher" */).then(c => c.default || c)
