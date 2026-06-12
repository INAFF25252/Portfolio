<script setup lang="ts">
import { onActivated, onBeforeUnmount, onDeactivated, onMounted, ref } from 'vue'

const slides = [
  { src: '/images/IMG_2988.JPG', alt: 'Graphite artwork titled I See You', title: 'I See You' },
  {
    src: '/images/IMG_2984.JPG',
    alt: 'Mixed-media artwork titled Gilded Aging',
    title: 'Gilded Aging',
  },
  {
    src: '/images/IMG_2981.JPG',
    alt: 'Watercolor artwork titled The Long Ride Home',
    title: 'The Long Ride Home',
  },
  { src: '/images/Art1.JPG', alt: 'Portfolio artwork Train of Thought', title: 'Train of Thought' },
  {
    src: '/images/Art8.jpg',
    alt: 'Portfolio artwork Already Shaped Society',
    title: 'Already Shaped Society',
  },
  { src: '/images/Art9.JPG', alt: 'Portfolio artwork Nap Soup', title: 'Nap Soup' },
  {
    src: '/images/Art10.JPG',
    alt: 'Portfolio artwork Lotus Memories',
    title: '莲忆 (Lotus Memories)',
  },
  {
    src: '/images/Art11.JPG',
    alt: 'Portfolio artwork Returned to Roots',
    title: 'Returned to Roots',
  },
  {
    src: '/images/Art12.JPG',
    alt: 'Portfolio artwork Garden Gnome but Chinese',
    title: 'Garden Gnome but Chinese',
  },
  {
    src: '/images/Art13.JPG',
    alt: 'Portfolio artwork Headstrong, Literally',
    title: 'Headstrong, Literally',
  },
  { src: '/images/Art15.JPG', alt: 'Portfolio artwork Have a Bad One', title: 'Have a Bad One' },
  {
    src: '/images/IMG_2987.JPG',
    alt: "Portfolio artwork Don't Look Away",
    title: "Don't Look Away",
  },
  { src: '/images/Art16.JPG', alt: 'Portfolio artwork Meringue', title: 'Meringue' },
  {
    src: '/images/Art18.JPG',
    alt: 'Portfolio artwork The Morning After',
    title: 'The Morning After',
  },
  { src: '/images/ArtLast.PNG', alt: 'Portfolio artwork Sketchbook', title: 'Sketchbook' },
]

const AUTOPLAY_MS = 4000

const currentIndex = ref(0)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

function showNext() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(showNext, AUTOPLAY_MS)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
onActivated(startAutoplay)
onDeactivated(stopAutoplay)
</script>

<template>
  <section class="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#ff8811_0,_transparent_32rem)] opacity-25"
    ></div>

    <div class="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="lg:pt-2">
        <p class="mb-4 text-sm font-semibold tracking-[0.4em] text-orange-300 uppercase">
          Portfolio
        </p>
        <h1 class="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-7xl">
          Chen Xi He
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-orange-100 sm:text-xl sm:leading-9">
          I'm Chen Xi He, an incoming freshman at Princeton University who works across visual art,
          game design, 3D modeling, and community-focused projects. This site is built with Vue,
          TypeScript, Tailwind CSS, and Pinia, with project work that also uses Unity, Blender, and
          itch.io for demos. Visitors can browse my art portfolio, creative and technical projects,
          playable games, and documented work from nonprofits and product ideas like CuddleBox and
          Pet Pastel. The blog collects reflections on learning, teamwork, and the engineering
          behind those projects.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <router-link
            to="/projects"
            class="rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-bold tracking-widest text-[#221e22] uppercase shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-300"
          >
            View Projects
          </router-link>
          <router-link
            to="/about"
            class="rounded-full border border-orange-300/50 px-6 py-3 text-center text-sm font-bold tracking-widest text-orange-100 uppercase transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white/10"
          >
            About Me
          </router-link>
        </div>
      </div>

      <figure class="w-full" aria-live="polite" aria-label="Portfolio artwork slideshow">
        <figcaption class="mb-1 text-center text-sm font-bold tracking-wide text-orange-100">
          {{ slides[currentIndex]?.title }}
        </figcaption>
        <div class="relative w-full">
          <img
            v-for="(slide, index) in slides"
            :key="slide.src"
            :src="slide.src"
            :alt="slide.alt"
            class="max-h-[34rem] w-full object-contain transition-opacity duration-1000 ease-in-out"
            :class="
              index === currentIndex
                ? 'relative opacity-100'
                : 'absolute inset-x-0 top-0 opacity-0'
            "
          />
        </div>
      </figure>
    </div>
  </section>
</template>
