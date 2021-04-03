import { createApp } from 'vue'
import App from './App.vue'

// Import just the methods we need from the VueRouter module
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/pages/HomePage.vue';
import SecondPage from '@/components/pages/SecondPage.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/second', component: SecondPage },
    ]
})

createApp(App).use(router).mount('#app')
