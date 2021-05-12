<template>
    <div id="account-page">
        <div>
            <h2>Register</h2>
            <div>
                <label>
                    Name:
                    <input 
                        type="text" 
                        v-model="data.name" 
                        v-on:blur="validate" 
                        />
                </label>
                <div v-if="errors">
                    <p v-if="errors.name">{{ errors.name[0] }}</p>
                </div>
            </div>    

            <div>
                <label>
                    Email:
                    <input 
                        type="text" 
                        v-model="data.email" 
                        v-on:blur="validate"
                        />
                </label>
                <div v-if="errors">
                    <p v-if="errors.email">{{ errors.email[0] }}</p>
                </div>   
            </div>

            <div>
                <label>
                    Password:
                    <input 
                        type="password" 
                        v-model="data.password" 
                        v-on:blur="validate"
                        />
                </label>
                <div v-if="errors">
                    <p v-if="errors.password">{{ errors.password[0] }}</p>
                </div>   
            </div>

            <div class="alert-success" v-if="isRegistered">
                You are registered.
            </div>
            <div class="alert-danger" v-if="otherErrors">
                {{ otherErrors[0] }}
            </div>

            <button v-on:click="register">Register</button>
        </div>
    </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
    data() {
        return {
            data: {
                name: "",
                email: "",
                password: "",
            },
            isRegistered: false,
            isAdded: false,
            errors: null,
            otherErrors: null,
        };
    },

    computed: {
        user() {
            return this.$store.state.user;
        },
    },

    methods: {
        validate() {
            let validator = new Validator(this.data, {
                name: "required|between:3,100",
                email: "required|email",
                password: "required|between:8,100",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
            } else {
                this.errors = null;
            }

            return validator.passes();
        },

        register() {
            if (this.validate()) {
                axios.post("/register", this.data).then((response) => {
                    this.otherErrors = response.data.errors;
                    this.$store.commit("setUser", null);

                    if (!this.otherErrors) {
                        this.isRegistered = true;
                    }
                });
            }
        },
    },
};
</script>