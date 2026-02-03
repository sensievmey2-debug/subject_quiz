<script setup>
    import { ref,defineProps } from 'vue'

    const { 
        questioncount,
        questionPersent
    } = defineProps(['questioncount','questionPersent'])
</script>
<template>
    <div class="quiz-header">
        <h1>Question {{ questioncount }}</h1>
        <div class="bar">
            <div class="completion" :style="{width: questionPersent}"></div>
        </div>
    </div>
</template>

<style scoped>
    .quiz-header{
        width: 70%;
        margin: 0 auto;
        color:black;
    }
    .bar{
        /* border-radius: 15px; */
        width: 20%;
        height: 40px;
        border: 3px solid rgb(249, 251, 253);
    }
    .completion{
        
        width: 0%;
        height: 100%;
        background-color: rgb(17, 174, 64);
    }
    @media screen and (max-width: 600px) {
        .quiz-header{
            width: 90%;
        }
        .bar{
            margin: 20px auto;
            width: 100%;
        }
    }
</style>