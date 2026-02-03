<script setup>
  import q from '../data/quizes.json'
  import { ref, watch } from 'vue'
  import Card from '../components/Card.vue'

  const quize = ref(q);
  const search = ref("");

  watch(search, () => {
    quize.value = q.filter(quizes => quizes.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>

<template>
  <main>
    <div class="header">
      <h1>QuizApp</h1>
      <input v-model.trim="search" type="search" placeholder="Search...">
    </div>
    <div class="option-container">
      <Card v-for="quiz in quize" :key="quiz.id" :quiz="quiz"/>
      <!-- <div v-for="quizes in 7" :key="quizes.id" class="card">
        <img src="https://i.pinimg.com/1200x/4f/73/8d/4f738db0ff7db05be887db5f08cc0818.jpg" alt="">
        <div class="card-text">
          <h2>test</h2>
          <p>test Question</p>
        </div>
      </div> -->
    </div>
  </main>
</template>

<style scoped>

  .header{
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    color: black;
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
    font-weight: bolder;
  }
  .header input{
    border:1px groove;
    box-shadow: 0px 0px 2px;
    padding: 10px;
    width: 30%;
    border-radius: 20px;
  }
  .header input:placeholder-shown{
    font-size: 17px;
  }
  /* card */

  .option-container{
    width: 80%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
  }
  .card{
    width: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1) ;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.4s ease;
  }
  .card img{
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
  }
  .card .card-text{
    padding-left:10px ;
    padding-right: 10px;
  }
  .card:hover{
    transform: scale(1.01);
  }

  @media screen and (max-width:600px) {
    .option-container{
      width: 95%;
      grid-template-columns: repeat(2,1fr);
    }
  }
</style>