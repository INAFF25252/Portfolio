<script setup lang="ts">
import { ref } from "vue"

type LogoImage = {
  src: string
  alt: string
}

type Logo = {
  title: string
  description: string
  image?: string
  images?: LogoImage[]
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

function logoKey(logo: Logo) {
  return logo.images?.[0]?.src ?? logo.image ?? logo.title
}

function currentCarouselImage(logo: Logo) {
  if (!logo.images?.length) return null
  return logo.images[getCarouselIndex(logoKey(logo))]!
}

const logos: Logo[] = [
  {
    title: "Dough Boys",
    description: "A commision to create a logo in the style of the Play-doh style for a business.",
    image: "/images/Logo1.PNG",
  },
  {
    title: "Pet Pastel",
    description: "I made the logo for my nonprofit.",
    image: "/images/Logo2.PNG",
  },
  {
    title: "Senior Shirt",
    description: "My design was chosen by SiTech's graduating class of 2026",
    image: "/images/Logo.PNG",
  },
  {
    title: "Debate Team Logo",
    description: "I was requested to make a front and back design for the Debate Team crewneck.",
    images: [
      { src: "/images/Logo4.PNG", alt: "Debate Team Logo" },
      { src: "/images/Logo5.PNG", alt: "Debate Team Logo alternate" },
    ],
  },
  {
    title: "CuddleBox",
    description:
      "I made this logo for my business which sells cactus-based leather plushies.",
    image: "/images/CuddleBox.PNG",
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
          A collection of logo-focused pieces and brand marks with left-side captions.
        </p>
      </div>

      <div class="mt-14 space-y-14">
        <article
          v-for="logo in logos"
          :key="logoKey(logo)"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Logo</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ logo.title }}</h2>
            <p class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
              {{ logo.description }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <div
              v-if="logo.images"
              class="relative ml-auto flex w-full items-center justify-center gap-3"
            >
              <button
                type="button"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#221e22] text-orange-50 shadow-lg transition hover:bg-orange-600"
                aria-label="Previous image"
                @click="showPrevImage(logoKey(logo), logo.images.length)"
              >
                ←
              </button>

              <div class="min-w-0 flex-1">
                <img
                  v-if="currentCarouselImage(logo)"
                  :src="currentCarouselImage(logo)!.src"
                  :alt="currentCarouselImage(logo)!.alt"
                  class="mx-auto max-h-[28rem] w-full object-contain"
                />
                <p class="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-stone-500">
                  {{ getCarouselIndex(logoKey(logo)) + 1 }} / {{ logo.images.length }}
                </p>
              </div>

              <button
                type="button"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#221e22] text-orange-50 shadow-lg transition hover:bg-orange-600"
                aria-label="Next image"
                @click="showNextImage(logoKey(logo), logo.images.length)"
              >
                →
              </button>
            </div>

            <img
              v-else
              :src="logo.image"
              :alt="logo.title"
              class="ml-auto max-h-[28rem] w-full object-contain"
            />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
