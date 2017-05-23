<template>
    <div class="tweet-list">
        <tweet-compose @added="added">
        </tweet-compose>

        <tweet-view v-for="tweet in sorted_tweets"
            :key="tweet.id"
            :tweet="tweet"
        ></tweet-view>
    </div>
</template>

<script>
import ApiClient from '../api/api-client.js';
import TweetView from '../tweets/tweet-view.vue';
import TweetCompose from '../tweets/tweet-compose.vue';

export default {
    mixins: [ ApiClient ],

    components: {
        TweetCompose,
        TweetView,
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
