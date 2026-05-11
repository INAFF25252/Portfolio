<script setup lang="ts"> </script>


<template>
  <div>
<router-view> </router-view>
</div>

  <section id="about" class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="text-3xl font-bold mb-6 text-center">Chen Xi He</h1>
    <p class="text-lg text-gray-600 leading-relaxed text-center">

    </p>
  </section>

  <section id="projects" class="flexbox flex justify-center content-evenly py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h3 class="text-3xl font-bold text-[#221E22] mb-10 text-center">Projects</h3>
      <div class="grid md:grid-cols-3 gap-8">
  
      <router-link to="/CAD" class="text-orange-600 mb-4">
        <div class="bg-white rounded-lg shadow  transition-transform transition-shadow duration-300 ease-out
              hover:scale-105 hover:shadow-xl">
          <img src="\public\images\Padoga.jpeg" alt="Project 1" class="rounded-t-lg card-img-top img-fluid">
          <div class="p-5">
           CAD Work
            <p class="text-orange-600 mb-4">A short description of the project goes here.</p>
          </div>
        </div>
        </router-link>
       
       <router-link to="/Unity" class="text-orange-600 mb-4">
        <div class="bg-white rounded-lg shadow  transition-transform transition-shadow duration-300 ease-out
              hover:scale-105 hover:shadow-xl">
          <img src="\public\images\Unity.png" alt="Project 2" class="rounded-t-lg card-img-top img-fluid">
          <div class="p-5">
           Unity Work
            <p class="text-orange-600 mb-4">Another project description here.</p>
          </div>
        </div>
      </router-link>

        <router-link to="/Community" class="text-orange-600 mb-4">
        <div class="bg-white rounded-lg shadow  transition-transform transition-shadow duration-300 ease-out
              hover:scale-105 hover:shadow-xl">
          <img src="\public\images\PetPastel.jpeg" alt="Project 3" class="rounded-t-lg card-img-top img-fluid">
          <div class="p-5">
              Community Service
            <p class="text-orange-600 mb-4" >Another project description here.</p>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </section>


  <section id="contact" class="max-w-4xl mx-auto px-4 py-16">
    <h3 class="text-3xl font-bold mb-6 text-center">Contact Me</h3>
    <form class="space-y-4 max-w-lg mx-auto">
      <input type="text" placeholder="Your Name"
        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required>
      <input type="email" placeholder="Your Email"
        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required>
      <textarea placeholder="Your Message" rows="5"
        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        required></textarea>
      <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Send</button>
    </form>
  </section>


</template>

<style scoped></style>
