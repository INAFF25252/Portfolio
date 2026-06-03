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
    description: 'A final logo piece completing the right-side source gallery.',
    image: '/images/Logo5.PNG',
    source: '/images/Logo5.PNG',
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
          A collection of logo-focused pieces and brand marks with right-side captions.
        </p>
      </div>

      <div class="mt-14 space-y-14">
        <article
          v-for="logo in logos"
          :key="logo.title"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Logo</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ logo.title }}</h2>
          </div>

          <figure class="w-full lg:justify-self-end">
            <img
              :src="logo.image"
              :alt="logo.title"
              class="ml-auto max-h-[28rem] w-full object-contain"
            />
            <figcaption class="ml-auto mt-4 max-w-2xl text-right text-sm leading-6 text-orange-700">
              {{ logo.description }}
              <span
                class="mt-2 block break-all text-xs font-semibold uppercase tracking-widest text-stone-500"
              >
                Source: {{ logo.source }}
              </span>
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
