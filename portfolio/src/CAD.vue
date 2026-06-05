<script setup lang="ts">
type MediaItem = {
  title: string
  description: string
  src: string
  alt: string
}

const mediaItems: MediaItem[] = [
  {
    title: 'Pagoda Pavilion',
    description:
      'A 3D architectural study of a traditional East Asian pavilion with stone bridges and reflective water.',
    src: '/images/Padoga.jpeg',
    alt: 'CAD render of a pagoda pavilion over water',
  },
  {
    title: 'Character Model Study',
    description:
      'A low-poly character model sculpted and posed in Blender, exploring form and stylized proportions.',
    src: '/images/CAD.jpeg',
    alt: 'Blender viewport of a stylized character model',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">CAD Works</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Rendered models and design studies exploring form, balance, and presentation.
        </p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">CAD</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
              {{ item.description }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <img
              :src="item.src"
              :alt="item.alt"
              class="ml-auto max-h-[34rem] w-full rounded-2xl object-contain"
            />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
