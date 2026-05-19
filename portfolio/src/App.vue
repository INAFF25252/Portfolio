<script setup lang="ts"> 
console.log("rendered")
</script>


<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-center">Chen Xi He</h1>
    <h2 class="mb-6 text-center">  
    <router-link to="/About" class="mb-4 transition-transform transition-shadow duration-300 ease-outmhover:scale-105 hover:shadow-xl text-center">About</router-link>
    </h2>
    <<h2 class="mb-6 text-center">  
     <router-link to="/Projects" class="mb-4 transition-transform transition-shadow duration-300 ease-outmhover:scale-105 hover:shadow-xl text-center">Projects</router-link>
    </h2>
    
  <router-view> </router-view>
</div>

</template>

<style scoped></style>
