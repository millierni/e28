<template>
    <div id="product-page">
        <h1>Product {{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String, // Dynamic segments will be Strings, even if we're getting numerical values
        },
    },
    data() {
        return {};
    },
};
</script>

<style>

</style>