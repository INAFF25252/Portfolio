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
    title: 'Pagoda',
    description:
      'A 3D architectural study of a traditional East Asian pavilion with stone bridges and reflective water.',
    type: 'image',
    src: '/images/Padoga.jpeg',
    alt: 'Blender render of a pagoda pavilion over water',
  },
  {
    title: 'Character Model Study',
    description:
      'A low-poly character (TADC) model sculpted and posed in Blender, exploring form and stylized proportions. Gifted for my little sister.',
    type: 'image',
    src: '/images/CAD.jpeg',
    alt: 'Blender viewport of a stylized character model',
  },
  {
    title: 'Mumei',
    description: 'A polished chibi-style character (Mumei) render with materials.',
    type: 'image',
    src: '/images/CAD1.PNG',
    alt: 'Blender character render in a marble room',
  },
  {
    title: 'Blender Donut',
    description: 'Classic Blender Donut.',
    type: 'video',
    src: '/images/CadVid.MP4',
    alt: 'Blender demo video',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Blender Works</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">3D models and renders built in Blender</p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">Blender</p>
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
