<template>
    <div class="tweet">
        <div class="tweet__content">
            <div class="tweet__details">
                <p><strong>{{ tweet.author }}</strong></p>

                <p class="text-muted">{{ tweet.created_at | human_date }}</p>
            </div>

            <h3 class="tweet__text">{{ tweet.text }}</h3>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: [ 'tweet' ],

    filters: {
        human_date(date) { return moment.utc(date, 'YYYY-MM-DD hh:mm:ss').fromNow() },
    },
}
</script>
