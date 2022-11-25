<template >

  <header>
    <router-link class="plain-link"  to="/Oman-Universities">Oman</router-link> |
    <router-link class="plain-link"  :to="{ name: 'UaeUni' }">UAE</router-link> |
    <router-link class="plain-link"  :to="{ name: 'KsaUni' }">
     Saudi Arabia
    </router-link>
    |
    <router-link class="plain-link"  :to="{ name: 'QtrUni' }">
     Qatar
    </router-link>
    |
    <router-link class="plain-link"  :to="{ name: 'BhrUni' }">Bahrain</router-link>
     |
    <router-link class="plain-link"  :to="{ name: 'KwUni' }">Kuwait</router-link>
  </header>
  <hr />
  <main>
    <router-view />
  
  </main>

  <div class="footer">The universities of the GCC countries API | Reham Albulushi 2022</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=El+Messiri&display=swap');
.plain-link {
  color: #cab7b3;
  text-decoration: none;
  padding: 10px;
 font-family: 'El Messiri', sans-serif;
  font-size: 30px;
}

.footer {
  padding: 20px!important;
  color: #cab7b3;
}
</style>
