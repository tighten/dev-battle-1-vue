<template>
    <div class="tweet-search">
        <input type="text" v-model="search">

        <i v-if="! search" class="icon ion-ios-search"></i>

        <i v-else class="tweet-search__clear icon ion-ios-close" @click="clear"></i>
    </div>
</template>

<script>
export default {
    computed: {
        tweets() { return store.tweets },
        filtered_tweets() {
            var search = this.search.toLowerCase();

            if (search) {
                return this.tweets.filter((tweet) => {
                    return tweet.author.toLowerCase().indexOf(search) > -1 ||
                        tweet.text.toLowerCase().indexOf(search) > -1;
                });
            } else {
                return this.tweets;
            }
        }
    },

    data() {
        return {
            search: '',
        }
    },

    methods: {
        clear() {
            this.search = '';
        },
    },

    watch: {
        search() {
            this.$emit('searched', this.filtered_tweets);
        },
        tweets() {
            this.$emit('searched', this.filtered_tweets);
        },
    },
}
</script>
