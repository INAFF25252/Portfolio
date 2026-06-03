<script setup lang="ts">
const portfolioItems = [
  {
    title: 'Portfolio Piece 1',
    caption: 'A visual study focused on mood, shape, and expressive color.',
    image: '/images/IMG_2988.JPG',
    alt: 'Portfolio artwork 1',
  },
  {
    title: 'Portfolio Piece 2',
    caption: 'An artwork exploring contrast, composition, and storytelling.',
    image: '/images/IMG_2987.JPG',
    alt: 'Portfolio artwork 2',
  },
  {
    title: 'Portfolio Piece 3',
    caption: 'A finished piece showing detail, texture, and layered visual choices.',
    image: '/images/IMG_2984.JPG',
    alt: 'Portfolio artwork 3',
  },
  {
    title: 'Portfolio Piece 4',
    caption: 'A selected portfolio work that highlights the range of the collection.',
    image: '/images/IMG_2981.JPG',
    alt: 'Portfolio artwork 4',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Art</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Portfolio</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Selected artwork presented with the caption on the left and image on the right.
        </p>
      </div>

      <div class="mt-12 space-y-8">
        <article
          v-for="item in portfolioItems"
          :key="item.image"
          class="grid overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div class="flex flex-col justify-center p-8 lg:p-10">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Caption</p>
            <h2 class="mt-3 text-3xl font-black">{{ item.title }}</h2>
            <p class="mt-4 text-base leading-7 text-stone-600">{{ item.caption }}</p>
          </div>

          <div class="bg-stone-100 p-4">
            <img :src="item.image" :alt="item.alt" class="h-80 w-full rounded-2xl object-cover" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
