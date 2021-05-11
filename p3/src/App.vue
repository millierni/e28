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

    <router-view v-bind:miners="miners" v-on:update-miners="loadMiners"></router-view>

  </div>
</template>

<script>
import { axios } from "@/common/app.js";

export default {
  name: "App",

  data() {
    return {
      miners: [],

      /* Store links in an array to maintain order */
      links: ["Home", "Miners", "Add", "FAQ", "Account"],

      /* Map links to the appropriate component */
      paths: {
          Home: "/",
          Miners: "/miners",
          Add: "/add",
          FAQ: "FAQ",
          Account: "Account",
      },
    }
  },

  mounted() {
    this.loadMiners();

    this.$store.dispatch("authUser");
  },

  methods: {
    loadMiners() {
      axios.get("miner").then(response => {
        this.miners = response.data.miner;
      });
    },
  },
}
</script>

<style src="@/assets/css/styles.css"></style>

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
