<template>
    <div>
      <!-- Source: http://getdrawings.com/miner-icon#miner-icon-8.png [By Avocadorable] -->
      <img id="logo" alt="Miner logo" src="@/assets/images/miner.png" width="140">
      <h1 id="title">Add Miner</h1>
      <div id="inputs">
        <div class="row center">
            <div class="col-lg-9">
                <label class="block" for="brand">
                  <h4 class="block-title">Brand:</h4> 
                  <input 
                    type="text" 
                    v-model="miner.brand" 
                    id="brand" 
                    v-on:blur="validate" 
                  />
                </label>
                <div v-if="errors">
                  <p data-test="brand-error" v-if="errors.brand">{{ errors.brand[0] }}</p>
                </div>
            </div>

            <div class="col-lg-9">
                <label class="block" for="model">
                  <h4 class="block-title">Model:</h4> 
                  <input 
                    type="text"
                    v-model="miner.model" 
                    id="model"
                    v-on:blur="validate"
                  />
                </label>
                <div v-if="errors">
                  <p data-test="model-error" v-if="errors.model">{{ errors.model[0] }}</p>
                </div>
            </div>

            <div class="col-lg-9">
                <label class="block" for="hashingAlgorithm">
                  <h4 class="block-title">Hashing Algorithm:</h4> 
                  <input 
                    type="text"
                    v-model="miner.hashingAlgorithm" 
                    id="hashingAlgorithm"
                    v-on:blur="validate" 
                  />
                </label>
                <div v-if="errors">
                  <p data-test="hashingAlgorithm-error" v-if="errors.hashingAlgorithm">{{ errors.hashingAlgorithm[0] }}</p>
                </div>
            </div>

            <div class="col-lg-9">
                <label class="block" for="hashrate">
                  <h4 class="block-title">Hashrate (TH/s):</h4>
                  <input 
                    type="number"
                    v-model="miner.hashrate" 
                    id="hashrate"
                    v-on:blur="validate"
                  />
                </label>
                <div v-if="errors">
                  <p data-test="hashrate-error" v-if="errors.hashrate">{{ errors.hashrate[0] }}</p>
                </div>
            </div>

            <div class="col-lg-9">
                <label class="block" for="power">
                  <h4 class="block-title">Power (W):</h4> 
                  <input 
                    type="number" 
                    v-model="miner.power" 
                    id="power"
                    v-on:blur="validate"
                  />
                </label>
                <div v-if="errors">
                  <p data-test="power-error" v-if="errors.power">{{ errors.power[0] }}</p>
                </div>
            </div>

        </div>
      </div>

      <div class="alert-success" v-if="isAdded">
        The miner was added successfully.
      </div>
      <div class="alert-warning" v-if="isWarning">
        Please fill all the required fields.
      </div>

      <button data-test="addminer" v-on:click="addMiner">Add Miner</button>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
    data() {
        return {
            miner: {
                brand: "",
                model: "",
                hashingAlgorithm: "",
                hashrate: 0,
                power: 0,
            },
            errors: null,
            isAdded: false,
            isWarning: false,
        };
    },

    methods: {
        validate() {
            let validator = new Validator(this.miner, {
                brand: "required|between:3,100",
                model: "required|between:1,100",
                hashingAlgorithm: "required|between:1,100",
                hashrate: "required|numeric|min:2",
                power: "required|numeric|min:1",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
                this.isWarning = true;
            } else {
                this.errors = null;
            }
            return validator.passes();
        },

        addMiner() {
          if (this.validate()) {
            axios.post("/miner", this.miner).then((response) => {

              if (response.data.errors) {
                this.errors = response.data.errors;
                this.isAdded = false;
                this.isWarning = true;
              }
              else {
                this.$emit("update-miners");
                this.isAdded = true;
                this.isWarning = false;
              }
            });
          }
        },
    },
};
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

.center {
  text-align: center;
  justify-content: center;
}


</style>