<template>
    <div class="tweet-buttons__likes">
        <i v-if="liked_by_this_user"
            class="tweet-buttons__likes--has-likes icon ion-md-heart"
            @click="likeTweet"
        ></i>

        <i v-else
            class="icon ion-md-heart-outline"
            @click="likeTweet"
        ></i>

        <p>{{ tweet.like_count + liked_by_this_user }}</p>
    </div>
</template>

<script>
import ApiClient from '../api/api-client.js';

export default {
    mixins: [ ApiClient ],

    props: [ 'tweet' ],

    data() {
        return {
            liked_by_this_user: false,
        }
    },

    methods: {
        likeTweet() {
            if (! this.liked_by_this_user) {
                this.post('tweets/' + this.tweet.id + '/likes').then(() => {
                    this.liked_by_this_user = true;
                });
            }
        },
    },
}
</script>
