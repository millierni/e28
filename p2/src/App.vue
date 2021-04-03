<template>
  <div>

    <nav>
      <ul>
        <router-link
          v-for="link in links"
          v-bind:key="link"
          v-bind:to="paths[link]">
          {{ link }}    
        </router-link>
      </ul>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
import { data } from "@/common/data.js";

export default {
  name: 'App',

  data() {
    return {
      data: data,

      /* Store links in an array to maintain order */
      links: ['Home', 'SecondPage'],

      /* Map links to the appropriate component */
      paths: {
          Home: '/',
          SecondPage: '/second',
      },
    }
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
</style>
