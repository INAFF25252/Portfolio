<script setup lang="ts">
const GITHUB_PROFILE = "https://github.com/INAFF25252"

const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Vue 3", "Vue Router", "Pinia", "Tailwind CSS"],
  },
  {
    label: "Tools & Platforms",
    items: ["Vite", "Git", "GitHub", "Blender", "Unity", "itch.io", "Prettier"],
  },
]

const githubRepos = [
  {
    name: "Portfolio",
    description: "This Vue + TypeScript portfolio site with art, projects, and a learning journal.",
    href: "https://github.com/INAFF25252/Portfolio",
    updated: "Updated June 2026",
  },
  {
    name: "CSS-Blogpost",
    description: "A CSS-focused blog layout exploring responsive design and typography.",
    href: "https://github.com/INAFF25252/CSS-Blogpost",
    updated: "Updated April 2026",
  },
]
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <div class="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div>
          <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">About</p>
          <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Chen Xi He
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-8 text-stone-700">
            Hi, I'm Chen Xi, an incoming freshman at Princeton University. I'm interested in the
            arts, from music and visual work to 3D, and in building digital projects that connect
            creative work with code.
          </p>
          <div class="mt-6 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/chen-xi-he-7bbbb9347"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-bold tracking-widest text-orange-600 transition hover:text-orange-800"
            >
              <span class="uppercase">LinkedIn</span>
              <span class="font-normal text-stone-500"> · </span>
              @chen-xi-he
            </a>
            <a
              href="https://www.instagram.com/inaff.25252/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-bold tracking-widest text-orange-600 transition hover:text-orange-800"
            >
              <span class="uppercase">Instagram</span>
              <span class="font-normal text-stone-500"> · </span>
              @inaff.25252
            </a>
          </div>
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

      <section class="mt-16 lg:mt-20">
        <h2 class="text-2xl font-black tracking-tight sm:text-3xl">Languages, frameworks & tools</h2>
        <p class="mt-3 max-w-3xl text-base leading-7 text-stone-600">
          Technologies I use across this portfolio, school projects, and creative work.
        </p>

        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="group in skillGroups"
            :key="group.label"
            class="rounded-3xl bg-white p-6 shadow-lg shadow-orange-950/10"
          >
            <h3 class="text-xs font-black tracking-[0.25em] text-orange-600 uppercase">
              {{ group.label }}
            </h3>
            <ul class="mt-4 flex flex-wrap gap-2" role="list">
              <li v-for="item in group.items" :key="item">
                <span
                  class="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-semibold text-[#221e22]"
                >
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mt-16 lg:mt-20">
        <h2 class="text-2xl font-black tracking-tight sm:text-3xl">GitHub</h2>
        <p class="mt-3 max-w-3xl text-base leading-7 text-stone-600">
          Source code, web experiments, and project repos that match the work shown here.
        </p>

        <a
          :href="GITHUB_PROFILE"
          target="_blank"
          rel="noopener noreferrer"
          class="group mt-8 flex items-center gap-4 rounded-3xl bg-[#221e22] p-6 text-orange-50 shadow-lg shadow-orange-950/10 transition hover:-translate-y-0.5 hover:bg-stone-900 sm:p-8"
        >
          <span
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10"
            aria-hidden="true"
          >
            <svg class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.395-.135-.345-.72-1.395-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
              />
            </svg>
          </span>
          <span class="min-w-0 flex-1">
            <span class="block text-sm font-bold tracking-[0.25em] text-orange-300 uppercase">
              View profile
            </span>
            <span class="mt-1 block text-2xl font-black tracking-tight group-hover:text-orange-200">
              @INAFF25252
            </span>
            <span class="mt-2 block text-sm leading-6 text-orange-100">
              Creative portfolio site, CSS blog layouts, and school web projects.
            </span>
          </span>
          <span
            class="hidden shrink-0 text-sm font-bold tracking-widest text-orange-300 uppercase sm:inline"
            aria-hidden="true"
          >
            Open →
          </span>
        </a>

        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            v-for="repo in githubRepos"
            :key="repo.name"
            :href="repo.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group rounded-3xl border border-orange-200/80 bg-white p-6 shadow-lg shadow-orange-950/5 transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-xl"
          >
            <div class="flex items-start justify-between gap-3">
              <h3 class="text-lg font-black text-[#221e22] group-hover:text-orange-700">
                {{ repo.name }}
              </h3>
              <span class="text-xs font-semibold tracking-wide text-stone-400 uppercase">
                {{ repo.updated }}
              </span>
            </div>
            <p class="mt-3 text-sm leading-6 text-stone-600">{{ repo.description }}</p>
            <span
              class="mt-4 inline-flex text-xs font-bold tracking-widest text-orange-600 uppercase group-hover:text-orange-800"
            >
              View repo
            </span>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>
