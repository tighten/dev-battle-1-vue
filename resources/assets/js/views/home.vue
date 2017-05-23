<template>
    <div class="tweet-list">
        <compose-tweet @added="added">
        </compose-tweet>

        <tweet v-for="tweet in sorted_tweets"
            :key="tweet.id"
            :tweet="tweet"
        ></tweet>
    </div>
</template>

<script>
import ApiClient from '../api/api-client.js';
import Tweet from '../tweets/tweet.vue';
import ComposeTweet from '../tweets/compose-tweet.vue';

export default {
    mixins: [ ApiClient ],

    components: {
        ComposeTweet,
        Tweet,
    },

    computed: {
        sorted_tweets() {
            return _.orderBy(this.tweets, ['created_at'], ['desc']);
        },
    },

    data() {
        return {
            tweets: [],
        }
    },

    methods: {
        added(response) {
            this.tweets.push(response);
        },
    },

    created() {
        this.get('tweets').then((response) => {
            this.tweets = response;
        });
    },
}
</script>
