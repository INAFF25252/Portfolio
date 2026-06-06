<script setup lang="ts">
import { ref } from 'vue'

type MediaImage = {
  src: string
  alt: string
  description?: string
}

type MediaItem = {
  title: string
  description: string
  image?: string
  alt?: string
  images?: MediaImage[]
}

const carouselIndices = ref<Record<string, number>>({})

function getCarouselIndex(key: string) {
  return carouselIndices.value[key] ?? 0
}

function showPrevImage(key: string, total: number) {
  carouselIndices.value[key] = (getCarouselIndex(key) - 1 + total) % total
}

function showNextImage(key: string, total: number) {
  carouselIndices.value[key] = (getCarouselIndex(key) + 1) % total
}

function mediaKey(item: MediaItem) {
  return item.images?.[0]?.src ?? item.image ?? item.title
}

function currentCarouselImage(item: MediaItem) {
  if (!item.images?.length) return null
  return item.images[getCarouselIndex(mediaKey(item))]!
}

function mediaCaption(item: MediaItem) {
  if (item.images?.length) {
    const current = currentCarouselImage(item)
    return current?.description || item.description || ''
  }
  return item.description || ''
}

const mediaItems: MediaItem[] = [
  {
    title: 'Ensemble Group Pic',
    description:
      'Flute, saxophone, and violin performers together for the annual WWII memorial in Staten Island.',
    images: [
      {
        src: '/images/Music.JPG',
        alt: 'Three musicians with flute, saxophone, and violin on stage.',
        description:
          'Flute, saxophone, and violin (Me!) performers together for the annual WWII memorial in Staten Island.',
      },
      {
        src: '/images/Music6.JPG',
        alt: 'Musicians on stage after a recital',
        description: 'Flute, saxophone, and violin performers together with Eileen Bardell.',
      },
    ],
  },
  {
    title: 'Holiday Mall Performance',
    description: 'A festive ensemble performance featuring saxophone, violin, and oboe at a mall.',
    image: '/images/Mall.JPG',
    alt: 'Holiday mall performance with saxophone, violin, and oboe',
  },
  {
    title: 'Memory Ward Mural 2024',
    description:
      'Members of the Young Musicians/Artists of Staten Island program painting a mural for seniors at the Clove Lakes Senior Center over the Summer.',
    image: '/images/Music2.JPG',
    alt: 'Young Musicians program group photo',
  },
  {
    title: 'Showcase Performance',
    description:
      'Musicians presenting alongside visual artwork and solo violin performance at Clove Lakes Senior Center.',
    images: [
      {
        src: '/images/Music3.JPG',
        alt: 'Musicians with artwork at a showcase',
        description:
          'Musicians presenting alongside visual artwork and solo violin performance at Clove Lakes Senior Center.',
      },
      {
        src: '/images/Music4.JPG',
        alt: 'Violin solo performance at a gallery',
        description: 'My violin solo.',
      },
    ],
  },
  {
    title: 'Press Feature',
    description:
      'Coverage of a Young Musicians/Artists of Staten Island holiday performance at Clove Lakes senior center.',
    image: '/images/Music7.JPG',
    alt: 'Newspaper feature on young musicians performance',
  },
  {
    title: 'Senior Center Performance',
    description: 'A holiday ensemble performance for seniors.',
    image: '/images/Music8.JPG',
    alt: 'Musicians performing at a senior center',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
          Young Musicians/Artists of Staten Island
        </h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Performances and music-centered activities connected to service
        </p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="mediaKey(item)"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">Music</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p v-if="mediaCaption(item)" class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
              {{ mediaCaption(item) }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <div
              v-if="item.images"
              class="relative ml-auto flex w-full items-center justify-center gap-3"
            >
              <button
                type="button"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#221e22] text-orange-50 shadow-lg transition hover:bg-orange-600"
                aria-label="Previous image"
                @click="showPrevImage(mediaKey(item), item.images.length)"
              >
                ←
              </button>

              <div class="min-w-0 flex-1">
                <img
                  v-if="currentCarouselImage(item)"
                  :src="currentCarouselImage(item)!.src"
                  :alt="currentCarouselImage(item)!.alt"
                  class="mx-auto max-h-[34rem] w-full rounded-2xl object-contain"
                />
                <p
                  class="mt-3 text-center text-xs font-semibold tracking-widest text-stone-500 uppercase"
                >
                  {{ getCarouselIndex(mediaKey(item)) + 1 }} / {{ item.images.length }}
                </p>
              </div>

              <button
                type="button"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#221e22] text-orange-50 shadow-lg transition hover:bg-orange-600"
                aria-label="Next image"
                @click="showNextImage(mediaKey(item), item.images.length)"
              >
                →
              </button>
            </div>

            <img
              v-else
              :src="item.image"
              :alt="item.alt"
              class="ml-auto max-h-[34rem] w-full rounded-2xl object-contain"
            />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
