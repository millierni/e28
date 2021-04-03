<template>
    <div id="home-page">
      <img alt="Vue logo" src="@/assets/images/logo.png">
      <h1>Home Page</h1>
      <p>This is the template for the project 2: Bitcoin Exchange App</p>
      <new-component></new-component>

        
    </div>
</template>

<script>
import NewComponent from '@/components/NewComponent.vue';

export default {
  components: { 
    "new-component": NewComponent,
  },
}
</script>

<style>

</style>