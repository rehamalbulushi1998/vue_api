<script setup>
import University from './components/Universities.vue'
</script>

<template>
  <Suspense>
     <University />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>




