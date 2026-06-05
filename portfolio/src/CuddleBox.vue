<script setup lang="ts">
import { ref } from 'vue'

type MediaItem = {
  title: string
  description: string
  src: string
  alt: string
}

const isFlipped = ref(false)

const mediaItems: MediaItem[] = [
  {
    title: 'Brand Logo',
    description:
      'The CuddleBox mascot and wordmark — a DIY plush craft kit brand with a playful, handmade identity.',
    src: '/images/CuddleBox.PNG',
    alt: 'CuddleBox brand logo',
  },
  {
    title: 'Product Preview',
    description: 'A leather owl keychain alongside the CuddleBox packaging.',
    src: '/images/CuddleBox1.JPG',
    alt: 'CuddleBox product with owl keychain',
  },
  {
    title: 'Platypus Popper Kit',
    description:
      'The full craft kit layout with pattern pieces, fabric, stuffing, and tools for making a plush platypus.',
    src: '/images/CuddleBox2.png',
    alt: 'CuddleBox Platypus Popper craft kit contents',
  },
]

function toggleCard() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">CuddleBox</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          A product idea focused on comfort, care, and thoughtful interaction — DIY plush craft kits
          with tough love in every box.
        </p>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
        <div class="lg:pt-4">
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">CuddleBox</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight">Business Card</h2>
          <p class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
            A 3D business card with rounded corners. Click the card to flip between the brand front
            and contact back.
          </p>
          <p class="mt-3 text-xs font-semibold uppercase tracking-widest text-stone-500">
            Click to flip
          </p>
        </div>

        <div class="card-scene mx-auto w-full max-w-2xl">
          <button
            type="button"
            class="card-scene__button"
            :aria-label="isFlipped ? 'Show business card front' : 'Show business card back'"
            @click="toggleCard"
          >
            <div class="card" :class="{ 'card--flipped': isFlipped }">
              <div class="card__face card__face--front">
                <img
                  src="/images/CuddleBoxCard.PNG"
                  alt="CuddleBox business card front"
                  class="card__image"
                />
              </div>
              <div class="card__face card__face--back">
                <img
                  src="/images/CuddleBoxCardBack.PNG"
                  alt="CuddleBox business card back"
                  class="card__image"
                />
              </div>
            </div>
          </button>
        </div>
      </div>

      <div class="mt-16 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">CuddleBox</p>
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

<style scoped>
.card-scene {
  perspective: 1400px;
}

.card-scene__button {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.card {
  position: relative;
  width: 100%;
  aspect-ratio: 3.5 / 2;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform: rotateX(8deg) rotateY(-6deg);
}

.card--flipped {
  transform: rotateX(8deg) rotateY(174deg);
}

.card-scene__button:hover .card:not(.card--flipped) {
  transform: rotateX(6deg) rotateY(-10deg) translateY(-4px);
}

.card-scene__button:hover .card--flipped {
  transform: rotateX(6deg) rotateY(170deg) translateY(-4px);
}

.card__face {
  position: absolute;
  inset: 0;
  border-radius: 1.25rem;
  overflow: hidden;
  backface-visibility: hidden;
  box-shadow:
    0 20px 40px rgba(34, 30, 34, 0.18),
    0 4px 12px rgba(34, 30, 34, 0.1);
}

.card__face--back {
  transform: rotateY(180deg);
}

.card__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.25rem;
}
</style>
