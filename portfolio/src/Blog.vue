<script setup lang="ts">
type BlogSection = {
  heading: string
  paragraphs: string[]
}

type BlogPost = {
  slug: string
  title: string
  date: string
  displayDate: string
  author: string
  topic: string
  summary: string
  sections: BlogSection[]
  code?: string
}

const posts: BlogPost[] = [
  {
    slug: 'routing-finally-clicked',
    title: 'Growth Milestone: When Routing Finally Clicked',
    date: '2026-06-11',
    displayDate: 'June 11, 2026',
    author: 'Chen Xi He',
    topic: 'Growth Milestones',
    summary:
      'A reflection on understanding how a Vue single-page app turns separate pages into connected components.',
    sections: [
      {
        heading: 'The moment',
        paragraphs: [
          'The concept that clicked for me was routing. At first, a website felt like a group of separate files that somehow had to be stitched together. When I worked on this portfolio, I realized that the router is the map between a URL and the component that should render for that URL.',
          'That changed how I thought about the whole project. Projects, art, CuddleBox, Pet Pastel, and now this blog are not random pages. They are connected views inside one application, which makes the site feel consistent while still giving each section its own purpose.',
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'This matters because structure is part of usability. A recruiter, teacher, or engineer should be able to move through the site without guessing where content lives. Routing also made me think more technically about naming, hierarchy, and how a user enters the site from a direct link.',
          'The small code sample below shows the idea that made the app feel understandable: each route pairs a path with the component that owns that screen.',
        ],
      },
    ],
    code: `import { createRouter, createWebHistory } from 'vue-router'
import Projects from './Projects.vue'
import Blog from './Blog.vue'

const routes = [
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})`,
  },
  {
    slug: 'working-in-a-team',
    title: 'Working in a Team: What Spaced Out Taught Me',
    date: '2026-06-10',
    displayDate: 'June 10, 2026',
    author: 'Chen Xi He',
    topic: 'Working in a team',
    summary:
      'A build-log reflection on communication, scope, timing bugs, and what I gained from a group game project.',
    sections: [
      {
        heading: 'Communication became part of the work',
        paragraphs: [
          'Spaced Out was a rhythm game made as a team project at Urban Arts Game Academy. The technical challenge was obvious: rhythm games depend on timing, feedback, and repeated playtesting. The teamwork challenge was just as important because no one person could own every part at once.',
          'I learned that communication is not only giving updates after something is finished. It is naming what is blocked, explaining what changed, and making sure teammates understand how one decision affects their part of the game.',
        ],
      },
      {
        heading: 'The hard part',
        paragraphs: [
          'The hardest bug was timing. The game could feel correct locally but slightly off after being uploaded. That forced us to compare the development environment with the player environment and to talk about what was actually happening instead of assuming the first version was fine.',
          'Working in a team also made scope real. If art, music, input, and level timing all depend on each other, a small change can ripple through the project. I gained practice in compromise and handoff, which I could not have learned from a solo prototype in the same way.',
        ],
      },
    ],
  },
  {
    slug: 'capstone-reflection',
    title: 'Capstone Reflection: Creative Engineering After Four Years',
    date: '2026-06-09',
    displayDate: 'June 9, 2026',
    author: 'Chen Xi He',
    topic: 'Capstone Reflection',
    summary:
      'A reflection on growth across art, CS, product design, service projects, and what still needs work.',
    sections: [
      {
        heading: 'What I am proud of',
        paragraphs: [
          'Across the last four years, I became more confident combining creative work with technical systems. I am proud that my projects are not only assignments. Pet Pastel connects art to animal shelter fundraising, CuddleBox turns product design into a teachable craft kit, and my portfolio turns individual artworks into a structured archive.',
          'I am also proud of learning to accept feedback without treating it like failure. When someone could not understand a project page quickly, that was not just a design complaint. It was useful information about hierarchy, writing, and whether the page was serving the viewer.',
        ],
      },
      {
        heading: 'What I still want to work on',
        paragraphs: [
          'I still want to improve the engineering side of my creative projects. That means writing clearer READMEs, testing interactive pieces in their deployed environment, checking accessibility earlier, and making technical decisions easier for another person to follow.',
          'The biggest growth area for me is turning experiments into maintainable systems. I want my future work in CS and engineering to keep the imagination of art projects while becoming more reliable, documented, and collaborative.',
        ],
      },
    ],
  },
]

const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
</script>

<template>
  <section class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-5xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Blog</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Learning Journal</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Build logs and reflections about growth, collaboration, technical decisions, and creative
          engineering.
        </p>
      </div>

      <section class="mt-12">
        <h2 class="text-2xl font-black tracking-tight">All posts</h2>
        <div class="mt-6 grid gap-5 md:grid-cols-3">
          <a
            v-for="post in sortedPosts"
            :key="post.slug"
            :href="`#${post.slug}`"
            class="group rounded-3xl bg-white p-6 shadow-lg shadow-orange-950/10 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <p class="text-xs font-bold tracking-[0.25em] text-orange-600 uppercase">
              {{ post.topic }}
            </p>
            <h3
              class="mt-3 text-xl leading-tight font-black text-[#221e22] group-hover:text-orange-700"
            >
              {{ post.title }}
            </h3>
            <p class="mt-2 text-xs font-semibold tracking-widest text-stone-500 uppercase">
              <time :datetime="post.date">{{ post.displayDate }}</time> / {{ post.author }}
            </p>
            <p class="mt-4 text-sm leading-6 text-stone-600">{{ post.summary }}</p>
          </a>
        </div>
      </section>

      <div class="mt-14 space-y-10">
        <article
          v-for="post in sortedPosts"
          :id="post.slug"
          :key="post.slug"
          class="scroll-mt-28 rounded-3xl bg-white p-6 shadow-lg shadow-orange-950/10 sm:p-8"
        >
          <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">
            {{ post.topic }}
          </p>
          <h2 class="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{{ post.title }}</h2>
          <p class="mt-3 text-sm font-semibold tracking-widest text-stone-500 uppercase">
            <time :datetime="post.date">{{ post.displayDate }}</time> / {{ post.author }}
          </p>
          <p class="mt-5 max-w-3xl text-base leading-7 text-stone-700">{{ post.summary }}</p>

          <div class="mt-8 space-y-7">
            <section v-for="section in post.sections" :key="section.heading">
              <h3 class="text-xl font-black tracking-tight">{{ section.heading }}</h3>
              <div class="mt-3 space-y-4">
                <p
                  v-for="paragraph in section.paragraphs"
                  :key="paragraph"
                  class="text-sm leading-7 text-stone-700"
                >
                  {{ paragraph }}
                </p>
              </div>
            </section>
          </div>

          <pre
            v-if="post.code"
            class="mt-8 overflow-x-auto rounded-2xl bg-[#221e22] p-5 text-sm leading-6 text-orange-50"
          ><code>{{ post.code }}</code></pre>
        </article>
      </div>
    </div>
  </section>
</template>
