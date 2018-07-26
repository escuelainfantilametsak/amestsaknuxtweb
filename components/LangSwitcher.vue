<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)">
      <img :src ="locale.icon" class="btn btn-sm set_es" alt="idioma">
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>