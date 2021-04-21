<template>

    <div id="home-page">

      <!-- Source: http://getdrawings.com/miner-icon#miner-icon-8.png [By Avocadorable] -->
      <img id="logo" alt="Miner logo" src="@/assets/images/miner.png" width="140">
      <h1 id="title">Bitcoin Mining Calculator</h1>



  <div class="container">
      <div class="row">
        
        <div class="col-lg-4"></div>
        <div class="col-lg-4">

          <div class="form-group">
            <label for="sel1">Select ASIC Miner:</label>
            <select class="form-control" id="sel1" v-model="miner" miner="miner" v-bind="selectedMiner">

              <option v-for="miner in selectMiners" v-bind:key="miner">
                {{ miner.model }}
              </option>

            </select>
          </div>

        </div>



      </div>
    </div>

      <bitcoin-calculator v-bind:minerSelected="minerSelected"></bitcoin-calculator>

    </div>
</template>

<script>
import BitcoinCalculator from '@/components/BitcoinCalculator.vue';

export default {
  components: { 
    "bitcoin-calculator": BitcoinCalculator,
  },

  props: {
    miners: {
      type: Array,
      default: null,
    }
  },

  computed: {
    selectMiners: function() {
      return this.miners.filter(miner => miner.hashingAlgorithm == "SHA-256");
    },

    selectedMiner: function() {

      for (const miner in this.miners) {

        if (this.miners[miner].model == this.miner) {
          this.selectMiner(this.miners[miner].hashrate, this.miners[miner].power);

        }
      }

      return true;
    },
  },

  data() {
    return {
      miner: null,
      minerSelected: [],

    };
  },


  methods: {

    resetSelected: function() {
      this.minerSelected = [];
    },

    selectMiner: function(hashrate, power) {
      this.resetSelected();
      this.minerSelected.push(hashrate, power);
    },

  },
}
</script>

<style scoped>


#title {
  margin-bottom: 60px;
}
</style>