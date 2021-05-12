<template>
    <div id="account-page">
        <div v-if="user">
            <h2>
                Hi, <span data-test="name">{{ user.name }}</span>!
            </h2>
            <button data-test=logout-button v-on:click="logout">Logout</button>
        </div>

        <div v-else>
            <div>
                <h2>Login</h2>
                <div>
                    <label>
                        Email:
                        <input 
                            data-test="login-email"
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
                        data-test="login-password"
                            type="password" 
                            v-model="data.password"
                            v-on:blur="validate"
                            />
                    </label>
                    <div v-if="errors">
                        <p v-if="errors.password">{{ errors.password[0] }}</p>
                    </div>                    
                </div>

                <div class="alert-danger" v-if="otherErrors">
                    {{ otherErrors[0] }}
                </div>

                <button data-test=login-button v-on:click="login">Login</button>
            </div>

            <ul>
                <router-link
                v-for="link in links"
                v-bind:key="link"
                v-bind:to="paths[link]">
                    <span class="page">{{ link }}</span>
                </router-link>
            </ul>
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
                email: "",
                password: "",
            },
            errors: null,
            otherErrors: null,
            isAdded: false,
            isWarning: false,

            /* Store links in an array to maintain order */
            links: ["Register"],

            /* Map links to the appropriate component */
            paths: {
                Register: "Register",
            },
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
                email: "required|email",
                password: "required|between:8,100",
            });

            if (validator.fails()) {
                this.errors = validator.errors.all();
                this.isWarning = true;
            } else {
                this.errors = null;
            }
            return validator.passes();
        },

        login() {
            if (this.validate()) {
                axios.post("login", this.data).then((response) => {
                    if (response.data.authenticated) {
                        this.$store.commit("setUser", response.data.user);
                    } else {
                        this.otherErrors = response.data.errors;
                    }
                });
            }
        },

        logout() {
            axios.post("logout").then((response) => {
                if (response.data.success) {
                    this.$store.commit("setUser", false);
                }
            });
        },
    },
};
</script>