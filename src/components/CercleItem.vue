<template>
    <div class="rond" :style="{ background: props.colorRondExt }">
        <div class="rondInt">
            <slot>Nothing</slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    colorRondExt: String
})
</script>

<style scoped>
.rond {
    @apply w-44 h-44 rounded-full flex justify-center items-center;
    /* background: radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%)) */
}
.rondInt:hover{
    @apply bg-red-200
}

.rondInt {
    @apply w-36 h-36 bg-white rounded-full shadow-inner;
    @apply flex justify-center items-center
}
</style>
