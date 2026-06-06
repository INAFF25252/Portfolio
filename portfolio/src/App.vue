<script setup lang="ts">
import Header from './Header.vue'
</script>

<template>
  <div class="min-h-screen bg-[#221e22] text-orange-50">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>
