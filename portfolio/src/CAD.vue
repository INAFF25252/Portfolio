<script setup lang="ts">
type MediaItem = {
  title: string
  description: string
  type: 'image' | 'video'
  src: string
  alt: string
}

const mediaItems: MediaItem[] = [
  {
    title: 'Pagoda Pavilion',
    description:
      'A 3D architectural study of a traditional East Asian pavilion with stone bridges and reflective water.',
    type: 'image',
    src: '/images/Padoga.jpeg',
    alt: 'CAD render of a pagoda pavilion over water',
  },
  {
    title: 'Character Model Study',
    description:
      'A low-poly character model sculpted and posed in Blender, exploring form and stylized proportions.',
    type: 'image',
    src: '/images/CAD.jpeg',
    alt: 'Blender viewport of a stylized character model',
  },
  {
    title: 'Character Render',
    description:
      'A polished chibi-style character render with materials, lighting, and environment design.',
    type: 'image',
    src: '/images/CAD1.PNG',
    alt: 'CAD character render in a marble room',
  },
  {
    title: 'CAD Demo Video',
    description: 'A walkthrough of CAD modeling and rendering work.',
    type: 'video',
    src: '/images/CadVid.MP4',
    alt: 'CAD demo video',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">CAD Works</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Rendered models and design studies exploring form, balance, and presentation.
        </p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">CAD</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
              {{ item.description }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <img
              v-if="item.type === 'image'"
              :src="item.src"
              :alt="item.alt"
              class="ml-auto max-h-[34rem] w-full rounded-2xl object-contain"
            />
            <video
              v-else
              :src="item.src"
              controls
              playsinline
              class="ml-auto max-h-[34rem] w-full rounded-2xl object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
