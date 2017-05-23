<template>
    <div class="app">
        <tweet-compose></tweet-compose>

        <tweet-search @searched="filterTweets"></tweet-search>

        <div class="tweet-list">
            <tweet-view
                v-for="tweet in sorted_tweets"
                :key="tweet.id"
                :tweet="tweet"
            ></tweet-view>
        </div>
    </div>
</template>

<script>
import ApiClient from '../api/api-client.js';
import TweetCompose from '../tweets/tweet-compose.vue';
import TweetSearch from '../tweets/tweet-search.vue';
import TweetView from '../tweets/tweet-view.vue';

export default {
    mixins: [ ApiClient ],

    components: {
        TweetCompose,
        TweetSearch,
        TweetView,
    },

    data() {
        return {
            filtered_tweets: [],
        }
    },

    computed: {
        sorted_tweets() { return _.orderBy(this.filtered_tweets, 'created_at', 'desc') },
        tweets() { return store.tweets },
    },

    methods: {
        filterTweets(filtered_tweets) {
            this.filtered_tweets = filtered_tweets;
        },
    },

    created() {
        store.load('tweets', 'tweets').then((response) => {
            this.filtered_tweets = this.tweets;
        });
    },
}
</script>
