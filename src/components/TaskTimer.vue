<template lang="">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <stopwatch :timeInSeconds="timeInSeconds" />
        <button class="button" @click="initTimer" :disabled="isTimerRunnig">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finishTimer" :disabled="!isTimerRunnig">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue';

export default defineComponent({
    name: 'TaskTimer',
    emits: ['timerFinished'],
    components: {
        'stopwatch': StopWatch
    },
    data() {
        return {
            timeInSeconds: 0,
            stopWatch: 0,
            isTimerRunnig: false
        }
    },
    methods: {
        initTimer() {
            // 1 sec = 1000ms
            this.stopWatch = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000)
            this.isTimerRunnig = true
        },
        finishTimer() {
            this.isTimerRunnig = false
            clearInterval(this.stopWatch)
            this.$emit('timerFinished', this.timeInSeconds)
            this.timeInSeconds = 0
        }
    },
})
</script>