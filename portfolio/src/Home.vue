<script setup lang="ts"></script>

<template>
  <section class="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#ff8811_0,_transparent_32rem)] opacity-25"></div>

    <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-orange-300">
          Portfolio
        </p>
        <h1 class="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-7xl">
          Chen Xi He
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-orange-100">
          A creative portfolio blending visual art, CAD, Unity experiments, music activities, and
          product ideas into thoughtful digital and physical experiences.
        </p>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <router-link
            to="/projects"
            class="rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-[#221e22] shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-orange-300"
          >
            View Projects
          </router-link>
          <router-link
            to="/about"
            class="rounded-full border border-orange-300/50 px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-orange-100 transition hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white/10"
          >
            About Me
          </router-link>
        </div>
      </div>

    </div>
  </section>

  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8" aria-labelledby="featured-projects">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
            Selected work
          </p>
          <h2 id="featured-projects" class="mt-3 text-3xl font-black sm:text-4xl">
            Explore the projects
          </h2>
        </div>
        <router-link
          to="/projects"
          class="text-sm font-bold uppercase tracking-widest text-orange-700 hover:text-orange-900"
        >
          See all projects
        </router-link>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <article class="rounded-3xl bg-white p-6 shadow-lg">
          <p class="text-sm font-bold uppercase tracking-widest text-orange-600">CAD</p>
          <h3 class="mt-3 text-2xl font-black">3D form studies</h3>
          <p class="mt-3 text-sm leading-6 text-stone-600">
            Models and rendered concepts that explore shape, structure, and presentation.
          </p>
        </article>

        <article class="rounded-3xl bg-white p-6 shadow-lg">
          <p class="text-sm font-bold uppercase tracking-widest text-orange-600">Unity</p>
          <h3 class="mt-3 text-2xl font-black">Interactive builds</h3>
          <p class="mt-3 text-sm leading-6 text-stone-600">
            Game and interaction experiments made with real-time tools.
          </p>
        </article>

        <article class="rounded-3xl bg-white p-6 shadow-lg">
          <p class="text-sm font-bold uppercase tracking-widest text-orange-600">Art</p>
          <h3 class="mt-3 text-2xl font-black">Visual portfolio</h3>
          <p class="mt-3 text-sm leading-6 text-stone-600">
            Drawings, paintings, and awards that highlight an ongoing studio practice.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
