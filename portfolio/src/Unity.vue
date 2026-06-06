<script setup lang="ts">
type MediaItem = {
  title: string
  description: string
  src: string
  alt: string
  link?: string
  linkLabel?: string
}

const mediaItems: MediaItem[] = [
  {
    title: 'Demo Video 1',
    description: '',
    src: '/images/UnityVid.mov',
    alt: 'Unity demo video 1',
    link: 'https://inaff25252.itch.io/personal-project',
    linkLabel: 'Personal Project on itch.io',
  },
  {
    title: 'Demo Video 2',
    description: '',
    src: '/images/UnityVid2.mov',
    alt: 'Unity demo video 2',
    link: 'https://inaff25252.itch.io/spaced-out',
    linkLabel: 'Spaced Out on itch.io',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Unity Work</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Interactive experiments and real-time experiences built in Unity.
        </p>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Unity</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p
              v-if="item.description"
              class="mt-4 max-w-2xl text-sm leading-6 text-orange-700"
            >
              {{ item.description }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <video
              :src="item.src"
              controls
              playsinline
              class="ml-auto max-h-[34rem] w-full rounded-2xl object-contain"
            >
              Your browser does not support the video tag.
            </video>
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 block text-center text-sm font-bold uppercase tracking-widest text-orange-600 transition hover:text-orange-800"
            >
              {{ item.linkLabel ?? 'Play on itch.io' }}
            </a>
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
