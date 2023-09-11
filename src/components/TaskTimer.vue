<template lang="">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <stopwatch :timeInSeconds="timeInSeconds" />
        <timerbutton @clicked='initTimer' buttonIcon="fas fa-play" buttonText='play' :isDisabled="isTimerRunnig"/>
        <timerbutton @clicked='finishTimer' buttonIcon="fas fa-stop" buttonText='stop' :isDisabled="!isTimerRunnig"/>
        <timerbutton @clicked='cleanTasks' buttonIcon="fas fa-recycle" buttonText='recycle'/>      
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StopWatch from './StopWatch.vue';
import TimerButton from './TimerButton.vue';

export default defineComponent({
    name: 'TaskTimer',
    emits: ['timerFinished', 'cleanTasks'],
    components: {
        'stopwatch': StopWatch,
        'timerbutton': TimerButton
    },
    data() {
        return {
            timeInSeconds: 0,
            stopWatch: 0,
            isTimerRunnig: false
        }
    },
    methods: {
        initTimer(): void {
            // 1 sec = 1000ms
            this.stopWatch = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000);
            this.isTimerRunnig = true
        },
        finishTimer(): void {
            this.isTimerRunnig = false;
            clearInterval(this.stopWatch);
            this.$emit('timerFinished', this.timeInSeconds);
            this.timeInSeconds = 0
        },
        cleanTasks(): void {
            this.$emit('cleanTasks')
        }
    },
})
</script>