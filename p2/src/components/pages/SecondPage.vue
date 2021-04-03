<template>
    <div id="second-page">
        <h1>Second Page Content</h1>
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