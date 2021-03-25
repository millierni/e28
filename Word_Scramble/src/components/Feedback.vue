<template>
    <div v-if="message">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Feedback',
    props: {
      message: {type: String}  
    },
    data() {
        return {
            isFeedback: false,
        }
    },
    methods: {
        showFeedback() {
            this.feedback = true;
        }
    },
};
</script>

<style>
</style>