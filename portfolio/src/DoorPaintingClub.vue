<script setup lang="ts">
type MediaItem = {
  title: string
  description: string
  src: string
  alt: string
}

const mediaItems: MediaItem[] = [
  {
    title: 'Club Overview',
    description: 'Collaborative painting work and decorative art projects.',
    src: '/images/DoorPainting.jpeg',
    alt: 'Door Painting Club overview',
  },
  {
    title: 'Door Painting 1',
    description: '',
    src: '/images/DoorPainting1.jpg',
    alt: 'Door painting project 1',
  },
  {
    title: 'Door Painting 3',
    description: '',
    src: '/images/DoorPainting3.jpg',
    alt: 'Door painting project 3',
  },
  {
    title: 'Door Painting 4',
    description: '',
    src: '/images/DoorPainting4.JPG',
    alt: 'Door painting project 4',
  },
  {
    title: 'Door Painting 5',
    description: '',
    src: '/images/DoorPainting5.JPG',
    alt: 'Door painting project 5',
  },
  {
    title: 'Door Painting 6',
    description: '',
    src: '/images/DoorPainting6.jpg',
    alt: 'Door painting project 6',
  },
  {
    title: 'Door Painting 7',
    description: '',
    src: '/images/DoorPainting7.jpg',
    alt: 'Door painting project 7',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Door Painting Club</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Collaborative painting work and decorative art projects.
        </p>
        <a
          href="https://www.instagram.com/siths_door_painting/"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-bold uppercase tracking-widest text-orange-600 transition hover:text-orange-800"
        >
          @siths_door_painting
        </a>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Door Painting Club</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p
              v-if="item.description"
              class="mt-4 max-w-2xl text-sm leading-6 text-orange-700"
            >
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
