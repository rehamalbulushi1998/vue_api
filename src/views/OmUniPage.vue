<script setup>
import OmUniversity from '../components/OmUni.vue'
</script>

<template>

<div class="bg">
  <Suspense>
     <OmUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>

  </div>
  
</template>
  
<style>

 .bg {
   height:620px;
  background: linear-gradient(to bottom, rgba(3,42,24, 0.9) 0%, rgba(3,42,24, 0.9) 100%), url("../assets/om_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
}

</style>