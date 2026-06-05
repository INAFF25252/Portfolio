<script setup lang="ts">
const artworks = [
  {
    title: 'I See You',
    dimensions: '43cm x 28cm',
    medium: 'Graphite',
    description:
      'When my sister was in the ICU, I drew her while she was spacing out after a few days in the hospital, a moment of calm after a traumatic event. She had the water pressed to her lips, yet wasn’t drinking. Her hair hadn’t been washed for days, and still had pieces of medical tape buried within, which is why there are stray strands everywhere. I had to exaggerate the dim hospital lighting on her face so that she would stand out.',
    image: '/images/IMG_2988.JPG',
    alt: 'Graphite artwork titled I See You',
  },
  {
    title: 'Untitled Study',
    dimensions: '',
    medium: '',
    description: '',
    image: '/images/IMG_2987.JPG',
    alt: 'Portfolio artwork study',
  },
  {
    title: 'Gilded Aging',
    dimensions: '46cm x 61cm',
    medium: 'Acrylic, yarn, rug, and gold foil',
    description:
      'The piece depicts how childhood innocence is destroyed by the greed of adulthood. Adult hands rip open the child’s cat’s cradle game to reveal a golden interior that’s molding and infested with flies. I braided yarn and used wire to make a giant sewing needle to sew the yarn through the canvas. To emphasize the change from childhood to adulthood, I cut and glued on a rug found in schools.',
    image: '/images/IMG_2984.JPG',
    alt: 'Mixed-media artwork titled Gilded Aging',
  },
  {
    title: 'The Long Ride Home',
    dimensions: '66cm x 51cm',
    medium: 'Watercolor',
    description:
      'Living in New York City, the commute back from work is illustrated by the inside of a subway. Her muted palette, neutral expression, and strong arms capture the quiet resilience of the working-class experience.',
    image: '/images/IMG_2981.JPG',
    alt: 'Watercolor artwork titled The Long Ride Home',
  },
]
</script>

<template>
  <section id="projects" class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Gallery</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Art Projects</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Selected portfolio artwork shown with image captions on the right.
        </p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="artwork in artworks"
          :key="artwork.image"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Portfolio</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ artwork.title }}</h2>
            <p
              v-if="artwork.dimensions || artwork.medium"
              class="mt-3 text-sm font-semibold uppercase tracking-widest text-stone-500"
            >
              {{ [artwork.dimensions, artwork.medium].filter(Boolean).join(' - ') }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <img
              :src="artwork.image"
              :alt="artwork.alt"
              class="ml-auto max-h-[34rem] w-full object-contain"
            />
            <figcaption
              v-if="artwork.description"
              class="ml-auto mt-4 max-w-2xl text-right text-sm leading-6 text-orange-700"
            >
              {{ artwork.description }}
            </figcaption>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped></style>

