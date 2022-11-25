<script setup>
import { ref, computed } from 'vue';
const { name , country } = defineProps(['name','country']);
const emit = defineEmits(['loaded']);
const response = ref({})
const res = await fetch(`http://universities.hipolabs.com/search?name=${name}&country=${country}`);

if (!res.ok) {
  throw new Error();
}

response.value = (await res.json())[0];
emit('loaded', response.value);

</script>

<template>
  <div>
    <h1>{{ response.name }}</h1>
      <h3> Country: {{ response.country }}</h3>
   <h3> Web page link: <a :href="response.web_pages[0]"> {{ response.web_pages[0] }} </a></h3>
  </div>
</template>

<style scoped>
.text-xl {
  font-size: 3rem;
}
.margin20 {
  margin: 20px;
}
</style>
