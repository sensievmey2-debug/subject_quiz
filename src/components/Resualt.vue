<script setup>
    import { defineProps } from 'vue'
    import {RouterLink} from 'vue-router'

    const {numberOfCorrectAnswer,currentQuizeIndex} = defineProps(["numberOfCorrectAnswer","currentQuizeIndex"])
</script>

<template>
    <div class="resualt">
        <h1>Your Resualt ....</h1>
        <h1>
            {{ numberOfCorrectAnswer }} / {{ currentQuizeIndex }}
        </h1>
        <div class="route">
            <router-link to="/" class="gohome">Go Back</router-link>
        </div>
    </div>
</template>

<style scoped>
    .resualt{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
    }
    h1{
        color: black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 40px;
        font-weight: bold;
    }
    .gohome{
        text-decoration: none;
        height: 100%;
        padding: 10px 40px;
        background-color: rgb(239, 239, 241);
        color: rgb(247, 53, 137);
        font-family: sans-serif;
        border-radius: 30px;
    }
    .route{
        
        padding: 10px 20px;
    }
    .route >a:hover{
        background-color: black;
    }
</style>