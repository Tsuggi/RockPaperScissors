<template>
    <div class="header">

        <div class="flex flex-col justify-center m-3">
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
        </div>

        <div class="score">
            <h3 class="text-3xl font-black">Score</h3>
            <p class="text-3xl font-black">{{ score }}</p>
        </div>

    </div>
</template>

<script setup>

const score = 12
</script>

<style scoped>
.header {
    @apply border-2 border-[#606E85] rounded-xl;
    @apply w-1/2 mt-5;
    @apply flex justify-between items-center
}

h1 {
    @apply text-white font-black text-4xl mt-2
}

.score {
    @apply bg-white h-4/5 w-[25%] rounded-lg m-3;
    @apply flex flex-col justify-center items-center
}
</style>