<template>
  <div>
    <img id="logo" alt="ZipFoods logo" src="@/assets/images/zipfoods-logo.png">

    <nav>
        <ul>
            <li>
                <router-link
                    v-for="link in links"
                    v-bind:key="link"
                    v-bind:to="paths[link]"
                    >{{ link }}</router-link
                >
            </li>
        </ul>
    </nav>

    <router-view v-bind:products="products"></router-view>
  </div>
</template>

<script>
import { axios } from '@/common/app.js';


export default {
  name: 'App',
  data() {
    return {
      products: [],

      /* Store links in an array to maintain order */
      links: ['home', 'products', 'categories'],

      /* Map links to the appropriate component */
      paths: {
          home: '/',
          products: '/products',
          categories: '/categories',
      },
    };
  },
  mounted() {
    axios.get('/product').then((response) => {
      this.products = response.data.product;
    });
  },
};
</script>



<style src='@/assets/css/zipfoods.css'></style>