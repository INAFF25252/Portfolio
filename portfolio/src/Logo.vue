<script setup lang="ts">
const logos = [
  {
    title: 'Logo 1',
    description: 'A polished logo concept from the current brand image set.',
    image: '/images/Logo1.PNG',
    source: '/images/Logo1.PNG',
  },
  {
    title: 'Logo 2',
    description: 'A second logo direction with a distinct visual treatment.',
    image: '/images/Logo2.PNG',
    source: '/images/Logo2.PNG',
  },
  {
    title: 'Logo 3',
    description: 'A larger rendered logo image for the gallery collection.',
    image: '/images/Logo3.png',
    source: '/images/Logo3.png',
  },
  {
    title: 'Logo 4',
    description: 'An alternate mark for comparing logo styles and sources.',
    image: '/images/Logo4.PNG',
    source: '/images/Logo4.PNG',
  },
  {
    title: 'Logo 5',
    description: 'A final logo card completing the right-side source gallery.',
    image: '/images/Logo5.PNG',
    source: '/images/Logo5.PNG',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <aside class="rounded-3xl bg-[#221e22] p-8 text-orange-50 shadow-xl">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">Art</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Logo Works</h1>
        <p class="mt-5 text-base leading-7 text-orange-100">
          A collection of logo-focused pieces and brand marks. Each card on the right shows the
          logo image and the public image source used by the portfolio.
        </p>

        <div class="mt-8 space-y-4">
          <div v-for="logo in logos" :key="logo.source" class="rounded-2xl bg-white/10 p-4">
            <h2 class="font-bold text-orange-200">{{ logo.title }}</h2>
            <p class="mt-1 break-all text-sm text-orange-100">{{ logo.source }}</p>
          </div>
        </div>
      </aside>

      <div class="grid gap-6 sm:grid-cols-2">
        <article
          v-for="logo in logos"
          :key="logo.title"
          class="overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div class="flex h-64 items-center justify-center bg-stone-100 p-6">
            <img :src="logo.image" :alt="logo.title" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-black">{{ logo.title }}</h2>
            <p class="mt-3 text-sm leading-6 text-stone-600">{{ logo.description }}</p>
            <p class="mt-4 break-all rounded-2xl bg-orange-50 px-4 py-3 text-xs font-semibold text-orange-700">
              Source: {{ logo.source }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
