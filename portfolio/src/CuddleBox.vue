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
    description: 'The DIY plush craft kit brand logo.',
    src: '/images/CuddleBox.PNG',
    alt: 'CuddleBox brand logo',
  },
  {
    title: 'Product Preview: Pepper the Owl',
    description: 'A leather owl keychain alongside the CuddleBox packaging.',
    src: '/images/CuddleBox1.JPG',
    alt: 'CuddleBox product with owl keychain',
  },
  {
    title: 'Platypus Regular Kit',
    description:
      'The full craft kit layout with pattern pieces, fabric, stuffing, and leather-working tools for making a plush platypus.',
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
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">CuddleBox</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          A business centered on cactus-based leather goods and teaching crafting skills
        </p>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
        <div class="lg:pt-4">
          <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">CuddleBox</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight">Business Card</h2>
          <p class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
            Our 3D business card with the signature rounded corners.
          </p>
          <p class="mt-3 text-xs font-semibold tracking-widest text-stone-500 uppercase">
            Click to flip
          </p>
        </div>

        <div class="mx-auto w-full max-w-2xl perspective-[1400px]">
          <button
            type="button"
            class="group block w-full cursor-pointer border-0 bg-transparent p-0"
            :aria-label="isFlipped ? 'Show business card front' : 'Show business card back'"
            @click="toggleCard"
          >
            <div
              class="relative aspect-[3.5/2] w-full transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)] [transform-style:preserve-3d]"
              :class="
                isFlipped
                  ? '[transform:rotateX(8deg)_rotateY(174deg)] group-hover:[transform:rotateX(6deg)_rotateY(170deg)_translateY(-4px)]'
                  : '[transform:rotateX(8deg)_rotateY(-6deg)] group-hover:[transform:rotateX(6deg)_rotateY(-10deg)_translateY(-4px)]'
              "
            >
              <div
                class="absolute inset-0 overflow-hidden rounded-[1.25rem] shadow-[0_20px_40px_rgba(34,30,34,0.18),0_4px_12px_rgba(34,30,34,0.1)] [backface-visibility:hidden]"
              >
                <img
                  src="/images/CuddleBoxCard.PNG"
                  alt="CuddleBox business card front"
                  class="block h-full w-full rounded-[1.25rem] object-cover"
                />
              </div>
              <div
                class="absolute inset-0 [transform:rotateY(180deg)] overflow-hidden rounded-[1.25rem] shadow-[0_20px_40px_rgba(34,30,34,0.18),0_4px_12px_rgba(34,30,34,0.1)] [backface-visibility:hidden]"
              >
                <img
                  src="/images/CuddleBoxCardBack.PNG"
                  alt="CuddleBox business card back"
                  class="block h-full w-full rounded-[1.25rem] object-cover"
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
            <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">CuddleBox</p>
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
