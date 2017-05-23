<template>
    <i class="icon ion-md-trash" @click="deleteTweet"></i>
</template>

<script>
import ApiClient from '../api/api-client.js';

export default {
    mixins: [ ApiClient ],

    props: [ 'tweet' ],

    methods: {
        deleteTweet() {
            this.delete('tweets/' + this.tweet.id).then(() => {
                store.delete('tweets', this.tweet);
            });
        },
    },
}
</script>
