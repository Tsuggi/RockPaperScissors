<template>
    <div class="result">
        <div class="flex justify-center items-center m-10 gap-16">
            <div class="bloc">
                <h1>Your Choice</h1>
                <CercleItem v-if="store.choiceSelected === 'paper'" :colorRondExt="store.colorPaper">
                    <div v-if="store.choiceSelected === 'paper'" v-html="store.imgPaper"></div>
                    <div v-if="store.choiceSelected === 'rock'" v-html="store.imgRock"></div>
                    <div v-if="store.choiceSelected === 'scissors'" v-html="store.imgScissors"></div>
                </CercleItem>
                <CercleItem v-if="store.choiceSelected === 'scissors'" :colorRondExt="store.colorScissors">
                    <div v-if="store.choiceSelected === 'paper'" v-html="store.imgPaper"></div>
                    <div v-if="store.choiceSelected === 'rock'" v-html="store.imgRock"></div>
                    <div v-if="store.choiceSelected === 'scissors'" v-html="store.imgScissors"></div>
                </CercleItem>
                <CercleItem v-if="store.choiceSelected === 'rock'" :colorRondExt="store.colorRock">
                    <div v-if="store.choiceSelected === 'paper'" v-html="store.imgPaper"></div>
                    <div v-if="store.choiceSelected === 'rock'" v-html="store.imgRock"></div>
                    <div v-if="store.choiceSelected === 'scissors'" v-html="store.imgScissors"></div>
                </CercleItem>
            </div>

            <p class="text-white text-2xl font-black mt-10">VS</p>

            <div class="bloc">
                <h1>The Computer Choice</h1>
                <CercleItem v-if="store.choicePC === 'scissors'" :colorRondExt="store.colorScissors">
                    <div v-if="store.choicePC === 'paper'" v-html="store.imgPaper"></div>
                    <div v-if="store.choicePC === 'rock'" v-html="store.imgRock"></div>
                    <div v-if="store.choicePC === 'scissors'" v-html="store.imgScissors"></div>
                </CercleItem>
                <CercleItem v-if="store.choicePC === 'rock'" :colorRondExt="store.colorRock">
                    <div v-if="store.choicePC === 'paper'" v-html="store.imgPaper"></div>
                    <div v-if="store.choicePC === 'rock'" v-html="store.imgRock"></div>
                    <div v-if="store.choicePC === 'scissors'" v-html="store.imgScissors"></div>
                </CercleItem>
                <CercleItem v-if="store.choicePC === 'paper'" :colorRondExt="store.colorPaper">
                    <div v-if="store.choicePC === 'paper'" v-html="store.imgPaper"></div>
                    <div v-if="store.choicePC === 'rock'" v-html="store.imgRock"></div>
                    <div v-if="store.choicePC === 'scissors'" v-html="store.imgScissors"></div>
                </CercleItem>
            </div>
        </div>

        <div class="centrer flex-col">
            <h1 v-if="store.result === false">Computer Win !</h1>
            <h1 v-if="store.result">You win !</h1>
            <h1 v-if="store.result === null">It's a draw !</h1>

            <button @click="playAgain" class="bg-slate-50 p-2 px-5 rounded-full font-bold mt-6">
                Play Again !
            </button>
        </div>
    </div>
</template>

<script setup>
import CercleItem from '../components/CercleItem.vue'
import { useStore } from '../stores/store.js'
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useStore()

const playAgain = () => {
    store.choicePC = ""
    store.choiceSelected = ""
    store.result = null
    router.push({ name: 'game' })
}
</script>

<style scoped>
.bloc {
    @apply flex flex-col justify-center items-center
}

h1 {
    @apply text-white text-2xl font-black mb-5
}
</style>