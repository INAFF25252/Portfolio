<script setup lang="ts">
type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

type Project = {
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

const majorProjects: Project[] = [
  {
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
</script>

<template>
  <section id="projects" class="bg-orange-50 px-6 py-16 text-[#221e22] lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Projects</h1>
        <p class="mt-4 text-lg leading-8 text-stone-700">
          Major creative and technical projects documented with purpose, audience, process, links,
          and reflection.
        </p>
      </div>

      <div class="mt-12 space-y-10">
        <article
          v-for="project in majorProjects"
          :key="project.title"
          class="overflow-hidden rounded-3xl bg-white shadow-lg shadow-orange-950/10"
        >
          <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <figure class="bg-stone-100">
              <img
                :src="project.image"
                :alt="project.alt"
                class="h-full min-h-80 w-full object-cover"
              />
              <figcaption class="px-6 py-4 text-sm leading-6 text-stone-600">
                {{ project.caption }}
              </figcaption>
            </figure>

            <div class="p-6 sm:p-8">
              <p class="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">
                Major Project
              </p>
              <h2 class="mt-3 text-3xl font-black tracking-tight text-[#221e22]">
                {{ project.title }}
              </h2>
              <p class="mt-3 text-base font-semibold text-stone-600">{{ project.subtitle }}</p>

              <div class="mt-6 space-y-5">
                <section>
                  <h3 class="text-sm font-black tracking-widest text-[#221e22] uppercase">
                    Problem & purpose
                  </h3>
                  <p class="mt-2 text-sm leading-6 text-stone-700">{{ project.problem }}</p>
                </section>

                <section>
                  <h3 class="text-sm font-black tracking-widest text-[#221e22] uppercase">
                    Technical approach
                  </h3>
                  <ul class="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-700">
                    <li v-for="detail in project.approach" :key="detail">{{ detail }}</li>
                  </ul>
                </section>

                <section>
                  <h3 class="text-sm font-black tracking-widest text-[#221e22] uppercase">
                    Reflection
                  </h3>
                  <p class="mt-2 text-sm leading-6 text-orange-700">{{ project.reflection }}</p>
                </section>
              </div>

              <div class="mt-6 flex flex-wrap gap-3">
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

      <section
        class="mt-14 rounded-3xl bg-[#221e22] p-6 text-orange-50 shadow-lg shadow-orange-950/10 sm:p-8"
      >
        <h2 class="text-2xl font-black tracking-tight">More documented experiences</h2>
        <p class="mt-3 max-w-3xl text-sm leading-6 text-orange-100">
          These sections add more context around 3D modeling, logo design, collaborative art, and
          service-centered music work.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
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
