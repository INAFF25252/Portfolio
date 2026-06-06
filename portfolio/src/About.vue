<script setup lang="ts"></script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <div class="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">About</p>
          <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Chen Xi He
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-8 text-stone-700">
            Hi, I'm Chen Xi, an incoming freshman at Princeton University. I'm interested in the
            arts, from music and visual work to 3D.
          </p>
        </div>

        <figure class="relative">
          <div
            class="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,_#ff8811_0,_transparent_55%)] opacity-30"
            aria-hidden="true"
          ></div>
          <img
            src="/images/ArtGallery.JPG"
            alt="Chen Xi He at an art gallery showcase"
            class="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-orange-950/20"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
