<template lang="">
    <button class="button" @click="clicked" :disabled="isDisabled">
        <span class="icon">
            <i :class="buttonIcon"></i>
        </span>
        <span>{{buttonText}}</span>
    </button>    
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TimerButton',
    emits: ['clicked'],
    props: {
        isDisabled: {
            type: Boolean
        },
        buttonIcon: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
    },
    methods: {
        clicked(): void {
            this.$emit('clicked')
        }
    }
})
</script>
