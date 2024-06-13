<template>
  <div>
    <ul class="categories-list">
      <li v-for="category in categories" :key="category.id">
        <prime-button :label="category.name" severity="info" :rounded="true" outlined/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from 'primevue/button'

export default {
  name: 'CategoriesList',
  components: {
    PrimeButton: Button
  },
  computed: {
    ...mapGetters(['categories'])
  }
}
</script>

<style scoped lang="scss">
  .categories-list {
    width: 80%;
    margin: 50px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    list-style: none;
    padding: 0;
  }
</style>
