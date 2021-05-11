import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,

    state: {
        minersCount: 0,
        user: null
    },

    mutations: {
        setMinersCount(state, payload) {
            state.minersCount = payload;
        },

        setUser(state, payload) {
            state.user = payload;
        },
    
    },

    actions: {
        authUser(context) {
            return new Promise((resolve) => {
                axios.post('auth').then((response) => {

                    if (response.data != null) {

                        if (response.data.authenticated) {
                            context.commit('setUser', response.data.user);
                        } 
                        else {
                            context.commit('setUser', false);
                        }
        
                        resolve();
                    }
                });
            });
        },
    }
})
