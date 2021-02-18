// Define the options of our application
const shoppingList = {
    data() {
        return {
            playerName: '',
            mysteryNumber: 4,
            item: null,
            list: [],
        }
    },
    methods: {
        addList: function (item) {
            // Note how data properties are accessed via `this`
            this.list.push(item);
            console.log(item);
        }
    }
}

// Create a new Vue instance using our options
const listApp = Vue.createApp(shoppingList).mount('#listApp');
