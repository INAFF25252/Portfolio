<script setup lang="ts">
type MediaItem = {
  title: string
  description: string
  type: "image" | "video"
  src: string
  alt: string
}

const pressLinks = [
  {
    label: "SILive Gallery",
    url: "https://www.silive.com/galleries/RVARCU3EXNA6JCNYGHHJ6WHGG4/",
  },
  {
    label: "peta2 — Art Show for Animal Shelters",
    url: "https://www.peta2.com/culture/art-show-animal-shelters/",
  },
]

const mediaItems: MediaItem[] = [
  {
    title: "2025 Gallery",
    description:
      "Second annual charity gallery where we raised $2,300 for the ACC of NYC.",
    type: "image",
    src: "/images/PetPastel.jpeg",
    alt: "Pet Pastel brand concept preview",
  },
  {
    title: "2024 Gallery Poster",
    description: "The poster for our first gallery.",
    type: "image",
    src: "/images/PetPastel1.JPG",
    alt: "Pet Pastel illustration 1",
  },
  {
    title: "2024 Gallery",
    description: "A small snippet of our 2024 gallery.",
    type: "image",
    src: "/images/PetPastel2.JPG",
    alt: "Pet Pastel illustration 2",
  },
  {
    title: "2024 Gallery ACC Group Pic",
    description:
      "Pet Pastel, ACC volunteers, and Clove Lakes Senior Center Officials at the 2024 gallery.",
    type: "image",
    src: "/images/PetPastel3.JPG",
    alt: "Pet Pastel volunteer group photo",
  },
  {
    title: "2025 Gallery Video",
    description: "A video showing the events of the 2025 Gallery.",
    type: "video",
    src: "/images/PetPastelVid1.MP4",
    alt: "Pet Pastel process video",
  },
  {
    title: "Example of Commision",
    description: "",
    type: "image",
    src: "/images/PetPastel6.JPG",
    alt: "Pet Pastel cat portrait",
  },
  {
    title: "Example of Commision 2",
    description: "",
    type: "image",
    src: "/images/PetPastel7.JPG",
    alt: "Pet Pastel dog portrait",
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Project</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Pet Pastel</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          A nonprofit 501(c)(3) dedicated to local animal shelters through animal galleries and
          commisions
        </p>
        <div class="mt-4 flex flex-col items-center gap-2">
          <a
            href="https://www.instagram.com/pet_pastel_/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-bold uppercase tracking-widest text-orange-600 transition hover:text-orange-800"
          >
            @pet_pastel_
          </a>
          <a
            v-for="link in pressLinks"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-bold uppercase tracking-widest text-orange-600 transition hover:text-orange-800"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

      <div class="mt-14 space-y-16">
        <article
          v-for="item in mediaItems"
          :key="item.src"
          class="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start"
        >
          <div class="lg:pt-8">
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">Pet Pastel</p>
            <h2 class="mt-3 text-3xl font-black tracking-tight">{{ item.title }}</h2>
            <p
              v-if="item.description"
              class="mt-4 max-w-2xl text-sm leading-6 text-orange-700"
            >
              {{ item.description }}
            </p>
          </div>

          <figure class="w-full lg:justify-self-end">
            <img
              v-if='item.type === "image"'
              :src="item.src"
              :alt="item.alt"
              class="ml-auto max-h-[34rem] w-full object-contain"
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
