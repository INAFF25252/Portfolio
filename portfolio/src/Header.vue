<script setup lang="ts">
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-orange-300/20 bg-[#221e22]/90 backdrop-blur">
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
      aria-label="Main navigation"
    >
      <router-link to="/" class="text-lg font-black tracking-[0.25em] text-orange-300 uppercase">
        Chen Xi He
      </router-link>

      <div class="flex items-center gap-2 sm:gap-4">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm font-semibold tracking-wider text-orange-100 uppercase transition hover:bg-orange-300 hover:text-[#221e22]"
          active-class="bg-orange-500 text-[#221e22]"
        >
          {{ item.label }}
        </router-link>
      </div>
    </nav>
  </header>
</template>
