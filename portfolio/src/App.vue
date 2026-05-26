<script setup lang="ts">
console.log('rendered')

import Header from '../src/Header.vue'
</script>

<template>
  <Header />
  <div>
    <router-view> </router-view>
  </div>
</template>

<style scoped></style>
