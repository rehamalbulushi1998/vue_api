<script setup>
	import { ref, onErrorCaptured } from 'vue'
	const response = ref({})

  // adding delay
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })

  onErrorCaptured((err) => {
    // error processing
  })

  const res = await fetch('https://api.quotable.io/random')
  console.log(res)
  if (!res.ok) {
    throw new Error()
  }
  response.value = (await res.json())

</script>

<template >

     <div class="card">
    <h2 >" {{ response.content}} "</h2>
    <br/>
    <h3> Author: {{ response.author}}</h3>
     <br/>
    <h3> Tags: {{ response.tags}}</h3>
  </div>

   <button @click="reloadPage">refresh to get a random quota</button>
  
</template>

<style>

h2 {
   color: #fff;
}
h3 {
   color: #fff;
}
  .card {
    background-color: #7b356d;
    border-radius: .2rem;
    box-shadow: rgb(150, 150, 150, 150) 0px 1px 3px;
    width: 450px;
    margin: 10px;
    padding: 10px;
  }

 
</style>
<script>
export default {
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
}
</script>