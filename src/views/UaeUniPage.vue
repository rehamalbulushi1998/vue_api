<script setup>
import UaeUniversity from '../components/UaeUni.vue'
</script>

<template>
  <Suspense>
     <UaeUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>

