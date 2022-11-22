<script setup>
import KsaUniversity from '../components/KsaUni.vue'
</script>

<template>
  <Suspense>
     <KsaUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>

