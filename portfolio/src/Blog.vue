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

type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

type ProjectWriteUp = {
  slug: string
  title: string
  subtitle: string
  image: string
  alt: string
  caption: string
  problem: string
  approach: string[]
  links: ProjectLink[]
  reflection: string
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

const projectWriteUps: ProjectWriteUp[] = [
  {
    slug: 'portfolio-visual-art-archive',
    title: 'Portfolio & Visual Art Archive',
    subtitle: 'Selected drawings, paintings, and visual art pieces.',
    image: '/images/Art1.JPG',
    alt: 'Portfolio artwork preview from Train of Thought',
    caption:
      'A large-scale visual portfolio across graphite, watercolor, acrylic, oil, mixed media, and digital art.',
    problem:
      'The problem was organizing years of artwork into something readable for admissions reviewers, recruiters, teachers, and gallery visitors. Instead of a loose image dump, the portfolio needed context: why each piece exists, what medium was used, and what visual decisions shaped it.',
    approach: [
      'Built as a Vue route backed by a typed artwork array, so each piece keeps its title, dimensions, medium, image path, alt text, and caption together.',
      'Used Tailwind utility classes for responsive two-column layouts that keep written context beside the artwork on desktop and stack cleanly on mobile.',
      'Added a lightweight carousel pattern for pieces with process images so viewers can compare sketches and final work without leaving the page.',
    ],
    links: [{ label: 'View portfolio gallery', href: '/art/portfolio' }],
    reflection:
      'The hardest part was editing down the writing. I learned that technical presentation is not only code; it is also information architecture, accessibility text, and deciding what a viewer needs first.',
  },
  {
    slug: 'game-design-princess-spaced-out',
    title: 'Game Design: Princess + Spaced Out',
    subtitle: 'Personal projects and group projects built in Unity and Unreal.',
    image: '/images/Unity.png',
    alt: 'Unity game project preview',
    caption:
      'That Time I Accidentally Kidnapped A Princess is a narrative prototype; Spaced Out is a rhythm game made as a team project at Urban Arts Game Academy.',
    problem:
      'These games explored how to make short interactive experiences understandable to players quickly. The Princess prototype focused on a stealth/narrative problem where a player creates a fake key without getting caught, while Spaced Out tested rhythm timing and team production.',
    approach: [
      'Used Unity for fast 2D iteration, scene management, player interaction, and exported WebGL builds for itch.io demos.',
      'Scoped each game around one core mechanic first: narrative stealth and key creation for Princess, rhythm input timing and pixel-art feedback for Spaced Out.',
      'Published playable builds on itch.io so testers could access the games without installing a local project.',
    ],
    links: [
      {
        label: 'Play Princess prototype',
        href: 'https://inaff25252.itch.io/personal-project',
        external: true,
      },
      {
        label: 'Play Spaced Out',
        href: 'https://inaff25252.itch.io/spaced-out',
        external: true,
      },
      { label: 'Game project page', href: '/unity' },
    ],
    reflection:
      'Rhythm games were harder than expected because timing changed after upload. That taught me to test in the same environment players use and to build calibration or timing buffers earlier.',
  },
  {
    slug: 'cuddlebox',
    title: 'CuddleBox',
    subtitle: 'A business centered on cactus-based leather goods and teaching crafting skills.',
    image: '/images/CuddleBox.PNG',
    alt: 'CuddleBox brand logo and project preview',
    caption:
      'CuddleBox presents cactus-based leather plush craft kits, packaging, product photos, and a flippable 3D business card.',
    problem:
      'CuddleBox was made for people who like handmade goods but may feel intimidated by leatherworking. The goal was to turn a material experiment into a friendly product system with clear packaging, approachable branding, and beginner-ready kits.',
    approach: [
      'Combined physical prototyping with digital presentation: kit layouts, product photography, brand logo work, and a Vue page that documents the product line.',
      'Used CSS 3D transforms for an interactive business card so the portfolio demonstrates both the front/back design and the interaction in one component.',
      'Kept the project page media-driven because buyers and makers need to see materials, patterns, tools, and final plush examples before understanding the concept.',
    ],
    links: [{ label: 'View CuddleBox project', href: '/cuddle-box' }],
    reflection:
      'The biggest challenge was making the kit feel simple without hiding the craft. I learned that instructions, packaging, and product photos are part of the user experience.',
  },
  {
    slug: 'pet-pastel',
    title: 'Pet Pastel',
    subtitle:
      'A nonprofit 501(c)(3) dedicated to local animal shelters through animal galleries and commissions.',
    image: '/images/PetPastel.jpeg',
    alt: 'Pet Pastel charity gallery preview',
    caption:
      'Pet Pastel documents charity galleries, pet portrait commissions, press coverage, and shelter-centered fundraising.',
    problem:
      'Pet Pastel serves local animal shelters and pet owners by turning artwork into fundraising. The project needed to explain the mission, show proof of events, and make the organization feel trustworthy to donors, volunteers, and press.',
    approach: [
      'Built a dedicated Vue project page with image and video media cards so gallery posters, group photos, commissions, and event clips can be read in sequence.',
      'Linked live public proof points including Instagram, SILive coverage, and peta2 coverage to support credibility beyond the portfolio itself.',
      'Wrote captions around outcomes, such as raising $2,300 for the ACC of NYC, so the page communicates impact instead of only showing images.',
    ],
    links: [
      { label: 'View Pet Pastel project', href: '/pet-pastel' },
      {
        label: 'Pet Pastel Instagram',
        href: 'https://www.instagram.com/pet_pastel_/',
        external: true,
      },
      {
        label: 'SILive gallery coverage',
        href: 'https://www.silive.com/galleries/RVARCU3EXNA6JCNYGHHJ6WHGG4/',
        external: true,
      },
    ],
    reflection:
      'The hardest part was coordinating art, people, promotion, and a real nonprofit goal at the same time. I learned that communication and follow-through matter as much as creative skill.',
  },
]

const supportingProjects = [
  { label: 'Blender Works', to: '/cad' },
  { label: 'Logo Works', to: '/art/logo' },
  { label: 'Door Painting Club', to: '/art/door-painting-club' },
  { label: 'Music Activities', to: '/music' },
]

const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))
</script>

<template>
  <section class="bg-orange-50 px-6 py-20 text-[#221e22] lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-sm font-semibold tracking-[0.35em] text-orange-600 uppercase">Blog</p>
        <h1 class="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Learning Journal</h1>
        <p class="mt-6 text-lg leading-relaxed text-stone-700 sm:text-xl sm:leading-9">
          Build logs and reflections about growth, collaboration, technical decisions, and creative
          engineering.
        </p>
      </div>

      <section class="mt-16 lg:mt-20">
        <h2 class="text-2xl font-black tracking-tight sm:text-3xl">All posts</h2>
        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <a
            v-for="post in sortedPosts"
            :key="post.slug"
            :href="`#${post.slug}`"
            class="group flex flex-col rounded-3xl bg-white p-8 shadow-lg shadow-orange-950/10 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <p class="text-xs font-bold tracking-[0.25em] text-orange-600 uppercase">
              {{ post.topic }}
            </p>
            <h3
              class="mt-4 text-xl leading-snug font-black text-[#221e22] group-hover:text-orange-700"
            >
              {{ post.title }}
            </h3>
            <p class="mt-4 text-xs font-semibold tracking-widest text-stone-500 uppercase">
              <time :datetime="post.date">{{ post.displayDate }}</time> / {{ post.author }}
            </p>
            <p class="mt-5 flex-1 text-base leading-7 text-stone-600">{{ post.summary }}</p>
          </a>
        </div>
      </section>

      <div class="mt-20 space-y-16 lg:space-y-20">
        <article
          v-for="post in sortedPosts"
          :id="post.slug"
          :key="post.slug"
          class="scroll-mt-28 rounded-3xl bg-white p-8 shadow-lg shadow-orange-950/10 sm:p-10 lg:p-12"
        >
          <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">
            {{ post.topic }}
          </p>
          <h2 class="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{{ post.title }}</h2>
          <p class="mt-5 text-sm font-semibold tracking-widest text-stone-500 uppercase">
            <time :datetime="post.date">{{ post.displayDate }}</time> / {{ post.author }}
          </p>
          <p class="mt-8 max-w-3xl text-lg leading-8 text-stone-700">{{ post.summary }}</p>

          <div class="mt-12 space-y-10 lg:space-y-12">
            <section v-for="section in post.sections" :key="section.heading">
              <h3 class="text-xl font-black tracking-tight sm:text-2xl">{{ section.heading }}</h3>
              <div class="mt-5 max-w-3xl space-y-6">
                <p
                  v-for="paragraph in section.paragraphs"
                  :key="paragraph"
                  class="text-base leading-8 text-stone-700"
                >
                  {{ paragraph }}
                </p>
              </div>
            </section>
          </div>

          <pre
            v-if="post.code"
            class="mt-12 overflow-x-auto rounded-2xl bg-[#221e22] p-6 text-sm leading-7 text-orange-50"
          ><code>{{ post.code }}</code></pre>
        </article>
      </div>

      <section class="mt-24 lg:mt-28">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-black tracking-tight sm:text-4xl">Project write-ups</h2>
          <p class="mt-6 text-lg leading-relaxed text-stone-700 sm:text-xl sm:leading-9">
            Major creative and technical projects documented with purpose, audience, process, links,
            and reflection.
          </p>
        </div>

        <div class="mt-16 space-y-16 lg:space-y-20">
          <article
            v-for="project in projectWriteUps"
            :id="project.slug"
            :key="project.slug"
            class="scroll-mt-28 overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10"
          >
            <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <figure class="bg-stone-100">
                <img
                  :src="project.image"
                  :alt="project.alt"
                  class="h-full min-h-80 w-full object-cover"
                />
                <figcaption class="px-8 py-5 text-base leading-7 text-stone-600">
                  {{ project.caption }}
                </figcaption>
              </figure>

              <div class="p-8 sm:p-10 lg:p-12">
                <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">
                  Major Project
                </p>
                <h3 class="mt-4 text-3xl font-black tracking-tight text-[#221e22]">
                  {{ project.title }}
                </h3>
                <p class="mt-4 text-lg font-semibold leading-8 text-stone-600">
                  {{ project.subtitle }}
                </p>

                <div class="mt-10 space-y-8 lg:space-y-10">
                  <section>
                    <h4 class="text-sm font-black tracking-widest text-[#221e22] uppercase">
                      Problem & purpose
                    </h4>
                    <p class="mt-4 text-base leading-8 text-stone-700">{{ project.problem }}</p>
                  </section>

                  <section>
                    <h4 class="text-sm font-black tracking-widest text-[#221e22] uppercase">
                      Technical approach
                    </h4>
                    <ul class="mt-4 list-disc space-y-4 pl-5 text-base leading-8 text-stone-700">
                      <li v-for="detail in project.approach" :key="detail">{{ detail }}</li>
                    </ul>
                  </section>

                  <section>
                    <h4 class="text-sm font-black tracking-widest text-[#221e22] uppercase">
                      Reflection
                    </h4>
                    <p class="mt-4 text-base leading-8 text-orange-700">{{ project.reflection }}</p>
                  </section>
                </div>

                <div class="mt-10 flex flex-wrap gap-4">
                  <component
                    :is="link.external ? 'a' : 'router-link'"
                    v-for="link in project.links"
                    :key="link.href"
                    :href="link.external ? link.href : undefined"
                    :to="link.external ? undefined : link.href"
                    :target="link.external ? '_blank' : undefined"
                    :rel="link.external ? 'noopener noreferrer' : undefined"
                    class="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold tracking-widest text-[#221e22] uppercase transition hover:bg-orange-300"
                  >
                    {{ link.label }}
                  </component>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section
        class="mt-24 rounded-3xl bg-[#221e22] p-8 text-orange-50 shadow-lg shadow-orange-950/10 sm:p-10 lg:mt-28 lg:p-12"
      >
        <h2 class="text-2xl font-black tracking-tight sm:text-3xl">More documented experiences</h2>
        <p class="mt-5 max-w-3xl text-base leading-8 text-orange-100">
          These sections add more context around 3D modeling, logo design, collaborative art, and
          service-centered music work.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <router-link
            v-for="project in supportingProjects"
            :key="project.to"
            :to="project.to"
            class="rounded-full border border-orange-300/50 px-4 py-2 text-xs font-bold tracking-widest text-orange-100 uppercase transition hover:bg-orange-300 hover:text-[#221e22]"
          >
            {{ project.label }}
          </router-link>
        </div>
      </section>
    </div>
  </section>
</template>
