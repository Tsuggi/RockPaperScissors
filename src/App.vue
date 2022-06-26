<template>
  <div class="flex justify-center">
    <ScoreComp />
  </div>

  <RouterView />
  
</template>

<script setup>
import ScoreComp from './components/ScoreComp.vue'
</script>

<style>
* {
  @apply m-0 p-0 box-border
}

#app {
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-family: 'Overpass', sans-serif;
  @apply h-screen
}
.centrer{
  @apply flex justify-center items-center
}
</style>