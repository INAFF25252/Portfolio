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
    title: 'That Time I Accidentally Kidnapped A Princess',
    description:
      'A 2D narrative-based game snippet where the player needs to create a fake key without getting caught. Narrative game design is super fun, I still need to set up the power/ability system that will allow players to play though. This portion is inspired by the game Escapist.',
    src: '/images/UnityVid.mov',
    alt: 'Unity demo video 1',
    link: 'https://inaff25252.itch.io/personal-project',
    linkLabel: 'That Time I Accidentally Kidnapped A Princess on Itch.io',
  },
  {
    title: 'Spaced Out',
    description: 'A rhythm game made with pixel art. Team Project at Urban Arts Game Academy. Rhythm games are super difficult and time consuming. The timing changes when uploaded to different sites so the itch-uploaded one is slightly off in timing.',
    src: '/images/UnityVid2.mov',
    alt: 'Unity demo video 2',
    link: 'https://inaff25252.itch.io/spaced-out',
    linkLabel: 'Spaced Out on Itch.io',
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Game Design</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Personal projects and group projects built in Unity and Unreal
        </p>
        <a
          href="https://github.com/INAFF25252"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-block text-sm font-bold tracking-widest text-orange-600 uppercase transition hover:text-orange-800"
        >
          GitHub
        </a>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">Unity</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p v-if="item.description" class="mt-4 max-w-2xl text-sm leading-6 text-orange-700">
              {{ item.description }}
            </p>
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-block text-sm font-bold tracking-widest text-orange-600 uppercase transition hover:text-orange-800"
            >
              {{ item.linkLabel ?? 'Play on itch.io' }}
            </a>
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
          </figure>
        </article>
      </div>
    </div>
  </section>
</template>
