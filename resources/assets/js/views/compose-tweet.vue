<template>
    <div>
        <button class="btn btn-primary" @click="compose">
            Compose Tweet
        </button>

        <div v-if="compose_tweet">
            <input-text
                name="compose"
                v-model="text"
            >
            </input-text>

            {{ character_count }}

            <button class="btn btn-primary" :disabled="character_count < 0" @click="submit">
                Tweet!
            </button>
        </div>
    </div>
</template>

<script>
import Api from '../mixins/api.js';
import InputText from '../mixins/form/input-text.vue';

export default {
    mixins: [
        Api,
    ],

    components: {
        InputText,
    },

    computed: {
        character_count () {
            return 140 - this.text.length;
        }
    },

    data() {
        return {
            response: '',
            author: 'Keith Damiani',
            text: '',
            compose_tweet: false,
        }
    },

    methods: {
        compose() {
            this.compose_tweet = true;
        },
        submit() {
            let payload = {
                author: this.author,
                text: this.text ? this.text : 'Blank tweets were not in the spec, @stauffermatt',
            }

            this.post('tweets', payload).then((response) => {
                this.$emit('added', response);
            });
        },
    },
}
</script>
