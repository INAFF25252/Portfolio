<script setup lang="ts">
type MediaItem = {
  title: string
  description: string
  type: 'image' | 'video'
  src: string
  alt: string
}

const mediaItems: MediaItem[] = [
  {
    title: 'Brand Concept',
    description:
      'A creative brand concept with playful visuals and pet-focused illustration.',
    type: 'image',
    src: '/images/PetPastel.jpeg',
    alt: 'Pet Pastel brand concept preview',
  },
  {
    title: 'Illustration 1',
    description: '',
    type: 'image',
    src: '/images/PetPastel1.JPG',
    alt: 'Pet Pastel illustration 1',
  },
  {
    title: 'Illustration 2',
    description: '',
    type: 'image',
    src: '/images/PetPastel2.JPG',
    alt: 'Pet Pastel illustration 2',
  },
  {
    title: 'Process Video',
    description: '',
    type: 'video',
    src: '/images/PetPastelVid1.MP4',
    alt: 'Pet Pastel process video',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Pet Pastel</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          A playful pet-focused brand with illustrations and process documentation.
        </p>
        <a
          href="https://www.instagram.com/pet_pastel_/"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-bold uppercase tracking-widest text-orange-600 transition hover:text-orange-800"
        >
          @pet_pastel_
        </a>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Pet Pastel</p>
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
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.alt"
              class="ml-auto max-h-[34rem] w-full object-contain"
            />
            <video
              v-else
              :src="item.src"
              controls
              playsinline
              class="ml-auto max-h-[34rem] w-full rounded-2xl object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
