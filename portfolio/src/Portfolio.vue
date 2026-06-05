<script setup lang="ts">
import { ref } from 'vue'

type ArtworkImage = {
  src: string
  alt: string
  description?: string
}

type Artwork = {
  title: string
  dimensions: string
  medium: string
  description: string
  image?: string
  alt?: string
  images?: ArtworkImage[]
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

function artworkKey(artwork: Artwork) {
  return artwork.images?.[0]?.src ?? artwork.image ?? artwork.title
}

function currentCarouselImage(artwork: Artwork) {
  if (!artwork.images?.length) return null
  return artwork.images[getCarouselIndex(artworkKey(artwork))]!
}

function artworkCaption(artwork: Artwork) {
  if (artwork.images?.length) {
    const current = currentCarouselImage(artwork)
    return current?.description || artwork.description || ''
  }
  return artwork.description || ''
}

const artworks: Artwork[] = [
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
  {
    title: 'Train of Thought',
    dimensions: '40cm x 32cm',
    medium: 'Prismacolor, Mixed Media',
    description: 'A portrait of my brother with autism. It felt right to use mixed media to echo the unique, layered way he thinks. Instead of facial features, his thoughts and interests: trains, traffic lights, and blocks, scramble out into his hands.',
    image: '/images/Art1.JPG',
    alt: 'Portfolio artwork Art 1',
  },
  {
    title: 'Already Shaped Society',
    dimensions: '51cm x 40.5cm',
    medium: 'Acrylic',
    description: 'This painting uses a shape-sorting cube as a literal representation of the metaphor of “fitting in”. The 2-D figure stands in contrast to the 3-D world, exacerbating its displacement. The figure casts a long, lonely shadow and its static shows both uncertainty and a multifaceted identity.',
    images: [
      { src: '/images/Art8.jpg', alt: 'Portfolio artwork Art 8' },
      { src: '/images/Art8-Sketch.PNG', alt: 'Portfolio artwork Art 8 sketch' },
    ],
  },
  {
    title: 'Nap Soup',
    dimensions: '26cm x 31cm',
    medium: 'Ballpoint Pen',
    description: 'Drawn from a photo of my girlfriend, sister, and cat napping together on my bed. The unorganized placements of the subjects bring a breath of intimacy to the composition. I sketched in ink, keeping in mind the negative space.',
    image: '/images/Art9.JPG',
    alt: 'Portfolio artwork Art 9',
  },
  {
    title: '莲忆 (Lotus Memories)',
    dimensions: '45cm x 75cm',
    medium: 'Prismacolor',
    description: 'On the right, I stand in America snacking on lotus root whilst looking back at my memories from when I lived in China and harvested them with my dad and community. To differentiate between background, midground and foreground, I used progressively less saturated color schemes in the back.',
    image: '/images/Art10.JPG',
    alt: 'Portfolio artwork Art 10',
  },
  {
    title: 'Returned to Roots',
    dimensions: '40.5cm x 51cm',
    medium: 'Oil Paint',
    description: 'Exploring giving new life to art waste, I emptied my pencil sharpeners, scraped my old, dried palettes, and used glue to make the shape and texture of the tree. At the very end, I used a pallet knife to replicate the dried, crusty parts that tree bark has.',
    image: '/images/Art11.JPG',
    alt: 'Portfolio artwork Art 11',
  },
  {
    title: 'Garden Gnome but Chinese',
    dimensions: '76cm x 38cm',
    medium: 'Acrylic',
    description: 'A self-portrait exploring my two cultural identities with the Chinese custom of growing si-gua (luffa gourd) in our backyards, which I still do now in America. My Chinese side is monochrome while my American side is represented with me as a colorful plastic garden gnome with shiny, puffy cheeks. Green bleeds into the colorless gourds to show how I’m blending both cultures, my past and my present.',
    image: '/images/Art12.JPG',
    alt: 'Portfolio artwork Art 12',
  },
  {
    title: 'Headstrong, Literally',
    dimensions: '40cm x 25cm x 18cm',
    medium: 'Aluminum Foil, Clay, & Acrylic',
    description: 'It’s a warning to how stubbornness can build up over time and become blinding (the horns originally had “stubborn” sentences written on them, but I felt it took away from the bull itself). Even after running through a wall, the bull remains strong and visually unfazed despite the fact that it’s stuck in place without the ability to do anything. The tag saying “But”, mirrors how stubborn people avoid critique by saying exactly that. To make the blood look viscous, I mixed red paint into slime.',
    image: '/images/Art13.JPG',
    alt: 'Portfolio artwork Art 13',
  },
  {
    title: 'Have a Bad One',
    dimensions: '30cm x 69cm',
    medium: 'Oil Pastel',
    description: 'This triptych explores the emotional toil of customer service, with red as a recurring visual highlight. Instead of realism, I tried a more visceral, abstract style. The first piece captures my customer service smile, maintained even when disrespected. The second piece is on my desire to respond to customer aggression, especially over the phone. The third piece portrays the emotions that customer condescension provokes.',
    image: '/images/Art15.JPG',
    alt: 'Portfolio artwork Art 15',
  },
  {
    title: 'Don’t Look Away',
    dimensions: '38cm x 27cm',
    medium: 'Waterolor, Marker, Prismacolor',
    description: 'A commentary on the horrors of animal experimentation through the style reminiscent of a PSA poster. The piece confronts viewers through the gaze of a human-like eye. It becomes harder to ignore animal suffering when human attributes are assigned to them. The eye is the only realistic aspect, and is dead center looking directly at the viewer, amplifying discomfort and guilt.',
    image: '/images/IMG_2987.JPG',
    alt: 'Portfolio artwork Art 16',
  },
  {
    title: 'Meringue',
    dimensions: '31cm x 55cm',
    medium: 'Oil Paint',
    description: 'I realized that because the cat’s fur was white, the environment could influence its colors even more so than if it wasn’t. I made sure her eyes were the most striking part of the piece by having its highlights be the only pure white found in the piece.',
    image: '/images/Art16.JPG',
    alt: 'Portfolio artwork Art 16',
  },
  {
    title: 'The Morning After',
    medium: 'Procreate',
    description: 'Growing up in and leaving a denomination, the dangers of childhood marriages that many religious sectors support hit close to home. This piece showcases how after a child is forced into marriage, their ring might shine brightly, their veil might still be pure white, and the morning sun might still glow beautifully, but their entire childhood is stained (revealed by the black light) by the implications of being someone’s wife.',
    image: '/images/Art17.jpg',
    alt: 'Portfolio artwork Art 17',
  },
  {
    title: 'Sketchbook',
    medium: 'Procreate, Marker, Charcoal, Pencil:',
    description: 'A small archive of my creative process with whatever I have on hand when an idea pops up. Quick sketches, composition trials, and experimentation.',
    image: '/images/Art18.JPG',
    alt: 'Portfolio artwork Art 18',
  },
  {
    title: 'Untitled Study',
    dimensions: '',
    medium: '',
    description: '',
    image: '/images/ArtLast.PNG',
    alt: 'Portfolio artwork sketch collage',
  },
  {
    title: 'Art Gallery',
    dimensions: '',
    medium: '',
    description: 'Selected works on display at a gallery showcase.',
    image: '/images/ArtGallery.JPG',
    alt: 'Art gallery showcase photo',
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
          Selected portfolio artwork shown with image captions on the left.
        </p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="artwork in artworks"
          :key="artworkKey(artwork)"
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
            <p
              v-if="artworkCaption(artwork)"
              class="mt-4 max-w-2xl text-sm leading-6 text-orange-700"
            >
              {{ artworkCaption(artwork) }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <div
              v-if="artwork.images"
              class="relative ml-auto flex w-full items-center justify-center gap-3"
            >
              <button
                type="button"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#221e22] text-orange-50 shadow-lg transition hover:bg-orange-600"
                aria-label="Previous image"
                @click="showPrevImage(artworkKey(artwork), artwork.images.length)"
              >
                ←
              </button>

              <div class="min-w-0 flex-1">
                <img
                  v-if="currentCarouselImage(artwork)"
                  :src="currentCarouselImage(artwork)!.src"
                  :alt="currentCarouselImage(artwork)!.alt"
                  class="mx-auto max-h-[34rem] w-full object-contain"
                />
                <p class="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-stone-500">
                  {{ getCarouselIndex(artworkKey(artwork)) + 1 }} / {{ artwork.images.length }}
                </p>
              </div>

              <button
                type="button"
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#221e22] text-orange-50 shadow-lg transition hover:bg-orange-600"
                aria-label="Next image"
                @click="showNextImage(artworkKey(artwork), artwork.images.length)"
              >
                →
              </button>
            </div>

            <img
              v-else
              :src="artwork.image"
              :alt="artwork.alt"
              class="ml-auto max-h-[34rem] w-full object-contain"
            />
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped></style>

