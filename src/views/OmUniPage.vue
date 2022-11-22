<script setup>
import OmUniversity from '../components/OmUni.vue'
</script>

<template>
  <Suspense>
     <OmUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>

