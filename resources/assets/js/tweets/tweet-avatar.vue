<template>
    <img class="tweet__avatar" :src="source">
</template>

<script>
const avatars_local = [
    'drumpf',
    'keith damiani',
    'samantha geitz',
];

export default {
    props: [ 'name' ],

    data() {
        return {
            source: '',
        }
    },

    computed: {
        filename() {
            var name = this.name ? this.name : store.username;

            if (name && avatars_local.includes(name.toLowerCase())) {
                return name.replace(/\s/g,'').toLowerCase();
            }

            return 'unknown';
        },
    },

    mounted() {
        this.$nextTick(() => {
            this.source = '/images/avatars/' + this.filename + '.png';
        });
    },
}
</script>
