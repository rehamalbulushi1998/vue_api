<script setup>
import BhrUniversity from '../components/BhrUni.vue'
</script>

<template>
  <Suspense>
     <BhrUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>

