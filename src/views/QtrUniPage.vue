<script setup>
import QtrUniversity from '../components/QtrUni.vue'
</script>

<template>
  <Suspense>
     <QtrUniversity />
    <template #fallback>
       Loading...
    </template>
  </Suspense>
  
</template>

