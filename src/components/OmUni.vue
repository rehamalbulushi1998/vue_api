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

  const res = await fetch('http://universities.hipolabs.com/search?country=Oman')
  console.log(res)
  if (!res.ok) {
    throw new Error()
  }
  responses.value = (await res.json())
</script>

<template >
    <h1> Universities Lists</h1>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="scrollmenu">

     <div v-for="response in responses" >
      
    <h2 > {{ response.name }} </h2>
    <br/>
     <router-link   :to="{ name: 'Unidetailes', params: { name: response.name , country: response.country } }">
  <button type="button" class="block">Show</button>
  </router-link>
  </div>
    </div>

  
</template>

<style>

h2, h1 {
    color: #cab7b3;
}
h3 {
    color: #cab7b3;
}


div.scrollmenu {

  background-color: #8f6b5f;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu div {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  border-radius: .2rem;
  box-shadow: rgb(150, 150, 150, 150) 0px 1px 3px;
}

div.scrollmenu div:hover {
  background-color: #e3deda;
}
.block {
  color: #cab7b3;
  display: block;
  border: none;
  background-color: #5e4d47;
  padding: 10px 15px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
}


 
</style>
