<script setup lang="ts">
const logos = [
  {
    title: 'Pagoda Logo',
    description: 'A warm architectural mark used as a logo-style design study.',
    image: '/images/Padoga.jpeg',
    source: '/images/Padoga.jpeg',
  },
  {
    title: 'Pet Pastel Logo',
    description: 'A playful logo concept for a pet-focused pastel brand.',
    image: '/images/PetPastelLogo.PNG',
    source: '/images/PetPastelLogo.PNG',
  },
  {
    title: 'CuddleBox Logo',
    description: 'A soft product identity concept centered on comfort and care.',
    image: '/images/CuddleBox.PNG',
    source: '/images/CuddleBox.PNG',
  },
  {
    title: 'Dough Boys Logo',
    description: 'A bold food-brand inspired logo with a fun illustrated personality.',
    image: '/images/DoughBoys.PNG',
    source: '/images/DoughBoys.PNG',
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
