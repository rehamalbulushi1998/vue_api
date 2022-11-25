<script setup>
import { ref } from 'vue';
import UniDetail from '@/components/UniDetails.vue';
const { name , country } = defineProps(['name','country']);
const university = ref({});

function setUniversity(m) {
  university.value = m;
}
</script>
<template>
  <Suspense>
    <div class="container">
      <UniDetail :name="name" :country="country" @loaded="setUniversity" />
      <router-view :university="university"></router-view>
    </div>

  </Suspense>
</template>