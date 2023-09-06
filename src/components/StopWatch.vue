<template>
    <section>
        <strong>{{ timeElapsed }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StopWatch',
    props: {
        timeInSeconds: {
            type: Number,
            default: 0
        }
    },
    computed: {
        timeElapsed(): string {
            return new Date(this.timeInSeconds * 1000).toISOString().substring(11, 19)
        }
    },
})
</script>
