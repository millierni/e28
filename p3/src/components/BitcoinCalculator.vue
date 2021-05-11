<template>
  <div>

    <div class="container">
      {{ miningCalculator() }} 

      <div class="row">
        
        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Hashrate (TH/s)</h4> 
            <input type="number" v-model.number="terahashRate">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Power Use</h4> 
            <input type="number" v-model.number="powerUse">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Electricity Costs (kWh)</h4> 
            <input type="number" v-model.number="electricityCosts">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Bitcoin Price</h4>
            <input type="number" v-model.number="price">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Difficulty</h4> 
            <input type="number" v-model.number="difficulty">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Network Hashrate</h4> 
            <input type="number" v-model.number="networkHashrate">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Emission Per Block</h4> 
            <input type="number" v-model.number="supplyEmissionPerBlock">
          </label>
        </div>

        <div class="col-lg-3">
          <label class="block">
            <h4 class="block-title">Periods</h4> 
            <input type="number" v-model.number="period">
          </label>
        </div>

      </div>
    </div>

    <div id="forecasts">
      <table class="table">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hashrate</th>
            <th scope="col">Network Hashrate</th>
            <th scope="col">Share Rate</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Blocks per Day</th>
            <th scope="col">BTC per Day</th>
            <th scope="col">Revenue per Day</th>
            <th scope="col">Electricity Costs</th>
            <th scope="col">Profit</th>
            <th scope="col">Total Profit</th>
          </tr>
        </thead>

        <tbody>
          <tr v-bind:key="item" v-for="item in forecasts">
            <th scope="row">{{ item.day }}</th>
            <td>{{ item.hashrate }}</td>
            <td>{{ item.networkHashrate }}</td>
            <td>{{ item.sharerate }}</td>
            <td>{{ item.difficulty }}</td>
            <td>{{ item.blocksperday }}</td>
            <td>{{ item.coinsperday }}</td>
            <td>{{ item.revenueperday }}</td>
            <td>{{ item.electricityCosts }}</td>
            <td>{{ item.profit }}</td>
            <td>{{ item.totalProfit }}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    minerSelected: {
      type: Array,
      default: null,
    }
  },

  data() {
    return {
      terahashRate: 100,
      powerUse: 3200,
      electricityCosts: 0.07,
      price: 60000,
      difficulty: 23581981443663,
      networkHashrate: 1.82821e+20,
      supplyEmissionPerBlock: 6.25,
      period: 30,
      forecasts: [],
    }
  },

  watch: {
    minerSelected: function() {
      this.terahashRate = this.minerSelected[0];
      this.powerUse = this.minerSelected[1];
    }
  },

  methods: {
    resetForecasts: function() {
      this.forecasts = [];
    },

    createVariables: function() {
      const hashrate = this.terahashRate * 1000000000000;
      const sharerate = hashrate / Math.pow(2, 32)
      const cost = ((this.powerUse * 24) / 1000) * this.electricityCosts;

      let difficulty = this.difficulty;
      let networkHashrate = this.networkHashrate;
      let blocksperday = (sharerate / this.difficulty) * 86400;
      let coinsperday = blocksperday * this.supplyEmissionPerBlock;
      let revenueperday = coinsperday * this.price;
      let profit = revenueperday - cost;

      const variables = [hashrate, networkHashrate, sharerate, difficulty,
                  blocksperday, coinsperday, revenueperday, cost, profit];

      return variables;
    },

    createForecast: function(hashrate, networkHashrate, sharerate, 
                             difficulty, blocksperday, coinsperday, 
                             revenueperday, cost, profit) {

      let totalProfit = 0;

      for (let i = 1; i <= this.period; i++) {
        totalProfit += profit;

        let forecast = {
          "day": i,
          "hashrate": hashrate,
          "networkHashrate": networkHashrate,
          "sharerate": Number(Math.round(sharerate + "e2") + "e-2").toFixed(2),
          "difficulty": Number(Math.round(difficulty + "e0") + "e-0").toFixed(0),
          "blocksperday": Number(Math.round(blocksperday + "e8") + "e-8").toFixed(8),
          "coinsperday": Number(Math.round(coinsperday + "e8") + "e-8").toFixed(8),
          "revenueperday": Number(Math.round(revenueperday + "e2") + "e-2").toFixed(2),
          "electricityCosts": Number(Math.round(cost + "e2") + "e-2").toFixed(2),
          "profit": Number(Math.round(profit + "e2") + "e-2").toFixed(2),
          "totalProfit": Number(Math.round(totalProfit + "e2") + "e-2").toFixed(2),
        };

        this.addForecast(forecast);

        networkHashrate = ((this.networkHashrate * 2) / 730) + networkHashrate;
        difficulty = ((this.difficulty * 2.75) / 730) + difficulty;
        blocksperday = (sharerate / difficulty) * 86400;
        coinsperday = blocksperday * this.supplyEmissionPerBlock;
        revenueperday = coinsperday * this.price;
        profit = revenueperday - cost;
      }
    },

    addForecast: function(forecast) {
      this.forecasts.push(forecast);
    },

    miningCalculator: function() {
      this.resetForecasts();
      const K = this.createVariables();
      this.createForecast(K[0], K[1], K[2], K[3], K[4], K[5], K[6], K[7], K[8], K[9]);
    },
  },
}
</script>

<style scoped>
.block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 5px;
  margin-top: 30px;
  padding: 15px;
  padding-bottom: 30px;
  background-color: gainsboro;
}

.block-title {
  margin: 10px;
}

#forecasts {
  margin-top: 80px;
}
</style>