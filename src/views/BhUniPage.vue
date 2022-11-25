<script setup>
import BhrUniversity from '../components/BhrUni.vue'
</script>

<template>
<div class="bg">
  <Suspense>
    <BhrUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>

  </div>
  
</template>
  
<style>

 .bg {
   height:620px;
  background: linear-gradient(to bottom, rgba(3,42,24, 0.9) 0%, rgba(3,42,24, 0.9) 100%), url("../assets/bh_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

</style>