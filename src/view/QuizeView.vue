<script setup>
    import Quizheader from '../components/Quizheader.vue'
    import Question from '../components/Question.vue'
    import data from '../data/quizes.json'
    import {useRoute} from 'vue-router'
    import {computed, ref,watch} from 'vue'
    import Resualt from '../components/Resualt.vue'

    const router = useRoute()
    const quizId = parseInt(router.params.id)
    const currentQuizeIndex = ref(0)
    const numberOfCorrectAnswer = ref(0);
    const showResualt = ref(false)

    const question = data.find(q => q.id === quizId)
    // const questioncount = ref(`${currentQuizeIndex.value}/${question.questions.length}`)
    // watch(()=>currentQuizeIndex,()=>{
    //     questioncount.value = ref(`${currentQuizeIndex.value}/${question.questions.length}`)
    // })
    const questioncount = computed(()=>{
        return `${currentQuizeIndex.value}/${question.questions.length}`
    })
    const questionPersent = computed(()=>{
        return `${currentQuizeIndex.value/question.questions.length*100}%`
    })
    const onClickAnswer = (isCorrect) =>{
        if(isCorrect){
            numberOfCorrectAnswer.value++
        }
        if(question.questions.length -1 === currentQuizeIndex.value){
            showResualt.value = true
        }
        currentQuizeIndex.value++
    }


</script>

<template>
    <Quizheader 
        :questioncount="questioncount"
        :questionPersent="questionPersent"
    />
    <div>
        <Question
            v-if="!showResualt" 
            :question="question.questions[currentQuizeIndex]"
            @selectOption="onClickAnswer"
        />
        <Resualt 
            v-else
            :numberOfCorrectAnswer="numberOfCorrectAnswer"
            :currentQuizeIndex="question.questions.length"
        />
    </div>
</template>