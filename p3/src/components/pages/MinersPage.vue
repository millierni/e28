<template>
    <div>
      <!-- Source: http://getdrawings.com/miner-icon#miner-icon-8.png [By Avocadorable] -->
      <img id="logo" alt="Miner logo" src="@/assets/images/miner.png" width="140">
      <h1 id="title">
        ASIC Miners
        <span id="count">({{ minersCount }})</span>
      </h1>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Brand</th>
              <th scope="col">Model</th>
              <th scope="col">Hashing Algorithm</th>
              <th scope="col">Hashrate (TH/s)</th>
              <th scope="col">Power (W)</th>
            </tr>
          </thead>

          <tbody>
            <tr v-bind:key="item" v-for="item in miners">
              <th scope="row" class="brand">{{ item.brand }}</th>
              <td class="model">{{ item.model }}</td>
              <td>{{ item.hashingAlgorithm }}</td>
              <td>{{ item.hashrate }}</td>
              <td>{{ item.power }}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    miners: {
      type: Array,
      default: null,
    }
  },

  setup() {
    function countMiners() {
      this.$store.commit("setMinersCount", this.miners.length);
    }

    return {
      countMiners,
    };
  },

  computed: {
    minersCount() {
      this.countMiners();
      return this.$store.state.minersCount;
    }
  },
}
</script>

<style>
#count {
  font-size: 25px;
}
</style>