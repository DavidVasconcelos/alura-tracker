<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja iniciar?" v-model="description" />
            </div>
            <div class="column">
                <!--timer-finished is an event that comes from child  -->
                <tasktimer @timer-finished="finishTask" @clean-tasks="cleanTasks" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskTimer from './TaskTimer.vue';

export default defineComponent({
    name: 'TaskForm',
    emits: ['whenSaveTask', 'whenCleanTasks'],
    components: {
        'tasktimer': TaskTimer
    },
    data() {
        return {
            description: ''
        }
    },
    methods: {
        finishTask(timeElapsed: number): void {
            this.$emit('whenSaveTask', {
                durationInSeconds: timeElapsed,
                description: this.description
            });
            this.description = '';
        },
        cleanTasks(): void {
            this.$emit('whenCleanTasks')
        }
    },
})
</script>
