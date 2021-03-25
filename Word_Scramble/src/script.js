import { createApp } from 'vue'
import Feedback from './components/Feedback.vue'

const wordScramble = {
    data() {
        return {
            playerName: '',
            player: '',
            word: '',
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', 'Rushmore’s left edge'],
                ['pumpkin', 'Halloween’s favorite fruit'],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            guess: null,
            isCorrect: false,
            isIncorrect: false,
            feedback: '',

            feedbacks: [
                {correct: "correct!!"},
                {incorrect: "incorrect.."},
            ]
        }
    },

    computed: {
        scrambleWord: function() {
            let wordCharacters = [];
            let scramble = '';

            if (this.word.length === 2) {
                let i = 0;
                while (i < this.word[0].length) {
                    wordCharacters.push(this.word[0][i]);
                    i++;
                }
    
                while (wordCharacters.length > 0) {
                    let rdNumber = Math.floor(Math.random() * (wordCharacters.length - 0));
                    scramble = scramble + wordCharacters[rdNumber];
                    wordCharacters.splice(rdNumber, 1);
                }
            }


            return scramble;
        }
    },

    methods: {
        resetFields: function() {
            this.guess = null;
        },

        pickWord: function() {
            let new_word = '';
            do {
                new_word = this.words[Math.floor(Math.random() * (this.words.length - 0))];
            } while (new_word === this.word);
            this.word = new_word;
        },

        addPlayer: function(player) {
            this.playerName = player;
            this.pickWord();
        },

        resetGame: function() {
            this.isCorrect = false;
            this.isIncorrect = false;
            this.feedback = '';
            this.pickWord();
            this.scrambleWord;
        },

        guessing: function(guess) {
            this.resetFields();

            if (guess === this.word[0]) {
                this.isIncorrect = false;
                this.isCorrect = true;
                this.feedback = "You got it! Nice work."

            }
            else {
                this.isIncorrect = true;
                this.isCorrect = false;
                this.feedback = "Sorry, that's not correct. Please try again."
            }
        },
    }
}



// Create a new Vue instance using our options
const wordScrambleApp = createApp(wordScramble)
wordScrambleApp.component('feedback', Feedback);
wordScrambleApp.mount('#wordScrambleApp');