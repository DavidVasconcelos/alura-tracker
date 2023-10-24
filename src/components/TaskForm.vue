<template>
    <div class="box task-form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa deseja iniciar?" v-model="description" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="projectId">
                        <option value="">Selecionet o projeto</option>
                        <option :value="project.id" v-for="project in projects" :key="project.id">
                            {{ project.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <!--timer-finished is an event that comes from child  -->
                <tasktimer @timer-finished="finishTask" @clean-tasks="cleanTasks" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TaskTimer from './TaskTimer.vue';
import { useStore } from '../store/index';
import { NOTIFY } from '@/store/MutationType';
import { NotificationType } from '@/interfaces/INotification';

export default defineComponent({
    name: 'TaskForm',
    emits: ['whenSaveTask', 'whenCleanTasks'],
    components: {
        'tasktimer': TaskTimer
    },
    data() {
        return {
            description: '',
            projectId: '',
        }
    },
    methods: {
        finishTask(timeElapsed: number): void {
            const project = this.projects.find((p) => p.id == this.projectId);
            if (!project) {
                this.store.commit(NOTIFY, {
                    title: 'Ops!',
                    text: 'Selecione um projeto antes de finalizar a tarefa',
                    type: NotificationType.DANGER
                });
                return;
            }
            this.$emit('whenSaveTask', {
                durationInSeconds: timeElapsed,
                description: this.description,
                project: this.projects.find(proj => proj.id == this.projectId)
            });
            this.description = '';
        },
        cleanTasks(): void {
            this.$emit('whenCleanTasks')
        }
    },
    setup() {
        const store = useStore();
        return {
            store,
            // computed because is dynamic
            projects: computed(() => store.state.projects)
        }
    }
})
</script>
<style>
.task-form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>
