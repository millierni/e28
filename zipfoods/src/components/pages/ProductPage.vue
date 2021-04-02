<template>
    <div id="product-page">
        <!-- <h1>Product {{ id }}</h1> -->
        <!-- <h2>{{ products }}</h2> -->


        <div v-if="is_exist === true">
            <div v-for="item in selectProduct" v-bind:key="item">
                <h1>{{ item.name }}</h1>
                <img
                    class="thumb"
                    v-bind:src="require('@/assets/images/products/' + item.id + '.jpg')"
                />
                <p>{{ item.description }}</p>
                <h3>${{ item.price }}</h3>
            </div>
        </div>
        <div v-else>
            <p>
                Product {{ id }} not found, return to
                <router-link
                    v-for="link in links"
                    v-bind:key="link"
                    v-bind:to="paths[link]">
                    
                    {{ link }}
                </router-link>
            </p>
        </div>


    </div>
</template>

<script>
import { products } from "@/common/products.js";

export default {
    props: {
        id: {
            type: String, // Dynamic segments will be Strings, even if we're getting numerical values
        },

    },

    computed: {
        selectProduct: function() {
            let filteredProduct = this.products.filter(item => item.id == this.id);
            this.verify(filteredProduct);

            return filteredProduct
        },
    },

    data() {
        return {
            products: products,
            is_exist: true,
            
            /* Store links in an array to maintain order */
            links: ['products'],

            /* Map links to the appropriate component */
            paths: {
                products: '/products',
            },
        };
    },

    methods: {
        verify: function(item) {
            if (item.length === 0) {
                this.is_exist = false;
            }
            else {
                this.is_exist = true;
            }
        },
    },

};
</script>

<style>

</style>