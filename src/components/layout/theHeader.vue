<template>
  <header class="header">
    <page-title class="title-link">
      <router-link to="/" class="header-span">
        PhotosApp
      </router-link>
      share your moments
    </page-title>
    <prime-button label="Submit" severity="info" :rounded="true" icon="pi pi-plus" />
  </header>
</template>

<script>
import PageTitle from './PageTitle.vue'
import Button from 'primevue/button'

export default {
  name: 'theHeader',
  components: {
    PageTitle,
    PrimeButton: Button
  }
}
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    margin: auto;
    border-bottom: 1px solid #ccc;

    .header-span {
      font-size: 26px;
      border-right: 4px solid;
      display: inline-block;
      padding-right: 10px;
      margin-right: 10px;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }

      button {
        height: max-content;
        padding: 10px 20px;

        .p-button-label{
          transform: translateY(1px);
        }
      }
  }
</style>
