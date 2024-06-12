<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'SmallTitle'
}
</script>

<style lang="scss">
.page-title {
  color: #637892;
  margin: 2rem;
  font-size: 16px;
}
</style>
