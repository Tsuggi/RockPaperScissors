<template>
    <div classe="game">
        <div class="centrer m-10 gap-16">
            <CercleItem :colorRondExt="store.colorScissors" @click="select('scissors')" :class="[store.choiceSelected=== 'scissors' ? selected : '']">
                <div v-html="store.imgScissors"></div>
            </CercleItem>

            <CercleItem :colorRondExt="store.colorPaper" @click="select('paper')" :class="[store.choiceSelected=== 'paper' ? selected : '']">
                <div v-html="store.imgPaper"></div>
            </CercleItem>
        </div>

        <div class="centrer">
            <CercleItem :colorRondExt="store.colorRock" @click="select('rock')" :class="[store.choiceSelected=== 'rock' ? selected : '']">
                <div v-html="store.imgRock"></div>
            </CercleItem>
        </div>

        <div class="centrer mt-10 ">
            <p v-if="!userRdy" class="bg-slate-50 p-2 rounded-full font-bold">Select your choice !</p>
            <button v-if="userRdy" @click="displayResult" class="bg-slate-50 p-2 px-5 rounded-full font-bold">Play !</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CercleItem from '../components/CercleItem.vue'
import { useStore } from '../stores/store.js'
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

const userRdy = ref(true)

const selected = ref('selected')

const select = (choiceUser) => {
    console.log(choiceUser);
    store.choiceSelected = choiceUser
}

const displayResult = ()=>{
    store.computerChoice()
    if (store.choicePC === 'scissors' && store.choiceSelected === 'paper') {
        store.result = false
        store.score--
    }
    if (store.choicePC === 'rock' && store.choiceSelected === 'scissors') {
        store.result = false
        store.score--
    }
    if (store.choicePC === 'paper' && store.choiceSelected === 'rock') {
        store.result = false
        store.score--
    }
    if (store.choicePC === 'rock' && store.choiceSelected === 'paper') {
        store.result = true
        store.score++
    }
    if (store.choicePC === 'paper' && store.choiceSelected === 'scissors') {
        store.result = true
        store.score++
    }
    if (store.choicePC === 'scissors' && store.choiceSelected === 'rock') {
        store.result = true
        store.score++
    }
    if (store.choicePC === store.choiceSelected) {
        store.result = null
    }
    router.push({name: 'result'})
}

</script>

<style scoped>
.selected{
    @apply border-4 border-teal-300
}
</style>