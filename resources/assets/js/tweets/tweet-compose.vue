<template>
    <div class="compose">
        <button
            :class="['btn', 'btn-block', 'btn-blue', { 'btn-blue--active': composing }]"
            @click="compose"
        >
            <i class="icon ion-md-create"></i>Compose Tweet
        </button>

        <transition name="compose-slide-down">
            <div v-show="composing" class="compose__container">
                <div class="compose__body">
                    <tweet-avatar></tweet-avatar>

                    <div class="compose__editor"
                        contenteditable
                        ref="textarea"
                        @input="updateBody($event.target.innerHTML)"
                        @keypress.enter.prevent
                    ></div>

                    <div class="compose__editor-highlighted"
                        v-html="body_formatted"
                    ></div>
                </div>

                <div class="compose__footer">
                    <span :class="['compose__counter', characters_remaining_class]">
                        {{ characters_remaining }}
                    </span>

                    <button
                        class="btn btn-blue"
                        :disabled="can_submit"
                        @click="submit"
                    >
                        <i class="icon ion-logo-twitter"></i>Tweet
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
const maximum_characters = 140;

import ApiClient from '../api/api-client.js';
import TweetAvatar from './tweet-avatar.vue';

export default {
    mixins: [ ApiClient ],

    components: { TweetAvatar },

    data() {
        return {
            body: '',
            composing: false,
        }
    },

    computed: {
        body_formatted() {
            return this.body.substring(0, maximum_characters) + '<span class="highlighted">' + this.body.substring(maximum_characters) + '</span>';
        },
        can_submit() {
            return this.characters_remaining == maximum_characters
                || this.characters_remaining < 0;
        },
        characters_remaining() { return maximum_characters - this.body.length },
        characters_remaining_class() {
            if (this.characters_remaining <= 10) {
                return 'compose__counter--danger';
            } else if (this.characters_remaining <= 20) {
                return 'compose__counter--warning';
            }
        },
    },

    methods: {
        compose() {
            this.composing = ! this.composing;
        },
        reset() {
            this.body = '';
            this.composing = false;
            this.$refs.textarea.innerHTML = '';
        },
        submit() {
            let payload = {
                author: store.username,
                text: this.body,
            }

            this.post('tweets', payload).then((response) => {
                store.add('tweets', response);
                this.reset();
            });
        },
        updateBody(text) {
            this.body = text;
        },
    },

    watch: {
        composing(val) {
            if (val) {
                this.$nextTick(() => {
                    this.$refs.textarea.focus();
                });
            }
        },
    }
}
</script>
