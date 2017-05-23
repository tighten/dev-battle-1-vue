<template>
    <div>
        <div :class="[ 'form-group', { 'has-error has-feedback': error }]">
            <label v-show="label" :for="name" class="control-label">{{ label }}</label>

            <div>
                <input :class="[ 'form-control' ]" :id="name"
                    :name="name"
                    :type="type"
                    :value="value"
                    @input="updateValue($event.target.value)"
                >

                <div v-show="error" class="text-danger">
                    <i class="icon ion-ios-alert-outline"></i> {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'error': {},
        'label': {},
        'name': {},
        'type': { default: 'text' },
        'value' : {},
    },

    methods: {
        updateValue(value) {
            this.$emit('input', value);
        },
    },
}
</script>
