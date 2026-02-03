<script setup>
import {defineProps,defineEmits} from 'vue'
const {question} = defineProps(['question'])

const emit = defineEmits("selectOption")
const selectOptionCorrect = (isCorrect) =>{
    emit("selectOption",isCorrect)
}
</script>

<template>
    <div class="question">
        <h1>{{ question.text }}</h1>
        <div v-for="option in question.options" class="option"
            @click="selectOptionCorrect(option.isCorrect)">
            <div class="option-container">
                <p class="option-choose">{{ option.label }}</p>
                <div class="option-answer">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .question{
        width: 70%;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: black;
        font-family: "siemreap";
    }
    .option{
        
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
    .option-container{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .option-choose{
        border-radius: 15px;
        width: 35px;
        height: 35px;
        font-size: 20px;
        background-color: rgb(172, 246, 173);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .option-answer{
        border-radius: 15px;
        font-size: 18px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        height: 35px;
        background-color: rgb(241, 253, 2);
    }
    @media screen and (max-width: 600px) {
        .question{
            width: 90%;
        }
    }
</style>