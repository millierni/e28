import { createApp } from "vue"
import App from "./App.vue"


// Import just the methods we need from the VueRouter module
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import MinersPage from "@/components/pages/MinersPage.vue";
import FAQPage from "@/components/pages/FAQPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/miners", component: MinersPage },
        { path: "/FAQ", component: FAQPage },
    ]
})

createApp(App).use(router).mount("#app")