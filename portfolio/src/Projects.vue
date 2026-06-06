<script setup lang="ts">
const projects = [
  {
    title: 'Blender Work',
    description: '3D models and renders built in Blender.',
    image: '/images/Padoga.jpeg',
    alt: 'Blender project model',
    to: '/cad',
  },
  {
    title: 'Unity Work',
    description: 'Interactive experiments and real-time experiences built in Unity.',
    image: '/images/Unity.png',
    alt: 'Unity project screenshot',
    to: '/unity',
  },
  {
    title: 'Pet Pastel',
    description: 'A creative brand concept with playful visuals and pet-focused illustration.',
    image: '/images/PetPastel.jpeg',
    alt: 'Pet Pastel artwork',
    to: '/pet-pastel',
  },
  {
    title: 'Art Works',
    description: 'Studio artwork, awards, and visual explorations across media.',
    image: '/images/Art1.JPG',
    alt: 'Artwork portfolio preview',
    to: '/art',
  },
  {
    title: 'Music Activities',
    description: 'Performances and music-centered activities connected to creative practice.',
    image: '/images/Mall.JPG',
    alt: 'Music activity photo',
    to: '/music',
  },
  {
    title: 'CuddleBox',
    description: 'A product idea focused on comfort, care, and thoughtful interaction.',
    image: '/images/CuddleBox.PNG',
    alt: 'CuddleBox project preview',
    to: '/cuddle-box',
  },
]
</script>

<template>
  <section id="projects" class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
          Portfolio
        </p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Projects</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          A collection of creative, technical, and interactive work across art, design, and music.
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="project in projects"
          :key="project.to"
          :to="project.to"
          class="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <img :src="project.image" :alt="project.alt" class="h-56 w-full object-cover" />
          <div class="p-6">
            <h2 class="text-2xl font-black text-[#221e22]">{{ project.title }}</h2>
            <p class="mt-3 text-sm leading-6 text-stone-600">{{ project.description }}</p>
            <span
              class="mt-5 inline-flex text-sm font-bold uppercase tracking-widest text-orange-600 group-hover:text-orange-800"
            >
              View project
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
