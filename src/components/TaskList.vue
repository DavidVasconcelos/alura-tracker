<template>
    <taskbox>
        <div class="columns">
            <div class="column is-4">{{ task.description || 'Tarefa sem descrição' }}</div>
            <div class="column is-3"> {{ task.project?.name || 'N/D' }}</div>
            <!-- : -> link with variable -->
            <div class="column">
                <stopwatch :timeInSeconds="task.durationInSeconds" />
            </div>
        </div>
    </taskbox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import StopWatch from './StopWatch.vue';
import TaskBox from './TaskBox.vue';
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'TaskList',
    components: {
        'stopwatch': StopWatch,
        'taskbox': TaskBox
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
})
</script>

