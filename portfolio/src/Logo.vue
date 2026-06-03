<script setup lang="ts">
const logos = [
  {
    title: 'Logo 1',
    caption: 'A polished logo concept from the current brand image set.',
    image: '/images/Logo1.PNG',
  },
  {
    title: 'Logo 2',
    caption: 'A second logo direction with a distinct visual treatment.',
    image: '/images/Logo2.PNG',
  },
  {
    title: 'Logo 3',
    caption: 'A larger rendered logo image for the gallery collection.',
    image: '/images/Logo3.png',
  },
  {
    title: 'Logo 4',
    caption: 'An alternate mark for comparing logo styles.',
    image: '/images/Logo4.PNG',
  },
  {
    title: 'Logo 5',
    caption: 'A final logo card completing the gallery.',
    image: '/images/Logo5.PNG',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Art</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Logo Works</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Logo-focused pieces presented with a caption on the left and the image on the right.
        </p>
      </div>

      <div class="mt-12 space-y-8">
        <article
          v-for="logo in logos"
          :key="logo.image"
          class="grid overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div class="flex flex-col justify-center p-8 lg:p-10">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Caption</p>
            <h2 class="mt-3 text-3xl font-black">{{ logo.title }}</h2>
            <p class="mt-4 text-base leading-7 text-stone-600">{{ logo.caption }}</p>
          </div>

          <div class="flex h-80 items-center justify-center bg-stone-100 p-6">
            <img :src="logo.image" :alt="logo.title" class="max-h-full max-w-full object-contain" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
