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
import ApiClient from '../api/api-client.js';

export default {
    mixins: [ ApiClient ],

    props: [ 'tweet' ],
}
</script>
