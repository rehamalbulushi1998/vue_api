<template>
  <header>
    <router-link  to="/Oman-Universities">Oman</router-link> |
    <router-link  :to="{ name: 'UaeUni' }">UAE</router-link> |
    <router-link  :to="{ name: 'KsaUni' }">
      SA
    </router-link>
    |
    <router-link  :to="{ name: 'QtrUni' }">
     Qatar
    </router-link>
    |
    <router-link  :to="{ name: 'BhrUni' }">Bahrain</router-link>
     |
    <router-link  :to="{ name: 'KwUni' }">Kuwait</router-link>
  </header>
  <hr />
  <main>
    <router-view />
  </main>

  <footer>My nice footer | Dani Nebot 2022</footer>
</template>