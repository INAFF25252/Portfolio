<script setup lang="ts">
const artProjects = [
  {
    title: 'Portfolio',
    description: 'Selected drawings, paintings, and visual art pieces.',
    image: '/images/Art1.JPG',
    alt: 'Visual artwork preview',
    to: '/art/portfolio',
  },
  {
    title: 'Logo Works',
    description: 'Logo concepts and brand marks with source images.',
    image: '/images/Padoga.jpeg',
    alt: 'Logo work preview',
    to: '/art/logo',
  },
  {
    title: 'Door Painting Club',
    description: 'Collaborative painting work and decorative art projects.',
    image: '/images/DoorPainting7.jpg',
    alt: 'Door painting club preview',
    to: '/art/door-painting-club',
  },
]

const awards = [
  {
    org: 'Celebrating Arts',
    honor: 'Top 10',
    year: '2025',
    url: 'https://www.celebratingart.com/',
  },
  {
    org: 'Scholastic Art & Writing Awards',
    honor: 'National Gold — Digital Art',
    url: 'https://www.artandwriting.org/',
  },
  {
    org: 'Scholastic Art & Writing Awards',
    honor: 'Gold ×1, Silver ×4, Bronze ×2, Honorable Mention ×1',
    year: '2024',
    url: 'https://www.artandwriting.org/',
  },
  {
    org: 'Congressional Art Competition',
    honor: 'Co-Winner',
    url: 'https://www.house.gov/educators-and-students/congressional-art-competition',
  },
  {
    org: 'The School Art League',
    honor: 'St. Gaudens Medal',
    url: 'https://schoolartleague.org/',
  },
  {
    org: 'Bow Seat Ocean Awareness',
    honor: 'International Honorable Mention',
    url: 'https://bowseat.org/',
  },
  {
    org: 'NYC Borough Arts Festival',
    honor: 'First Place',
    url: 'https://sites.google.com/schools.nyc.gov/nycdoe-oasp/borough-arts-festivals',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Gallery</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Art Projects</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Large scale projects, awards, and portfolio across media
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <component
          :is="project.to ? 'router-link' : 'article'"
          v-for="project in artProjects"
          :key="project.title"
          :to="project.to"
          class="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <img :src="project.image" :alt="project.alt" class="h-56 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-black text-[#221e22]">{{ project.title }}</h2>
            <p class="mt-3 text-sm leading-6 text-stone-600">{{ project.description }}</p>
            <span
              v-if="project.to"
              class="mt-5 inline-flex text-sm font-bold tracking-widest text-orange-600 uppercase group-hover:text-orange-800"
            >
              View project
            </span>
          </div>
        </component>
      </div>

      <section class="mt-16">
        <div class="text-center">
          <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">
            Recognition
          </p>
          <h2 class="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Art Awards</h2>
        </div>

        <ul
          class="mt-10 divide-y divide-stone-200 overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10"
        >
          <li v-for="award in awards" :key="`${award.org}-${award.honor}`">
            <a
              :href="award.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-orange-50/60 sm:px-8"
            >
              <div class="min-w-0">
                <p class="font-semibold text-[#221e22] group-hover:text-orange-700">
                  {{ award.org }}
                </p>
                <p class="mt-0.5 text-sm text-stone-500">{{ award.honor }}</p>
              </div>
              <span
                v-if="award.year"
                class="shrink-0 text-sm font-medium text-stone-400 tabular-nums"
              >
                {{ award.year }}
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
