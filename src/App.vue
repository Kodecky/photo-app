<template>
  <div id="app">
    <div class="container p-p-4">

      <app-header class="header p-mt-2 p-mb-2"/>
      <categories-list class="content p-mt-2 p-mb-2"/>

      <main>
        <router-view />
      </main>

      <app-footer class="footer p-mt-2 p-mb-2">
        Footer
      </app-footer>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/layout/theHeader'
import AppFooter from '@/components/layout/theFooter'
import CategoriesList from '@/components/features/CategoriesList'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    CategoriesList
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    ...mapActions(['fetchCategories'])
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
