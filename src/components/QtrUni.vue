<script setup>
	import { ref, onErrorCaptured } from 'vue'
	const responses = ref({})
  

  // adding delay
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  onErrorCaptured((err) => {
    // error processing
  })

  const res = await fetch('http://universities.hipolabs.com/search?country=Qatar')
  console.log(res)
  if (!res.ok) {
    throw new Error()
  }
  responses.value = (await res.json())

</script>

<template >
    <h1> Universities Lists</h1>

     <div class="card" v-for="response in responses" >
    <h2 > {{ response.name }} </h2>
    <h3> Country: {{ response.country }}</h3>
    <h3> Web page link: {{ response.web_pages }}</h3>
  </div>

  
</template>

<style>

h2, h1 {
   color: #fff;
}
h3 {
   color: #fff;
}
  .card {
    background-color: #7b356d;
    border-radius: .2rem;
    box-shadow: rgb(150, 150, 150, 150) 0px 1px 3px;
    width: 850px;
    margin: 10px;
    padding: 10px;
  }

 
</style>
