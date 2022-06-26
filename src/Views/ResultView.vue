<template>
    <div class="result">
        <div class="flex justify-center items-center m-10 gap-16">
            <div class="bloc">
                <h1>Your Choice</h1>
                <CercleItem :colorRondExt="store.colorScissors">
                    <div v-html="store.imgScissors"></div>
                </CercleItem>
            </div>

            <p class="text-white text-2xl font-black mt-10">VS</p>

            <div class="bloc">
                <h1>The Computer Choice</h1>
                <CercleItem :colorRondExt="store.colorPaper">
                    <div v-html="store.imgPaper"></div>
                </CercleItem>
                <button @click="verif" class="text-red-500 font-bold bg-white rounded-3xl px-3">Vérif</button> 
            </div>
        </div>

    </div>
</template>

<script setup>
import CercleItem from '../components/CercleItem.vue'
import { useStore } from '../stores/store.js'

const store = useStore()

const verif = ()=>{
    const test = store.computerChoice()
}

</script>

<style scoped>
.bloc{
    @apply flex flex-col justify-center items-center
}
h1{
    @apply text-white text-2xl font-black mb-5
}
</style>