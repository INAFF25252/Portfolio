<script setup lang="ts">
const artProjects = [
  {
    title: 'Portfolio',
    description: 'Selected drawings, paintings, and visual art pieces.',
    image: '/images/IMG_2981.JPG',
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
    image: '/images/DoorPainting.jpeg',
    alt: 'Door painting club preview',
    to: '/art/door-painting-club',
  },
]

const awards = [
  {
    title: 'Celebrating Arts 2025 Top 10',
    url: 'https://www.celebratingart.com/',
  },
  {
    title: 'Scholastic National Gold Award: Digital Art',
    url: 'https://www.artandwriting.org/',
  },
  {
    title: 'Scholastic Gold x1, Silver x4, Bronze x2, HM x1 (2024)',
    url: 'https://www.artandwriting.org/',
  },
  {
    title: 'Congressional Art Contest Co-Winner',
    url: 'https://www.house.gov/educators-and-students/congressional-art-competition',
  },
  {
    title: 'St. Gaudens Medal from The School Art League',
    url: 'https://schoolartleague.org/',
  },
  {
    title: 'Bow Seat International Honorable Mention',
    url: 'https://bowseat.org/',
  },
  {
    title: 'Borough Arts Festival First Place',
    url: 'https://sites.google.com/schools.nyc.gov/nycdoe-oasp/borough-arts-festivals',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Gallery</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Art Projects</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Explore portfolio artwork, logo design, and collaborative art projects.
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
              class="mt-5 inline-flex text-sm font-bold uppercase tracking-widest text-orange-600 group-hover:text-orange-800"
            >
              View project
            </span>
          </div>
        </component>
      </div>

      <section class="mt-16 rounded-3xl bg-[#221e22] p-8 text-orange-50 shadow-xl">
        <h2 class="text-3xl font-black">Art Awards</h2>
        <ul class="mt-6 grid gap-3 sm:grid-cols-2">
          <li v-for="award in awards" :key="award.title">
            <a
              :href="award.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/20 hover:text-orange-200"
            >
              {{ award.title }}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
