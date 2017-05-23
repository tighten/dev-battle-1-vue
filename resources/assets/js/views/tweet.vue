<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <p>{{ tweet.author }}</p>
            <p>{{ tweet.text }}</p>
            <p>{{ tweet.created_at }}</p>
        </div>
    </div>
</template>

<script>
import Api from '../mixins/api.js';

export default {
    mixins: [
        Api,
    ],

    props: [
        'tweet',
    ],
}
</script>
