<script setup>  
    import { defineProps } from 'vue'
    import data from '../data/quizes.json'
    import { useRouter} from 'vue-router'

    const router = useRouter();
    const { quiz } = defineProps(['quiz'])

    const navigation = () =>{
        router.push(`/quiz/${quiz.id}`)
    }
</script>

<template>
    <div class="card" @click="navigation">
        <div>
            <img :src="quiz.img" alt="">
        </div>
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} Question</p>
        </div>
    </div>
</template>

<style scoped>
    .card{
       display: flex;
       flex-direction: column;
        height: 100%;
        background-color: rgba(247, 46, 216, 0.975);
        width: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1) ;
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.4s ease;
        height: 600px;
    }
    .card img{
        /* height: 60%; */
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100%;
    }
    .card-text{
        color: black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-left:10px ;
        padding-right: 10px;
    }
</style>