<template>
  <div>
    <nav>
      <ul>
        <router-link
          v-for="link in links"
          v-bind:key="link"
          v-bind:to="paths[link]">

            <span class="page">{{ link }}</span>

        </router-link>
      </ul>
    </nav>

    <router-view v-bind:miners="miners"></router-view>

  </div>
</template>



<script>
import { axios } from "@/common/app.js";

export default {
  name: 'App',

  data() {
    return {
      miners: [],

      /* Store links in an array to maintain order */
      links: ['Home', 'Miners', 'FAQ'],

      /* Map links to the appropriate component */
      paths: {
          Home: '/',
          Miners: '/miners',
          FAQ: 'FAQ',
      },
    }
  },

  mounted() {
    axios.get('miner').then(response => {
      this.miners = response.data.miner;
    });
  },
}
</script>

<style src='@/assets/css/styles.css'></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page {
  margin: 5px;
}
</style>
