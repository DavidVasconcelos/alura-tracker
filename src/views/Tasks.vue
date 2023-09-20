<template>
    <!--whenSaveTask is an event that comes from child  -->
    <taskform @whenSaveTask="saveTask" @whenCleanTasks="cleanTasks" />
    <div class="list">
        <!-- list of tasks, alaways item first, list index in second -->
        <tasklist v-for="(task, index) in tasks" :key="index" :task="task" />
        <taskbox v-if="isListEmpty">
            <span>Você não está muito produtivo hoje 😢</span>
        </taskbox>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import TaskBox from '../components/TaskBox.vue';
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'TasksView',
    components: {
        'taskform': TaskForm,
        'taskbox': TaskBox,
        'tasklist': TaskList,
    },
    computed: {
        isListEmpty(): boolean {
            return this.tasks.length === 0;
        }
    },
    data() {
        return {
            tasks: [] as ITask[]
        }
    },
    methods: {
        saveTask(task: ITask) {
            this.tasks.push(task);
        },
        cleanTasks(): void {
            this.tasks = [];
        }
    },
});
</script>
