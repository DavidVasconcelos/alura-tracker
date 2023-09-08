<template lang="">
<div class="box has-text-weight-bold">
    <div class="columns">
        <div class="column is-7">{{ task.description || 'Tarefa sem descrição' }}</div>
        <!-- : -> link with variable -->
        <div class="column"><stopwatch :timeInSeconds="task.durationInSeconds"/></div>    
    </div>       
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import StopWatch from './StopWatch.vue';
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'TaskList',
    components: {
        'stopwatch': StopWatch
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>
