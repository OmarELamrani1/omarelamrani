import Vue from 'vue'

const components = {
  HomeAbout: () => import('../../components/home/About.vue' /* webpackChunkName: "components/home-about" */).then(c => c.default || c),
  HomeHero: () => import('../../components/home/Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => c.default || c),
  HomeOss: () => import('../../components/home/Oss.vue' /* webpackChunkName: "components/home-oss" */).then(c => c.default || c),
  HomeSkills: () => import('../../components/home/Skills.vue' /* webpackChunkName: "components/home-skills" */).then(c => c.default || c),
  HomeTestimonials: () => import('../../components/home/Testimonials.vue' /* webpackChunkName: "components/home-testimonials" */).then(c => c.default || c),
  AboutExperience: () => import('../../components/about/Experience.vue' /* webpackChunkName: "components/about-experience" */).then(c => c.default || c),
  AboutIntro: () => import('../../components/about/Intro.vue' /* webpackChunkName: "components/about-intro" */).then(c => c.default || c),
  LayoutFooter: () => import('../../components/layout/Footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => c.default || c),
  LayoutNavigation: () => import('../../components/layout/Navigation.vue' /* webpackChunkName: "components/layout-navigation" */).then(c => c.default || c),
  LayoutThemeSwitcher: () => import('../../components/layout/ThemeSwitcher.vue' /* webpackChunkName: "components/layout-theme-switcher" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
