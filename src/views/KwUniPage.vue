<script setup>
import KwUniversity from '../components/KwUni.vue'
</script>

<template>
  <Suspense>
     <KwUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>

